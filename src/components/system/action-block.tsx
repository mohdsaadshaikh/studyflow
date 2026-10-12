import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Tone = "accent" | "forest" | "card" | "paper";

const TONE_CLASS: Record<Tone, string> = {
  accent: "ink-accent",
  forest: "ink-forest",
  card: "ink-card",
  paper: "ink-paper",
};

type BlockContentProps = {
  /** Small mono caption above the title, e.g. "Continue", "Next". */
  label?: ReactNode;
  title: ReactNode;
  /** Leading icon (rendered before the text block). */
  icon?: ReactNode;
  /** Direction of the trailing arrow; "none" hides it. */
  arrow?: "right" | "left" | "none";
  size?: "sm" | "md" | "lg";
  align?: "start" | "end";
};

function BlockContent({ label, title, icon, arrow = "right", size = "md", align = "start" }: BlockContentProps) {
  const Arrow = arrow === "left" ? ArrowLeft : ArrowRight;
  const arrowEl =
    arrow === "none" ? null : (
      <Arrow
        className={cn(
          "shrink-0 transition-transform duration-200 ease-[var(--ease-out)]",
          size === "sm" ? "size-4" : "size-5",
        )}
        aria-hidden="true"
      />
    );
  return (
    <>
      {arrow === "left" && arrowEl}
      {icon && <span className="shrink-0">{icon}</span>}
      <span className={cn("flex min-w-0 flex-1 flex-col gap-1", align === "end" && "items-end text-right")}>
        {label && <span className="ink-label opacity-80">{label}</span>}
        <span
          className={cn(
            "min-w-0 font-heading font-semibold leading-tight",
            size === "sm" && "text-sm",
            size === "md" && "text-base sm:text-lg",
            size === "lg" && "text-lg sm:text-xl",
          )}
        >
          {title}
        </span>
      </span>
      {arrow !== "left" && arrowEl}
    </>
  );
}

const blockClass = (tone: Tone, size: BlockContentProps["size"], className?: string) =>
  cn(
    "ink-interactive ink-arrow-host inline-flex max-w-full items-center gap-3 text-left",
    TONE_CLASS[tone],
    size === "sm" ? "px-3 py-2" : size === "lg" ? "px-5 py-4" : "px-4 py-3",
    className,
  );

/** The app's signature control: an ink-outlined block with mono label, heading line and arrow. */
export function ActionBlock({
  tone = "accent",
  label,
  title,
  icon,
  arrow,
  size = "md",
  align,
  className,
  ...linkProps
}: BlockContentProps & { tone?: Tone; className?: string } & Omit<ComponentProps<typeof Link>, "title" | "className">) {
  return (
    <Link className={blockClass(tone, size, className)} {...linkProps}>
      <BlockContent label={label} title={title} icon={icon} arrow={arrow} size={size} align={align} />
    </Link>
  );
}

/** Same block as a <button>, for in-page actions. */
export function ActionBlockButton({
  tone = "accent",
  label,
  title,
  icon,
  arrow = "none",
  size = "md",
  align,
  className,
  ...buttonProps
}: BlockContentProps & { tone?: Tone; className?: string } & Omit<ComponentProps<"button">, "title" | "className">) {
  return (
    <button type="button" className={blockClass(tone, size, className)} {...buttonProps}>
      <BlockContent label={label} title={title} icon={icon} arrow={arrow} size={size} align={align} />
    </button>
  );
}

/**
 * Compact one-line block link for secondary actions inside lists and panels ("Review",
 * "Mock test", "Re-read the topic"). Same outline, lift and press as ActionBlock; the text
 * is a caption-sized label with an optional leading icon and a trailing arrow.
 */
export function ActionTag({
  tone = "paper",
  icon,
  arrow = true,
  className,
  children,
  ...linkProps
}: {
  tone?: Tone;
  icon?: ReactNode;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  return (
    <Link
      className={cn(
        "ink-interactive ink-arrow-host ink-label inline-flex shrink-0 items-center gap-1.5 px-2.5 py-1.5",
        TONE_CLASS[tone],
        className,
      )}
      {...linkProps}
    >
      {icon}
      {children}
      {arrow && <ArrowRight className="size-3.5 transition-transform duration-200 ease-[var(--ease-out)]" aria-hidden="true" />}
    </Link>
  );
}
