"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { competencies } from "@/data";
import {
  Search,
  TrendingUp,
  Bot,
  ShoppingBag,
  Users,
  BarChart2,
  Zap,
  Shield,
  Target,
  Briefcase,
  PenTool,
  Share2,
} from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Search,
  TrendingUp,
  Bot,
  ShoppingBag,
  Users,
  BarChart2,
  Zap,
  Shield,
  Target,
  Briefcase,
  PenTool,
  Share2,
};

const ACCENT_CYCLE = [
  { icon: "#00D9FF", bg: "rgba(0,217,255,0.08)", border: "rgba(0,217,255,0.14)" },
  { icon: "#3B82F6", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.14)" },
];

export function Competencies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="competencies" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 80% 30%, rgba(0,217,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="section-label">What I Do</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Core Competencies
          </h2>
          <p className="text-[#94A3B8] max-w-xl leading-relaxed">
            A broad set of skills covering digital growth, technical systems, and business operations.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {competencies.map((item, i) => {
            const Icon = ICON_MAP[item.icon] ?? Search;
            const colors = ACCENT_CYCLE[i % 2];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.05 }}
                className="group flex items-center gap-3.5 p-4 rounded-xl border transition-all duration-250 hover:-translate-y-0.5 cursor-default"
                style={{
                  background: "linear-gradient(135deg, #0f1623 0%, #0d1420 100%)",
                  borderColor: colors.border,
                }}
              >
                <div
                  className="p-2.5 rounded-xl flex-shrink-0 transition-transform group-hover:scale-105"
                  style={{ background: colors.bg }}
                >
                  <Icon size={16} style={{ color: colors.icon }} />
                </div>
                <span className="text-sm text-[#94A3B8] leading-snug group-hover:text-white transition-colors">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
