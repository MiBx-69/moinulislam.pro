"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { achievements } from "@/data";
import { useCountUp } from "@/hooks/useCountUp";

function CounterCard({
  item,
  index,
  isInView,
}: {
  item: (typeof achievements)[0];
  index: number;
  isInView: boolean;
}) {
  const count = useCountUp(item.numericValue, 2000, isInView);

  const displayValue =
    item.numericValue >= 1000
      ? `${(count / 1000).toFixed(count >= 1000 ? 0 : 1)}K${item.suffix}`
      : `${count}${item.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08 }}
      className="card-base p-6 text-center"
    >
      <div className="font-heading text-4xl font-bold accent-text mb-2">
        {displayValue}
      </div>
      <p className="text-white text-sm font-semibold mb-1">{item.label}</p>
      <p className="text-[#64748B] text-xs">{item.sublabel}</p>
    </motion.div>
  );
}

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="achievements"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(0,217,255,0.04) 0%, transparent 70%)",
        }}
      />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            By the Numbers
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Impact & Achievements
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto">
            Measurable outcomes from years of building systems, running campaigns, and delivering results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => (
            <CounterCard key={item.label} item={item} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
