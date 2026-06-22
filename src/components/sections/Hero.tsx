"use client";

import { Link2, Mail, Globe, ArrowDown, MapPin } from "lucide-react";
import { personal } from "@/data";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const ICON_MAP: Record<string, React.ElementType> = {
  Link2,
  Mail,
  Globe,
};

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-16"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="max-w-3xl">
          <FadeIn delay={0}>
            <div className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--success)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--success)]"></span>
              </span>
              <span className="text-sm font-mono text-[var(--success)]">
                Available for work
              </span>
              <span className="text-[var(--text-tertiary)] mx-1">·</span>
              <span className="text-sm text-[var(--text-tertiary)] flex items-center gap-1">
                <MapPin size={12} />
                {personal.location}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--text-primary)] leading-tight mb-4">
              {personal.name.split(" ").slice(0, 2).join(" ")}
              <br />
              <span
                className="text-transparent"
                style={{
                  background: "linear-gradient(135deg, #6366f1 0%, #a78bfa 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {personal.name.split(" ").slice(2).join(" ")}
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={180}>
            <p className="text-lg md:text-xl text-[var(--accent)] font-medium mb-4">
              {personal.title}
            </p>
          </FadeIn>

          <FadeIn delay={240}>
            <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              {personal.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={320}>
            <div className="flex flex-wrap gap-3 mb-10">
              <Button href="#projects" size="lg">
                View My Work
              </Button>
              <Button href="#contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex items-center gap-4">
              {personal.socials.map((social) => {
                const Icon = ICON_MAP[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--accent)] transition-colors"
                  >
                    {Icon && <Icon size={16} />}
                    <span>{social.label}</span>
                  </a>
                );
              })}
            </div>
          </FadeIn>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-[var(--text-tertiary)]">
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
