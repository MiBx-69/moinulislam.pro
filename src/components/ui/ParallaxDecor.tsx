"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Decorative floating shapes that drift at different speeds while the
 * parent section scrolls through the viewport — a layered parallax
 * depth effect. Purely visual; pointer-events disabled.
 */
export function ParallaxDecor({ flip = false }: { flip?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yFast = useTransform(scrollYProgress, [0, 1], [110, -110]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 60]);

  const side = flip ? "left-[4%]" : "right-[4%]";
  const sideAlt = flip ? "right-[8%]" : "left-[8%]";

  return (
    <div ref={ref} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Soft emerald orb */}
      <motion.div
        style={{ y: ySlow }}
        className={`absolute top-[15%] ${side} w-56 h-56 rounded-full blur-3xl opacity-[0.16]`}
      >
        <div className="w-full h-full rounded-full bg-[#177D63]" />
      </motion.div>

      {/* Rotating amber outline square */}
      <motion.div
        style={{ y: yFast, rotate }}
        className={`absolute top-[55%] ${side} hidden md:block w-14 h-14 rounded-xl border-2 border-[rgba(191,130,48,0.3)]`}
      />

      {/* Emerald ring */}
      <motion.div
        style={{ y: yFast }}
        className={`absolute top-[20%] ${sideAlt} hidden md:block w-9 h-9 rounded-full border-2 border-[rgba(23,125,99,0.28)]`}
      />

      {/* Dotted patch */}
      <motion.div
        style={{ y: ySlow }}
        className={`absolute bottom-[12%] ${sideAlt} hidden lg:block w-28 h-20 dot-bg opacity-50`}
      />

      {/* Tiny solid amber dot */}
      <motion.div
        style={{ y: yFast }}
        className={`absolute bottom-[30%] ${side} hidden md:block w-2.5 h-2.5 rounded-full bg-[#BF8230] opacity-50`}
      />
    </div>
  );
}
