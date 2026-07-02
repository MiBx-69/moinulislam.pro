"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * First-visit intro: a brief name reveal on the ivory canvas, then the
 * curtain slides up to unveil the page. Plays once per browser session.
 */
export function IntroLoader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("introPlayed")) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("introPlayed", "1");
    }, 1700);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#F4F1EA]"
          aria-hidden="true"
        >
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.33, 1, 0.68, 1] }}
              className="font-display text-5xl sm:text-7xl font-semibold text-[#1F1B17] tracking-[-0.02em]"
            >
              Moinul<span className="text-[#177D63]">.</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden mt-3">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.33, 1, 0.68, 1] }}
              className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#8C8278]"
            >
              SEO · AI Automation · Development
            </motion.p>
          </div>
          {/* Progress line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease: "easeInOut" }}
            className="mt-8 h-px w-40 origin-left"
            style={{ background: "linear-gradient(90deg, #177D63, #BF8230)" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
