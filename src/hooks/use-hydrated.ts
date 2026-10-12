import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * False during SSR and the hydration pass, true afterwards. Use it to hold back UI that
 * depends on client-only state (auth status) so a late-hydrating subtree can't mismatch.
 */
export function useHydrated() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
