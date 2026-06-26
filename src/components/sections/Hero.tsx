"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView, type Variants } from "framer-motion";
import { MapPin, Mail, Phone, Globe, Link2, ArrowRight, CheckCircle } from "lucide-react";
import { personal } from "@/data";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      ref={ref}
    >
      {/* Background grid + gradient */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -5%, rgba(0,217,255,0.08) 0%, transparent 65%)",
        }}
      />

      <div className="container-wide relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium border border-[rgba(0,217,255,0.25)] bg-[rgba(0,217,255,0.06)] text-[#00D9FF]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]"></span>
                </span>
                Available for Work
              </span>
              <span className="flex items-center gap-1 text-xs text-[#64748B]">
                <MapPin size={11} />
                {personal.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              {personal.name}
            </motion.h1>

            {/* Rotating role */}
            <motion.div
              variants={itemVariants}
              className="h-10 flex items-center mb-6"
            >
              <span className="text-[#64748B] text-lg mr-2">I am a</span>
              <div className="overflow-hidden h-10 flex items-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="font-heading font-semibold text-lg accent-text whitespace-nowrap"
                  >
                    {personal.roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-[#94A3B8] text-base md:text-lg leading-relaxed max-w-xl mb-8"
            >
              {personal.tagline}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#00D9FF] text-[#0B0F19] hover:bg-[#00c4e8] transition-colors shadow-lg shadow-[rgba(0,217,255,0.2)]"
              >
                Hire for Marketing
                <ArrowRight size={15} />
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm border border-[#3B82F6] text-[#3B82F6] hover:bg-[rgba(59,130,246,0.08)] transition-colors"
              >
                Hire for Automation/Dev
                <ArrowRight size={15} />
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {[
                { icon: Link2, label: "LinkedIn", href: personal.linkedin },
                { icon: Mail, label: "Email", href: `mailto:${personal.email}` },
                { icon: Globe, label: "Website", href: personal.website },
                { icon: Phone, label: "Phone", href: `tel:${personal.phone}` },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-[#64748B] hover:text-[#00D9FF] transition-colors"
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full animate-glow-pulse"
                style={{
                  background:
                    "radial-gradient(circle, rgba(0,217,255,0.2) 0%, transparent 70%)",
                }}
              />
              {/* Avatar circle */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-[rgba(0,217,255,0.3)] shadow-2xl shadow-[rgba(0,217,255,0.1)]">
                {/* TODO: Replace with actual profile photo — place image at /public/avatar.jpg */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #111827 0%, #1E293B 50%, #0B0F19 100%)",
                  }}
                >
                  <div className="text-center">
                    <div className="text-6xl font-heading font-bold accent-text mb-1">
                      MI
                    </div>
                    <div className="text-xs text-[#64748B] font-mono tracking-widest uppercase">
                      MoinulIslam
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating stat badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111827] border border-[#1E293B] shadow-xl"
              >
                <CheckCircle size={14} className="text-[#00D9FF]" />
                <span className="text-xs font-medium text-white">100+ Projects Done</span>
              </motion.div>

              {/* Floating exp badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-6 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111827] border border-[#1E293B] shadow-xl"
              >
                <span className="text-[#00D9FF] font-bold text-sm">5+</span>
                <span className="text-xs font-medium text-white">Years Exp</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
