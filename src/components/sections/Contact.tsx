"use client";

import { useState } from "react";
import { Copy, Check, Link2, Globe, Mail } from "lucide-react";
import { personal } from "@/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const ICON_MAP: Record<string, React.ElementType> = {
  Link2,
  Mail,
  Globe,
};

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <SectionHeader
            label="Contact"
            title="Let's Build Something"
            description="Have a project in mind, need SEO strategy, or want to automate your operations? I'd love to hear from you."
            align="center"
          />

          <FadeIn delay={200} direction="up">
            <div className="mb-8">
              <button
                onClick={copyEmail}
                className="group inline-flex items-center gap-3 px-6 py-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)]/40 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span className="text-lg font-mono text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                  {personal.email}
                </span>
                <span className="text-[var(--text-tertiary)] group-hover:text-[var(--accent)] transition-colors">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </span>
              </button>
              {copied && (
                <p className="text-xs text-[var(--success)] mt-2 font-mono">
                  Copied to clipboard!
                </p>
              )}
            </div>
          </FadeIn>

          <FadeIn delay={300} direction="up">
            <div className="flex items-center justify-center gap-4 mb-8">
              {personal.socials.map((social) => {
                const Icon = ICON_MAP[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[var(--surface)] border border-[var(--border)] text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)]/40 transition-all"
                  >
                    {Icon && <Icon size={15} />}
                    {social.label}
                  </a>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={400} direction="up">
            <Button href={`mailto:${personal.email}`} size="lg">
              <Mail size={16} />
              Send Me an Email
            </Button>
          </FadeIn>

          <FadeIn delay={480} direction="up">
            <div className="mt-8 flex items-center justify-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--success)]"></span>
              </span>
              <span className="text-sm text-[var(--text-tertiary)]">
                Available for new projects & collaborations
              </span>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
