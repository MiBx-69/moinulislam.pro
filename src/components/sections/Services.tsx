"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  TrendingUp,
  Bot,
  Check,
  ArrowRight,
  Search,
  ShoppingBag,
  BarChart2,
  Cpu,
  Code2,
  Zap,
} from "lucide-react";
import { personal } from "@/data";

const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(
  "Hi Moinul, I'd like to discuss working together."
)}`;

const TRACKS = [
  {
    key: "marketing",
    label: "Marketing & Growth",
    tagline: "Bring in customers and scale revenue with data-driven campaigns.",
    icon: TrendingUp,
    accent: "#177D63",
    accentBg: "rgba(23,125,99,0.08)",
    accentBorder: "rgba(23,125,99,0.25)",
    points: [
      { icon: Search, text: "SEO, Local SEO & Google Business ranking" },
      { icon: TrendingUp, text: "Meta, Google & TikTok paid advertising" },
      { icon: ShoppingBag, text: "Shopify store growth & conversion optimization" },
      { icon: BarChart2, text: "Analytics, tracking & performance reporting" },
    ],
    cta: "Hire for Marketing",
  },
  {
    key: "dev",
    label: "Development & Automation",
    tagline: "Build systems that run your business while you sleep.",
    icon: Bot,
    accent: "#BF8230",
    accentBg: "rgba(191,130,48,0.09)",
    accentBorder: "rgba(191,130,48,0.28)",
    points: [
      { icon: Cpu, text: "AI automation & custom workflow systems" },
      { icon: Code2, text: "Web apps, POS, dashboards & admin panels" },
      { icon: Zap, text: "API, webhook & CRM integrations" },
      { icon: Bot, text: "Telegram / WhatsApp bots & scripting" },
    ],
    cta: "Hire for Dev & Automation",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 30%, rgba(23,125,99,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-label">How I Can Help</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17] tracking-[-0.01em] mb-4">
            Two Ways to Work With Me
          </h2>
          <p className="text-[#5A534B] leading-relaxed">
            Whether you need more customers or smarter systems, I deliver end-to-end —
            strategy, execution, and measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {TRACKS.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.key}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.12 }}
                className="card-base p-7 flex flex-col group"
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-7 right-7 h-px opacity-60"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${track.accent}, transparent)`,
                  }}
                />

                <div className="flex items-center gap-4 mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{ background: track.accentBg, border: `1px solid ${track.accentBorder}` }}
                  >
                    <Icon size={22} style={{ color: track.accent }} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-[#1F1B17] leading-tight">
                      {track.label}
                    </h3>
                  </div>
                </div>

                <p className="text-[#5A534B] text-sm leading-relaxed mb-6">
                  {track.tagline}
                </p>

                <ul className="space-y-3 mb-7 flex-1">
                  {track.points.map((p) => {
                    return (
                      <li key={p.text} className="flex items-start gap-3">
                        <span
                          className="mt-0.5 w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0"
                          style={{ background: track.accentBg }}
                        >
                          <Check size={12} style={{ color: track.accent }} />
                        </span>
                        <span className="text-[#3F3A33] text-sm leading-snug">{p.text}</span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: track.accent,
                    color: "#F8F6F1",
                    boxShadow: `0 8px 22px ${track.accentBg}`,
                  }}
                >
                  {track.cta}
                  <ArrowRight size={15} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Reassurance line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#8C8278]"
        >
          <span className="flex items-center gap-2">
            <Check size={14} className="text-[#177D63]" /> 100+ projects delivered
          </span>
          <span className="flex items-center gap-2">
            <Check size={14} className="text-[#177D63]" /> 85%+ client retention
          </span>
          <span className="flex items-center gap-2">
            <Check size={14} className="text-[#177D63]" /> Replies within minutes
          </span>
        </motion.div>
      </div>
    </section>
  );
}
