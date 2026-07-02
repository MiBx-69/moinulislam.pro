"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { personal } from "@/data";

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(
    "Hi Moinul, I have a project in mind."
  )}`;

  return (
    <section ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      {/* Deep emerald canvas — high contrast moment in the page */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(140deg, #0B4A38 0%, #0E5540 45%, #14684F 100%)",
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-[0.12]" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(191,130,48,0.22) 0%, transparent 60%)",
        }}
      />

      <div className="container-wide relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[11px] font-mono font-semibold tracking-[0.22em] uppercase text-[#7BC4AE] mb-6"
        >
          Ready when you are
        </motion.p>

        <motion.h2
          style={{ x: xLeft }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl font-semibold text-[#F8F6F1] leading-[1.05] tracking-[-0.02em] mb-4"
        >
          Have a project{" "}
          <span className="italic text-[#E8B463]">in mind?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="text-[#B9D9CD] text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          Let&apos;s turn it into rankings, revenue, and systems that run themselves.
          One message is all it takes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-7 py-3.5 rounded-2xl font-bold text-sm bg-[#25D366] text-white hover:bg-[#1fbd5a] transition-all duration-200 shadow-[0_14px_36px_rgba(37,211,102,0.35)] hover:-translate-y-0.5"
          >
            <MessageCircle size={17} fill="white" />
            Start on WhatsApp
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm border border-[rgba(248,246,241,0.35)] text-[#F8F6F1] hover:bg-[rgba(248,246,241,0.08)] transition-all duration-200 hover:-translate-y-0.5"
          >
            All contact options
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
