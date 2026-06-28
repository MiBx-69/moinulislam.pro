"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Globe, Link2, Copy, Check, MessageCircle, ArrowRight } from "lucide-react";
import { personal } from "@/data";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(
    "Hi Moinul, I found your portfolio and would like to discuss a project."
  )}`;

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      color: "#00D9FF",
      bg: "rgba(0,217,255,0.08)",
      onClick: copyEmail,
      copyable: true,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
      color: "#00D9FF",
      bg: "rgba(0,217,255,0.08)",
    },
    {
      icon: Globe,
      label: "Agency",
      value: "moinul.mibrand.agency",
      href: personal.website,
      color: "#3B82F6",
      bg: "rgba(59,130,246,0.08)",
      external: true,
    },
    {
      icon: Link2,
      label: "LinkedIn",
      value: "View Profile",
      href: personal.linkedin,
      color: "#3B82F6",
      bg: "rgba(59,130,246,0.08)",
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 80%, rgba(0,217,255,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center max-w-2xl mx-auto"
        >
          <span className="block text-[11px] font-mono font-semibold tracking-widest uppercase text-[#00D9FF] mb-3">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-[#94A3B8] leading-relaxed">
            Have a project in mind, need SEO strategy, or want to automate your operations?
            Message me directly on WhatsApp — I usually reply within minutes.
          </p>
        </motion.div>

        {/* WhatsApp hero CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl p-[1px] transition-transform duration-200 hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,211,102,0.5), rgba(0,217,255,0.3))",
            }}
          >
            <div
              className="relative rounded-2xl p-6 sm:p-7 flex items-center gap-5"
              style={{
                background:
                  "linear-gradient(135deg, #0f1623 0%, #0d1420 100%)",
              }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 20% 50%, rgba(37,211,102,0.12) 0%, transparent 60%)",
                }}
              />

              {/* WhatsApp icon */}
              <div className="relative flex-shrink-0">
                <span className="absolute inset-0 rounded-2xl animate-ping opacity-30 bg-[#25D366]" />
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center bg-[#25D366] shadow-lg shadow-[rgba(37,211,102,0.35)]">
                  <MessageCircle size={28} className="text-white" fill="white" />
                </div>
              </div>

              <div className="relative flex-1 min-w-0">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#25D366] mb-1 font-semibold">
                  Instant Chat
                </p>
                <p className="text-white font-heading font-bold text-lg sm:text-xl leading-tight">
                  Message me on WhatsApp
                </p>
                <p className="text-[#64748B] text-sm mt-0.5">{personal.phone}</p>
              </div>

              <div className="relative flex-shrink-0 flex items-center gap-1 text-[#25D366] font-semibold text-sm">
                <span className="hidden sm:inline">Chat now</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Other contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 glow-line" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">
              Or reach me here
            </span>
            <div className="flex-1 glow-line" />
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div className="card-base flex items-center gap-3.5 p-4 group cursor-pointer w-full h-full">
                  <div
                    className="p-2.5 rounded-xl flex-shrink-0 transition-transform group-hover:scale-105"
                    style={{ background: item.bg }}
                  >
                    <Icon size={14} style={{ color: item.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-[#64748B] mb-0.5 font-mono uppercase tracking-wider">
                      {item.label}
                    </p>
                    <p className="text-sm text-white truncate group-hover:text-[#00D9FF] transition-colors">
                      {item.value}
                    </p>
                  </div>
                  {item.copyable && (
                    <span className="flex-shrink-0 text-[#64748B] group-hover:text-[#00D9FF] transition-colors">
                      {copied ? <Check size={13} /> : <Copy size={13} />}
                    </span>
                  )}
                </div>
              );

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.35, delay: 0.3 + i * 0.07 }}
                >
                  {item.onClick ? (
                    <button onClick={item.onClick} className="w-full text-left h-full">
                      {inner}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {inner}
                    </a>
                  )}
                </motion.div>
              );
            })}
          </div>

          {copied && (
            <motion.p
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[11px] text-[#00D9FF] font-mono text-center mt-4"
            >
              ✓ Email copied to clipboard
            </motion.p>
          )}

          {/* Availability */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="text-xs text-[#64748B]">
              Available for new projects & collaborations
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
