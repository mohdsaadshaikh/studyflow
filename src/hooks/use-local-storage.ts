"use client";

import { useCallback, useMemo, useSyncExternalStore } from "react";

// Same-tab writes don't fire the "storage" event, so we broadcast our own.
const LOCAL_EVENT = "local-storage-change";

function subscribe(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(LOCAL_EVENT, onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LOCAL_EVENT, onChange);
  };
}

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function parseOr<T>(raw: string | null, fallbackJson: string): T {
  if (raw !== null) {
    try {
      return JSON.parse(raw) as T;
    } catch {
      /* fall through to the initial value */
    }
  }
  return JSON.parse(fallbackJson) as T;
}

/**
 * JSON value persisted in localStorage. Renders `initial` on the server and during
 * hydration, then the stored value; stays in sync across components and tabs.
 */
export function useLocalStorage<T>(key: string, initial: T) {
  // Serialized so callers can pass inline literals without breaking memoization.
  const initialJson = JSON.stringify(initial);
  const raw = useSyncExternalStore(subscribe, () => read(key), () => null);
  const value = useMemo(() => parseOr<T>(raw, initialJson), [raw, initialJson]);

  const setValue = useCallback(
    (next: T | ((prev: T) => T)) => {
      const prev = parseOr<T>(read(key), initialJson);
      const resolved = typeof next === "function" ? (next as (prev: T) => T)(prev) : next;
      try {
        localStorage.setItem(key, JSON.stringify(resolved));
      } catch {
        /* storage full or blocked; nothing to persist to */
      }
      window.dispatchEvent(new Event(LOCAL_EVENT));
    },
    [key, initialJson],
  );

  return [value, setValue] as const;
}
