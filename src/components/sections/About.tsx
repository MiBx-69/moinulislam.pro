import { personal } from "@/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";

const STATS = [
  { number: "100+", label: "Client Projects" },
  { number: "5+", label: "Years Experience" },
  { number: "85%+", label: "Client Retention" },
  { number: "5+", label: "International Markets" },
];

const COMPETENCIES = [
  "SEO & AI Automation",
  "E-commerce Growth Strategy",
  "Paid Advertising (Meta, Google, TikTok)",
  "Scalable System Architecture",
  "CRM & Lifecycle Management",
  "Cybersecurity & Data Protection",
];

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeader
              label="About Me"
              title="Building systems that generate real results"
            />

            <FadeIn delay={200} direction="up">
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {personal.bio}
              </p>
            </FadeIn>

            <FadeIn delay={280} direction="up">
              <p className="text-[var(--text-secondary)] leading-relaxed mb-8">
                I combine technical depth with business strategy — whether that&apos;s
                architecting AI automation pipelines that handle 1,000+ processes/sec,
                building Shopify stores that generate 10x ROAS, or designing secure
                infrastructure that keeps businesses running without friction.
              </p>
            </FadeIn>

            <FadeIn delay={360} direction="up">
              <div>
                <p className="text-sm font-mono text-[var(--text-tertiary)] uppercase tracking-widest mb-3">
                  Core Competencies
                </p>
                <div className="flex flex-wrap gap-2">
                  {COMPETENCIES.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-xs rounded-md bg-[var(--surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)] font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 100} direction="up">
                <div className="p-6 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-[var(--text-secondary)]">
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}

            <FadeIn delay={400} direction="up" className="col-span-2">
              <div className="p-6 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/20">
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  <span className="text-[var(--accent)] font-medium">Currently</span>{" "}
                  leading IT & digital operations at Universes E-commerce, running
                  MiBrand Agency, and taking on select freelance projects. Open to
                  exciting opportunities.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
