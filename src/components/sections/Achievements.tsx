"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { achievements } from "@/data";
import { useCountUp } from "@/hooks/useCountUp";

const ACCENT_COLORS = [
  { text: "#177D63", bg: "rgba(23,125,99,0.08)", border: "rgba(23,125,99,0.15)" },
  { text: "#BF8230", bg: "rgba(191,130,48,0.08)", border: "rgba(191,130,48,0.15)" },
  { text: "#177D63", bg: "rgba(23,125,99,0.08)", border: "rgba(23,125,99,0.15)" },
  { text: "#BF8230", bg: "rgba(191,130,48,0.08)", border: "rgba(191,130,48,0.15)" },
  { text: "#177D63", bg: "rgba(23,125,99,0.08)", border: "rgba(23,125,99,0.15)" },
  { text: "#BF8230", bg: "rgba(191,130,48,0.08)", border: "rgba(191,130,48,0.15)" },
];

function CounterCard({
  item,
  index,
  isInView,
}: {
  item: (typeof achievements)[0];
  index: number;
  isInView: boolean;
}) {
  const count = useCountUp(item.numericValue, 2200, isInView);
  const color = ACCENT_COLORS[index % ACCENT_COLORS.length];

  const formatDisplay = () => {
    if (item.numericValue >= 1000 && count >= 1000) {
      return `${Math.floor(count / 1000)}K${item.suffix}`;
    }
    return `${count}${item.suffix}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.09 }}
      className="relative group p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #FFFFFF 0%, #EFEAE1 100%)`,
        borderColor: color.border,
      }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `radial-gradient(ellipse at center, ${color.bg} 0%, transparent 70%)` }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${color.text}40, transparent)` }}
      />

      <div className="relative z-10 text-center">
        <div
          className="font-heading text-5xl font-black mb-3 tabular-nums"
          style={{ color: color.text }}
        >
          {formatDisplay()}
        </div>
        <p className="text-[#1F1B17] text-sm font-semibold mb-1.5">{item.label}</p>
        <p className="text-[#8C8278] text-xs leading-relaxed">{item.sublabel}</p>
      </div>
    </motion.div>
  );
}

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // Alternating columns drift at different speeds while scrolling
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yEven = useTransform(scrollYProgress, [0, 1], [28, -28]);
  const yOdd = useTransform(scrollYProgress, [0, 1], [64, -64]);

  return (
    <section id="achievements" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(23,125,99,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#177D63] block mb-3">
            04 · By the Numbers
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17] tracking-[-0.01em] mb-4">
            Impact & Achievements
          </h2>
          <p className="text-[#5A534B] max-w-xl mx-auto leading-relaxed">
            Measurable outcomes from years of building systems, running campaigns, and delivering results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <motion.div key={item.label} style={{ y: i % 2 === 0 ? yEven : yOdd }}>
              <CounterCard item={item} index={i} isInView={isInView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
