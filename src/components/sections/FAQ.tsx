"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Plus } from "lucide-react";

const FAQS = [
  {
    q: "Who is Moinul Islam Bappi?",
    a: "Moinul Islam Bappi is an IT Executive, SEO Specialist, Digital Marketing Strategist and AI Automation Engineer based in Dhaka, Bangladesh. He is the founder of MiBrand Agency and helps businesses rank on Google, scale e-commerce, and automate operations.",
  },
  {
    q: "What services does Moinul Islam offer?",
    a: "He offers SEO and local SEO, paid advertising on Meta, Google and TikTok, Shopify e-commerce growth and conversion optimization, AI automation systems, custom web apps, POS and admin panels, and API, webhook and CRM integrations.",
  },
  {
    q: "Where is Moinul Islam based and who does he work with?",
    a: "Moinul Islam is based in Dhaka, Bangladesh and works with both local and international clients, having expanded operations across 5+ global markets.",
  },
  {
    q: "How can I hire Moinul Islam?",
    a: "You can hire Moinul Islam directly through WhatsApp at +8801605956421, by email at mib.bappi360@gmail.com, or via the contact section of this website. He typically replies within minutes.",
  },
  {
    q: "What results has Moinul Islam delivered?",
    a: "He has completed 100+ client projects with an 85%+ retention rate, generated 10+ lakh BDT monthly revenue with under 1 lakh BDT ad spend, ranked multiple businesses on Google's first page, and built SaaS-level automation handling 1,000+ processes per second.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 right-0 section-divider" />
      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <span className="section-label">FAQ</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-[#1F1B17] tracking-[-0.01em] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#5A534B] leading-relaxed">
            Quick answers about who I am, what I do, and how to work with me.
          </p>
        </motion.div>

        <div className="max-w-3xl flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.08 + i * 0.07 }}
                className="card-base overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left flex items-center justify-between gap-4 p-5"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading font-bold text-[#1F1B17] text-base leading-snug">
                    {item.q}
                  </h3>
                  <span
                    className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center bg-[rgba(23,125,99,0.08)] transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={15} className="text-[#177D63]" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[#5A534B] text-sm leading-relaxed">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
