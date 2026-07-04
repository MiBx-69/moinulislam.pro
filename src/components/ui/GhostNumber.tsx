"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Giant outlined section numeral rendered as a background watermark —
 * a bold editorial device that gives each section a graphic identity.
 * Drifts slowly with scroll for depth.
 */
export function GhostNumber({ n, flip = false }: { n: string; flip?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <motion.span
        style={{
          y,
          WebkitTextStroke: "2px rgba(23,125,99,0.13)",
        }}
        className={`absolute top-2 ${
          flip ? "left-[-1.5rem] sm:left-4" : "right-[-1.5rem] sm:right-4"
        } font-display font-bold text-transparent leading-none select-none text-[9rem] sm:text-[13rem] lg:text-[17rem]`}
      >
        {n}
      </motion.span>
    </div>
  );
}
