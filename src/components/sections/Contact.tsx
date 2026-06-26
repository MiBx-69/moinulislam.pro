"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, Globe, Link2, Copy, Check, Send } from "lucide-react";
import { personal } from "@/data";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
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
          className="mb-12"
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-[#94A3B8] max-w-lg leading-relaxed">
            Have a project in mind, need SEO strategy, or want to automate your operations? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const inner = (
                <div className="card-base flex items-center gap-3.5 p-4 group cursor-pointer w-full">
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
                    <p
                      className="text-sm text-white truncate transition-colors"
                      style={{ ["--hover-color" as string]: item.color }}
                    >
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
                  transition={{ duration: 0.35, delay: 0.2 + i * 0.07 }}
                >
                  {item.onClick ? (
                    <button onClick={item.onClick} className="w-full text-left">
                      {inner}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {inner}
                    </a>
                  )}
                </motion.div>
              );
            })}

            {copied && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] text-[#00D9FF] font-mono px-1"
              >
                ✓ Email copied to clipboard
              </motion.p>
            )}

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2.5 mt-2 px-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
              </span>
              <span className="text-xs text-[#64748B]">
                Available for new projects & collaborations
              </span>
            </motion.div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="card-base p-6 flex flex-col gap-4"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[rgba(0,217,255,0.4)] to-transparent" />

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-[10px] text-[#64748B] mb-1.5 font-mono uppercase tracking-widest"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      value={form[field.id as keyof typeof form]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      className="w-full bg-[#080d16] border border-[#1a2640] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#2d3f57] focus:outline-none focus:border-[rgba(0,217,255,0.4)] focus:shadow-[0_0_0_3px_rgba(0,217,255,0.06)] transition-all"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[10px] text-[#64748B] mb-1.5 font-mono uppercase tracking-widest"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-[#080d16] border border-[#1a2640] rounded-xl px-4 py-2.5 text-sm text-white placeholder-[#2d3f57] focus:outline-none focus:border-[rgba(0,217,255,0.4)] focus:shadow-[0_0_0_3px_rgba(0,217,255,0.06)] transition-all resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <p className="text-xs text-[#64748B] hidden sm:block">
                  Or reach me at{" "}
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-[#00D9FF] hover:underline"
                  >
                    {personal.email}
                  </a>
                </p>
                <button
                  type="submit"
                  className="group flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm bg-[#00D9FF] text-[#0B0F19] hover:bg-[#00c4e8] transition-all duration-200 shadow-lg shadow-[rgba(0,217,255,0.2)] hover:shadow-[rgba(0,217,255,0.35)] hover:-translate-y-0.5 flex-shrink-0 ml-auto"
                >
                  <Send size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
