import {
  Search,
  TrendingUp,
  Cpu,
  Code2,
  ShoppingBag,
  Server,
  Bot,
  Users,
} from "lucide-react";
import { skillGroups } from "@/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Cpu,
  Code2,
  ShoppingBag,
  Server,
  Bot,
  Users,
};

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Skills"
          title="Tools & Expertise"
          description="A full-stack of capabilities spanning development, marketing, automation, and infrastructure."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillGroups.map((group, i) => {
            const Icon = ICON_MAP[group.icon];
            return (
              <FadeIn key={group.category} delay={i * 60} direction="up">
                <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors h-full">
                  <div className="flex items-center gap-2.5 mb-4">
                    {Icon && (
                      <div className="p-1.5 rounded-md bg-[var(--accent-muted)]">
                        <Icon size={14} className="text-[var(--accent)]" />
                      </div>
                    )}
                    <h3 className="font-medium text-sm text-[var(--text-primary)]">
                      {group.category}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[11px] rounded bg-[var(--surface-elevated)] text-[var(--text-secondary)] font-mono border border-[var(--border)] hover:text-[var(--accent)] hover:border-[var(--accent)]/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
