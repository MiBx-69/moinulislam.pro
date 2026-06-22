import { experiences } from "@/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          label="Experience"
          title="Where I've Worked"
          description="A track record of building, leading, and delivering across IT, marketing, and development."
        />

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 100} direction="left">
                <div className="relative pl-12 md:pl-16">
                  <div
                    className={`absolute left-[13px] md:left-[21px] top-1.5 w-3 h-3 rounded-full border-2 ${
                      exp.current
                        ? "bg-[var(--accent)] border-[var(--accent)]"
                        : "bg-[var(--surface)] border-[var(--border)]"
                    }`}
                  >
                    {exp.current && (
                      <span className="absolute inset-0 rounded-full bg-[var(--accent)] animate-ping opacity-30" />
                    )}
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-colors">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-semibold text-[var(--text-primary)]">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-[var(--accent)] mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs font-mono text-[var(--text-tertiary)] bg-[var(--surface-elevated)] px-2.5 py-1 rounded-md border border-[var(--border)]">
                          {exp.period}
                        </span>
                        {exp.current && (
                          <Badge variant="success">Current</Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-[var(--text-secondary)] flex items-start gap-2"
                        >
                          <span className="text-[var(--accent)] mt-1 flex-shrink-0">
                            ▸
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
