import { cn } from "@/lib/utils";
import { FadeIn } from "./FadeIn";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-12", { "text-center": align === "center" }, className)}>
      <FadeIn>
        <span className="text-xs font-mono font-medium tracking-widest uppercase text-[var(--accent)] mb-3 block">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={80}>
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={160}>
          <p
            className={cn(
              "text-[var(--text-secondary)] text-base md:text-lg leading-relaxed",
              { "max-w-2xl mx-auto": align === "center" }
            )}
          >
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
