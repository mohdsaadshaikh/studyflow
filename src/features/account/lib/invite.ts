"use client";

import { toast } from "sonner";

/**
 * Gentle sign-in invite shown when a guest touches an account feature.
 * Never blocks anything; the guest can dismiss and carry on.
 */
export function inviteToSignIn(reason: string, signIn: () => void) {
  toast(reason, {
    id: "signin-invite",
    description: "Free with Google. Your current progress comes with you.",
    action: { label: "Sign in", onClick: () => signIn() },
    duration: 7000,
  });
}
