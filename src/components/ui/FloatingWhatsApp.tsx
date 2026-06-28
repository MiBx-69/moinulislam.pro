"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { personal } from "@/data";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const [tipOpen, setTipOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${personal.whatsapp}?text=${encodeURIComponent(
    "Hi Moinul, I found your portfolio and would like to discuss a project."
  )}`;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          <AnimatePresence>
            {tipOpen && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#111827] border border-[#1a2640] shadow-xl shadow-black/40"
              >
                <span className="text-sm text-white font-medium">Chat with me on WhatsApp</span>
                <button
                  onClick={() => setTipOpen(false)}
                  className="text-[#64748B] hover:text-white transition-colors"
                  aria-label="Dismiss"
                >
                  <X size={14} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setTipOpen(true)}
            aria-label="Chat on WhatsApp"
            className="relative group"
          >
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
            <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-[rgba(37,211,102,0.4)] group-hover:scale-105 transition-transform">
              <MessageCircle size={26} className="text-white" fill="white" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
