import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/cn";

const variants = {
  primary:
    "bg-brand text-brand-foreground shadow-soft hover:bg-brand-hover active:bg-brand-pressed",
  accent:
    "bg-accent text-brand-foreground shadow-soft hover:bg-accent-hover active:bg-accent-hover",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-surface-muted active:bg-muted",
  ghost: "text-brand hover:bg-brand-soft active:bg-brand-soft-strong",
  "outline-light":
    "border border-brand-foreground/35 bg-brand-foreground/10 text-brand-foreground hover:bg-brand-foreground/15 active:bg-brand-foreground/20",
} as const;

type ButtonLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: keyof typeof variants;
};

export function ButtonLink({
  className,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-extrabold transition-[background-color,color,border-color,box-shadow] duration-200",
        "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-focus/35",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
