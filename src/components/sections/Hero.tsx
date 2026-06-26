"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Link2, ArrowRight } from "lucide-react";
import { personal } from "@/data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,217,255,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 75% 60%, rgba(59,130,246,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[20%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-[10%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-8">
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[rgba(0,217,255,0.3)] bg-[rgba(0,217,255,0.07)] text-[#00D9FF]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
                </span>
                Available for Work
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#64748B] font-medium">
                <MapPin size={11} className="text-[#00D9FF]" />
                {personal.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-5"
            >
              {personal.name}
            </motion.h1>

            {/* Rotating role */}
            <motion.div variants={itemVariants} className="h-12 flex items-center mb-7">
              <span className="text-[#64748B] text-xl mr-2.5 font-medium">I am a</span>
              <div className="overflow-hidden h-12 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -22 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-heading font-bold text-xl accent-text whitespace-nowrap"
                  >
                    {personal.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl mb-9"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-9">
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#00D9FF] text-[#0B0F19] hover:bg-[#00c4e8] transition-all duration-200 shadow-lg shadow-[rgba(0,217,255,0.25)] hover:shadow-[rgba(0,217,255,0.4)] hover:-translate-y-0.5"
              >
                Hire for Marketing
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[#3B82F6] text-[#3B82F6] hover:bg-[rgba(59,130,246,0.1)] transition-all duration-200 hover:-translate-y-0.5"
              >
                Hire for Dev & Automation
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              {[
                { icon: Link2, label: "LinkedIn", href: personal.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
                { icon: Globe, label: "Agency", href: personal.website },
                { icon: Phone, label: "Phone", href: `tel:${personal.phone}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#00D9FF] transition-colors duration-150 font-medium"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={mounted ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <motion.div
                animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -inset-6 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(0,217,255,0.15) 0%, transparent 70%)",
                }}
              />

              {/* Avatar ring */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-2 border-[rgba(0,217,255,0.35)] shadow-[0_0_60px_rgba(0,217,255,0.15),0_0_120px_rgba(0,217,255,0.05)]">
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(145deg, #111827 0%, #1A2235 40%, #0D1117 100%)",
                  }}
                >
                  {/* Decorative grid inside avatar */}
                  <div className="absolute inset-0 grid-bg opacity-20" />
                  <div className="relative text-center z-10">
                    <div
                      className="text-7xl font-heading font-bold mb-2"
                      style={{
                        background: "linear-gradient(135deg, #00D9FF 0%, #3B82F6 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      MI
                    </div>
                    <div className="text-xs text-[#64748B] font-mono tracking-[0.25em] uppercase">
                      Moinul Islam
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat badge — bottom left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-8 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#111827] border border-[#1E293B] shadow-xl shadow-black/40"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(0,217,255,0.1)] flex items-center justify-center">
                  <span className="text-[#00D9FF] text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">100+ Projects</p>
                  <p className="text-[#64748B] text-[10px]">Done</p>
                </div>
              </motion.div>

              {/* Floating exp badge — top right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute -top-5 -right-8 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#111827] border border-[#1E293B] shadow-xl shadow-black/40"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(59,130,246,0.1)] flex items-center justify-center">
                  <span className="text-[#3B82F6] text-sm font-bold">★</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold">5+ Years</p>
                  <p className="text-[#64748B] text-[10px]">Experience</p>
                </div>
              </motion.div>

              {/* Floating agency badge — right */}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/2 -right-14 -translate-y-1/2 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111827] border border-[#1E293B] shadow-lg shadow-black/40"
              >
                <span className="text-[#00D9FF] text-[10px] font-mono font-bold tracking-wider">MiBrand</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={mounted ? { opacity: 1 } : {}}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-[#334155] font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#334155] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
