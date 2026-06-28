"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Link2, ArrowRight, Download } from "lucide-react";
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

      <div className="container-wide relative z-10 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={mounted ? "visible" : "hidden"}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-8 flex-wrap">
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
              className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-5"
            >
              {personal.name}
            </motion.h1>

            {/* Rotating role */}
            <motion.div variants={itemVariants} className="h-11 flex items-center justify-center lg:justify-start mb-7">
              <span className="text-[#64748B] text-base sm:text-lg mr-2.5 font-medium">I am a</span>
              <div className="overflow-hidden h-11 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -22 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-heading font-bold text-base sm:text-lg accent-text whitespace-nowrap"
                  >
                    {personal.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
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

            {/* Download CV */}
            <motion.div variants={itemVariants} className="mb-9">
              <a
                href={personal.cvUrl}
                download
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm text-white border border-[#1a2640] bg-[#0f1623] hover:border-[rgba(0,217,255,0.4)] hover:bg-[#111c2e] transition-all duration-200"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[rgba(0,217,255,0.1)] group-hover:bg-[rgba(0,217,255,0.18)] transition-colors">
                  <Download size={14} className="text-[#00D9FF] group-hover:translate-y-0.5 transition-transform" />
                </span>
                Download CV
                <span className="text-[10px] font-mono text-[#64748B]">PDF</span>
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { icon: Link2, label: "LinkedIn", href: personal.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
                { icon: Globe, label: "MiBrand Agency", href: personal.agencyUrl },
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
            className="flex justify-center order-1 lg:order-2"
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

              {/* Rotating conic ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1.5 rounded-full"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, rgba(0,217,255,0.6) 90deg, transparent 180deg, rgba(59,130,246,0.5) 270deg, transparent 360deg)",
                }}
              />

              {/* Avatar with real photo */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-[rgba(0,217,255,0.35)] shadow-[0_0_60px_rgba(0,217,255,0.18),0_0_120px_rgba(0,217,255,0.06)]">
                <Image
                  src="/moinul.png"
                  alt={personal.name}
                  fill
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 320px"
                  className="object-cover object-[center_22%] scale-[1.35]"
                />
                {/* Subtle gradient overlay to blend with theme */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(11,15,25,0.55) 100%)",
                  }}
                />
              </div>

              {/* Floating stat badge — bottom left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 lg:-bottom-5 lg:-left-8 flex items-center gap-2.5 px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-2xl bg-[#111827] border border-[#1E293B] shadow-xl shadow-black/40"
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
                className="absolute -top-4 -right-4 lg:-top-5 lg:-right-8 flex items-center gap-2.5 px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-2xl bg-[#111827] border border-[#1E293B] shadow-xl shadow-black/40"
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
                className="absolute top-1/2 -right-14 -translate-y-1/2 hidden lg:flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111827] border border-[#1E293B] shadow-lg shadow-black/40"
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
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2"
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
