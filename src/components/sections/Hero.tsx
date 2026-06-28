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
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(23,125,99,0.12) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 75% 60%, rgba(191,130,48,0.06) 0%, transparent 60%)",
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[20%] w-72 h-72 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(23,125,99,0.08) 0%, transparent 70%)",
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-40 left-[10%] w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(191,130,48,0.06) 0%, transparent 70%)",
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
              <span className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[rgba(23,125,99,0.3)] bg-[rgba(23,125,99,0.07)] text-[#177D63]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#177D63] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#177D63]" />
                </span>
                Available for Work
              </span>
              <span className="flex items-center gap-1.5 text-xs text-[#8C8278] font-medium">
                <MapPin size={11} className="text-[#177D63]" />
                {personal.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold text-[#1F1B17] leading-[1.06] tracking-[-0.02em] mb-6"
            >
              Moinul Islam{" "}
              <span className="italic accent-text font-medium inline-block pr-2 pb-1">Bappi</span>
            </motion.h1>

            {/* Rotating role */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3 mb-8">
              <span className="h-px w-8 bg-[#177D63]/50 hidden lg:block" />
              <span className="text-[#8C8278] text-xs uppercase tracking-[0.2em] font-mono">I am a</span>
              <div className="overflow-hidden h-9 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="font-display italic font-bold text-xl sm:text-2xl text-[#0B4A38] whitespace-nowrap"
                  >
                    {personal.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-[#5A534B] text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-9"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm bg-[#177D63] text-[#F4F1EA] hover:bg-[#13694F] transition-all duration-200 shadow-lg shadow-[rgba(23,125,99,0.25)] hover:shadow-[rgba(23,125,99,0.4)] hover:-translate-y-0.5"
              >
                Hire for Marketing
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#contact"
                className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-[#BF8230] text-[#BF8230] hover:bg-[rgba(191,130,48,0.1)] transition-all duration-200 hover:-translate-y-0.5"
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
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl font-semibold text-sm text-[#1F1B17] border border-[#E6E0D5] bg-[#FFFFFF] hover:border-[rgba(23,125,99,0.4)] hover:bg-[#FBF9F4] transition-all duration-200"
              >
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-[rgba(23,125,99,0.1)] group-hover:bg-[rgba(23,125,99,0.18)] transition-colors">
                  <Download size={14} className="text-[#177D63] group-hover:translate-y-0.5 transition-transform" />
                </span>
                Download CV
                <span className="text-[10px] font-mono text-[#8C8278]">PDF</span>
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
                  className="flex items-center gap-1.5 text-xs text-[#8C8278] hover:text-[#177D63] transition-colors duration-150 font-medium"
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
            <div className="relative w-[18rem] sm:w-[21rem] lg:w-[25rem] aspect-[5/6] mx-auto">
              {/* Painterly brush-stroke backdrop */}
              <svg
                className="absolute inset-0 w-full h-full scale-[1.18] -translate-y-3"
                viewBox="0 0 600 700"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="brushEmerald" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#1F8A6E" />
                    <stop offset="55%" stopColor="#177D63" />
                    <stop offset="100%" stopColor="#0E5540" />
                  </linearGradient>
                  <filter id="brushRough" x="-20%" y="-20%" width="140%" height="140%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="3" seed="7" result="n" />
                    <feDisplacementMap in="SourceGraphic" in2="n" scale="26" xChannelSelector="R" yChannelSelector="G" />
                  </filter>
                </defs>
                <g filter="url(#brushRough)" transform="rotate(-16 300 360)">
                  {/* main mass */}
                  <rect x="170" y="120" width="270" height="470" rx="135" fill="url(#brushEmerald)" opacity="0.95" />
                  <rect x="120" y="170" width="120" height="400" rx="60" fill="#0E5540" opacity="0.8" />
                  <rect x="400" y="150" width="120" height="420" rx="60" fill="#1F8A6E" opacity="0.85" />
                  {/* cross marks for texture */}
                  <rect x="150" y="430" width="320" height="78" rx="39" fill="#177D63" opacity="0.7" />
                  <rect x="200" y="150" width="250" height="64" rx="32" fill="#177D63" opacity="0.6" />
                  {/* amber accent stroke */}
                  <rect x="300" y="90" width="58" height="500" rx="29" fill="#C8852C" opacity="0.5" />
                  <rect x="360" y="300" width="200" height="50" rx="25" fill="#C8852C" opacity="0.45" />
                </g>
              </svg>

              {/* Soft contact shadow under the figure */}
              <div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-10 rounded-[50%] pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(31,27,23,0.18) 0%, transparent 70%)" }}
              />

              {/* Cut-out portrait */}
              <Image
                src="/moinul-cutout.png"
                alt={personal.name}
                fill
                priority
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 336px, 400px"
                className="object-contain object-bottom drop-shadow-[0_18px_28px_rgba(31,27,23,0.22)]"
              />

              {/* Floating stat badge — bottom left */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 -left-2 lg:-left-6 flex items-center gap-2.5 px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-2xl bg-white border border-[#E6E0D5] shadow-[0_10px_30px_rgba(31,27,23,0.14)] z-10"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(23,125,99,0.1)] flex items-center justify-center">
                  <span className="text-[#177D63] text-sm font-bold">✓</span>
                </div>
                <div>
                  <p className="text-[#1F1B17] text-xs font-bold">100+ Projects</p>
                  <p className="text-[#8C8278] text-[10px]">Done</p>
                </div>
              </motion.div>

              {/* Floating exp badge — top right */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute top-12 -right-2 lg:-right-6 flex items-center gap-2.5 px-3.5 py-2 lg:px-4 lg:py-2.5 rounded-2xl bg-white border border-[#E6E0D5] shadow-[0_10px_30px_rgba(31,27,23,0.14)] z-10"
              >
                <div className="w-8 h-8 rounded-lg bg-[rgba(191,130,48,0.1)] flex items-center justify-center">
                  <span className="text-[#BF8230] text-sm font-bold">★</span>
                </div>
                <div>
                  <p className="text-[#1F1B17] text-xs font-bold">5+ Years</p>
                  <p className="text-[#8C8278] text-[10px]">Experience</p>
                </div>
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
          <span className="text-[10px] text-[#C9C0B2] font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-[#C9C0B2] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
