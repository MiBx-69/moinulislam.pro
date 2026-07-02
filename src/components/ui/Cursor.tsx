"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Custom cursor accent: an emerald dot that tracks instantly plus a
 * trailing ring that springs behind it and expands over interactive
 * elements. Desktop (fine pointer) only; native cursor stays visible.
 */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressed, setPressed] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 250, damping: 24, mass: 0.6 });
  const ringY = useSpring(y, { stiffness: 250, damping: 24, mass: 0.6 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest("a, button, [role='button']"));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Instant dot */}
      <motion.div
        className="fixed top-0 left-0 z-[90] pointer-events-none w-2 h-2 rounded-full bg-[#177D63]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      {/* Trailing ring */}
      <motion.div
        className="fixed top-0 left-0 z-[90] pointer-events-none w-9 h-9 rounded-full border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovering ? "rgba(191,130,48,0.7)" : "rgba(23,125,99,0.45)",
        }}
        animate={{
          scale: pressed ? 0.7 : hovering ? 1.9 : 1,
          opacity: hovering ? 0.9 : 0.6,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
