"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { personal } from "@/data";
import { CheckCircle, MapPin, Globe } from "lucide-react";

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
    <section id="about" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Summary
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <p className="text-[#94A3B8] text-base md:text-lg leading-relaxed mb-6">
              {personal.summary}
            </p>

            <div className="flex flex-wrap gap-4 mb-8 text-sm text-[#94A3B8]">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-[#00D9FF]" />
                {personal.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Globe size={14} className="text-[#00D9FF]" />
                <a
                  href={personal.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00D9FF] transition-colors"
                >
                  moinul.mibrand.agency
                </a>
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-2.5">
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle
                    size={14}
                    className="text-[#00D9FF] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-[#94A3B8]">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Quick info cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {[
              { label: "Current Role", value: "Head of IT & Online Executive", sub: "Universes E-commerce" },
              { label: "Agency", value: "MiBrand Agency", sub: "Founder & SEO Specialist" },
              { label: "Freelancing", value: "2021 – Present", sub: "SEO & Digital Marketing" },
              { label: "Expertise", value: "SEO + AI + Automation", sub: "E-commerce & Systems" },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="p-4 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[rgba(0,217,255,0.25)] transition-colors"
              >
                <p className="text-xs font-mono text-[#64748B] uppercase tracking-wider mb-1">
                  {card.label}
                </p>
                <p className="text-white font-semibold text-sm">{card.value}</p>
                <p className="text-[#64748B] text-xs mt-0.5">{card.sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
