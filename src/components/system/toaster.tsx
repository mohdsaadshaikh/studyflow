"use client";

import { Toaster as Sonner } from "sonner";
import { CircleCheck, Info, LoaderCircle, OctagonX, TriangleAlert } from "lucide-react";

/**
 * App toasts in the ink-block language. Always light: the app has one cream theme, and
 * following the OS dark mode made description text unreadable on the cream card.
 */
export function Toaster() {
  return (
    <Sonner
      theme="light"
      position="bottom-right"
      gap={10}
      icons={{
        success: <CircleCheck className="size-5 text-primary" aria-hidden="true" />,
        info: <Info className="size-5 text-primary" aria-hidden="true" />,
        warning: <TriangleAlert className="size-5 text-destructive" aria-hidden="true" />,
        error: <OctagonX className="size-5 text-destructive" aria-hidden="true" />,
        loading: <LoaderCircle className="size-5 animate-spin text-primary" aria-hidden="true" />,
      }}
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: "ink-toast",
          title: "ink-toast-title",
          description: "ink-toast-description",
          icon: "ink-toast-icon",
          content: "ink-toast-content",
          actionButton: "ink-toast-action",
          cancelButton: "ink-toast-cancel",
          closeButton: "ink-toast-close",
        },
      }}
    />
  );
}
