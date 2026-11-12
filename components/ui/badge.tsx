import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export type BadgeVariant = "default" | "accent" | "success" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-surface-muted text-foreground border border-border",
  accent: "bg-accent/10 text-accent border border-accent/20",
  success: "bg-success/10 text-success border border-success/20",
  outline: "bg-transparent text-muted-foreground border border-border",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantClasses[variant],
        className,
      )}
      {...props}
    />
  );
}

