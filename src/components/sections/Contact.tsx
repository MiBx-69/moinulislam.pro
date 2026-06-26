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
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00D9FF] block mb-3">
            Get in Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-[#94A3B8] max-w-xl">
            Have a project in mind, need SEO strategy, or want to automate your operations? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Email copy */}
            <button
              onClick={copyEmail}
              className="card-base flex items-center gap-3 p-4 text-left group"
            >
              <div className="p-2 rounded-lg bg-[rgba(0,217,255,0.08)]">
                <Mail size={15} className="text-[#00D9FF]" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#64748B] mb-0.5">Email</p>
                <p className="text-sm text-white truncate group-hover:text-[#00D9FF] transition-colors">
                  {personal.email}
                </p>
              </div>
              <span className="text-[#64748B] group-hover:text-[#00D9FF] transition-colors flex-shrink-0">
                {copied ? <Check size={14} /> : <Copy size={14} />}
              </span>
            </button>

            {/* Phone */}
            <a
              href={`tel:${personal.phone}`}
              className="card-base flex items-center gap-3 p-4 group"
            >
              <div className="p-2 rounded-lg bg-[rgba(0,217,255,0.08)]">
                <Phone size={15} className="text-[#00D9FF]" />
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-0.5">Phone</p>
                <p className="text-sm text-white group-hover:text-[#00D9FF] transition-colors">
                  {personal.phone}
                </p>
              </div>
            </a>

            {/* Website */}
            <a
              href={personal.website}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base flex items-center gap-3 p-4 group"
            >
              <div className="p-2 rounded-lg bg-[rgba(0,217,255,0.08)]">
                <Globe size={15} className="text-[#00D9FF]" />
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-0.5">Agency</p>
                <p className="text-sm text-white group-hover:text-[#00D9FF] transition-colors">
                  moinul.mibrand.agency
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="card-base flex items-center gap-3 p-4 group"
            >
              <div className="p-2 rounded-lg bg-[rgba(59,130,246,0.08)]">
                <Link2 size={15} className="text-[#3B82F6]" />
              </div>
              <div>
                <p className="text-xs text-[#64748B] mb-0.5">LinkedIn</p>
                <p className="text-sm text-white group-hover:text-[#3B82F6] transition-colors">
                  View Profile
                </p>
              </div>
            </a>

            {/* Availability badge */}
            <div className="flex items-center gap-2 mt-2 px-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D9FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D9FF]" />
              </span>
              <span className="text-xs text-[#64748B]">
                Available for new projects & collaborations
              </span>
            </div>
          </motion.div>

          {/* Right: Contact form (UI only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={(e) => e.preventDefault()}
              className="card-base p-6 flex flex-col gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-[#64748B] mb-1.5 font-mono"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[rgba(0,217,255,0.4)] transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#64748B] mb-1.5 font-mono"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[rgba(0,217,255,0.4)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-[#64748B] mb-1.5 font-mono"
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
                  className="w-full bg-[#0B0F19] border border-[#1E293B] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-[#334155] focus:outline-none focus:border-[rgba(0,217,255,0.4)] transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <p className="text-xs text-[#64748B]">
                  Or email directly:{" "}
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-[#00D9FF] hover:underline"
                  >
                    {personal.email}
                  </a>
                </p>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm bg-[#00D9FF] text-[#0B0F19] hover:bg-[#00c4e8] transition-colors shadow-lg shadow-[rgba(0,217,255,0.2)] flex-shrink-0"
                >
                  <Send size={14} />
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
