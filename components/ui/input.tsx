import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export function Input({
  className,
  type = "text",
  hasError = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      aria-invalid={hasError || undefined}
      className={cn(
        "flex h-10 w-full rounded-xl border bg-surface px-3.5 py-2 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        hasError ? "border-destructive" : "border-border",
        className,
      )}
      {...props}
    />
  );
}

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export function Textarea({
  className,
  hasError = false,
  ...props
}: TextareaProps) {
  return (
    <textarea
      aria-invalid={hasError || undefined}
      className={cn(
        "flex min-h-24 w-full rounded-xl border bg-surface px-3.5 py-2.5 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        hasError ? "border-destructive" : "border-border",
        className,
      )}
      {...props}
    />
  );
}

