"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data";
import { CheckCircle, MapPin, Globe, BadgeCheck, ExternalLink } from "lucide-react";

const CERTIFICATIONS = [
  {
    name: "AWS Certified",
    detail: "Prompt Engineering",
    href: "/AWS-Foundations-of-Prompt-Engineering-Certificate.pdf",
    color: "#BF8230",
    bg: "rgba(191,130,48,0.08)",
    border: "rgba(191,130,48,0.28)",
  },
  {
    name: "HubSpot Certified",
    detail: "SEO Certification",
    href: "https://app-na2.hubspot.com/academy/achievements/9z7yxlhm/en/1/moinul-islam/seo",
    color: "#177D63",
    bg: "rgba(23,125,99,0.08)",
    border: "rgba(23,125,99,0.28)",
  },
];

const HIGHLIGHTS = [
  "AI-driven SEO strategies & local ranking campaigns",
  "SaaS-level automation systems (1,000+ processes/sec)",
  "Multi-channel paid advertising up to $10,000/month",
  "Shopify e-commerce development (Expert Level)",
  "End-to-end CRM pipeline architecture",
  "Linux server administration & cybersecurity practices",
];

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 60%, rgba(191,130,48,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">01 · About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17] tracking-[-0.01em] mb-4">
            Professional Summary
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-[#5A534B] text-base md:text-lg leading-relaxed mb-7">
              {personal.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-9 text-sm">
              <span className="flex items-center gap-1.5 text-[#5A534B]">
                <MapPin size={13} className="text-[#177D63]" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5 text-[#5A534B]">
                <Globe size={13} className="text-[#177D63]" />
                <a
                  href={personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#177D63] transition-colors"
                >
                  moinul.mibrand.agency
                </a>
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-2.5 group"
                >
                  <CheckCircle
                    size={14}
                    className="text-[#177D63] mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span className="text-sm text-[#5A534B] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Certification badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-9"
            >
              <p className="text-[10px] font-mono text-[#8C8278] uppercase tracking-widest mb-3">
                Certified
              </p>
              <div className="flex flex-wrap gap-3">
                {CERTIFICATIONS.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.href}
                    target={cert.href.startsWith("http") || cert.href.endsWith(".pdf") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2.5 pl-2.5 pr-3.5 py-2 rounded-xl bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(31,27,23,0.10)]"
                    style={{ border: `1px solid ${cert.border}` }}
                  >
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: cert.bg }}
                    >
                      <BadgeCheck size={16} style={{ color: cert.color }} />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-xs font-bold text-[#1F1B17]">{cert.name}</span>
                      <span className="block text-[10px] text-[#8C8278]">{cert.detail}</span>
                    </span>
                    <ExternalLink
                      size={11}
                      className="text-[#8C8278] opacity-0 group-hover:opacity-100 transition-opacity ml-0.5"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Quick info cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {[
              {
                label: "Current Role",
                value: "Head of IT & Online Executive",
                sub: "Universes E-commerce",
                color: "#177D63",
              },
              {
                label: "Agency",
                value: "MiBrand Agency",
                sub: "Founder & SEO Specialist",
                color: "#BF8230",
              },
              {
                label: "Freelancing",
                value: "2021 – Present",
                sub: "SEO & Digital Marketing",
                color: "#177D63",
              },
              {
                label: "Expertise",
                value: "SEO + AI + Automation",
                sub: "E-commerce & Systems",
                color: "#BF8230",
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.09 }}
                className="card-base p-5 group cursor-default"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] font-mono text-[#8C8278] uppercase tracking-widest mb-1.5">
                      {card.label}
                    </p>
                    <p className="text-[#1F1B17] font-semibold text-sm leading-snug mb-0.5">
                      {card.value}
                    </p>
                    <p className="text-[#8C8278] text-xs">{card.sub}</p>
                  </div>
                  <div
                    className="w-2 h-2 rounded-full mt-1 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity"
                    style={{ background: card.color }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
