"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { toast } from "sonner";
import { getSupabase, isSupabaseConfigured } from "@/lib/supabase/client";
import { clearLocalAccountState, saveTick, syncProgressOnSignIn } from "../lib/progress-sync";

type Status = "loading" | "guest" | "signed-in" | "unavailable";

type AuthContextValue = {
  status: Status;
  user: User | null;
  /** True while guest ticks are being merged or the account is being read. */
  syncing: boolean;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
  /** Mirror a tick to the account when signed in; no-op for guests. */
  recordTick: (key: string, done: boolean) => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<Status>(isSupabaseConfigured() ? "loading" : "unavailable");
  const [user, setUser] = useState<User | null>(null);
  const [syncing, setSyncing] = useState(false);

  useEffect(() => {
    const supabase = getSupabase();
    if (!supabase) return;

    const handleUser = async (next: User | null, isNewSignIn: boolean) => {
      setUser(next);
      setStatus(next ? "signed-in" : "guest");
      if (!next) return;
      setSyncing(true);
      try {
        const uploaded = await syncProgressOnSignIn(supabase, next.id);
        if (isNewSignIn) {
          toast.success(
            uploaded > 0 ? `Synced ${uploaded} ticked topic${uploaded === 1 ? "" : "s"} to your account` : "Signed in. Your progress now syncs.",
          );
        }
      } catch {
        toast.error("Couldn't sync your progress. It's still saved on this device.");
      } finally {
        setSyncing(false);
      }
    };

    supabase.auth.getSession().then(({ data }) => handleUser(data.session?.user ?? null, false));

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") void handleUser(session?.user ?? null, true);
      if (event === "SIGNED_OUT") {
        setUser(null);
        setStatus("guest");
      }
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const signInWithGoogle = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase) return;
    // Check the provider is switched on first, so a student never lands on Supabase's raw error page.
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1/settings`, {
        headers: { apikey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY! },
      });
      const settings = (await res.json()) as { external?: { google?: boolean } };
      if (!settings.external?.google) {
        toast.error("Google sign-in isn't set up yet.", { description: "Everything still works as a guest; your progress is saved on this device." });
        return;
      }
    } catch {
      /* settings check failed (offline?): let the redirect try anyway */
    }
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      // Come back to the page the student was on.
      options: { redirectTo: window.location.href.split("#")[0] },
    });
    if (error) toast.error("Google sign-in isn't available right now.");
  }, []);

  const signOut = useCallback(async () => {
    const supabase = getSupabase();
    if (!supabase) return;
    await supabase.auth.signOut();
    clearLocalAccountState();
    toast("Signed out. This device is a guest again.");
  }, []);

  const recordTick = useCallback(
    (key: string, done: boolean) => {
      const supabase = getSupabase();
      if (!supabase || !user) return;
      saveTick(supabase, user.id, key, done).catch(() =>
        toast.error("That tick didn't reach your account. It's saved on this device."),
      );
    },
    [user],
  );

  const value = useMemo(
    () => ({ status, user, syncing, signInWithGoogle, signOut, recordTick }),
    [status, user, syncing, signInWithGoogle, signOut, recordTick],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
