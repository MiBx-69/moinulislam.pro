import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "success" | "outline";
}

export function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium font-mono transition-colors",
        {
          "bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]":
            variant === "default",
          "bg-[var(--accent-muted)] text-[var(--accent)] border border-[var(--accent)]/20":
            variant === "accent",
          "bg-[var(--success)]/10 text-[var(--success)] border border-[var(--success)]/20":
            variant === "success",
          "border border-[var(--border)] text-[var(--text-tertiary)]":
            variant === "outline",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
