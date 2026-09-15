"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { DemoImage } from "@/components/ui/DemoImage";

export function MobileExperience() {
  return (
    <section className="section-padding bg-[#1F1B17] text-[#F4F1EA] overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 100%, rgba(23,125,99,0.15) 0%, transparent 60%)",
        }}
      />
      
      <div className="container-wide relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-xs font-mono tracking-widest uppercase text-[#177D63] block mb-4">
            Mobile Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold mb-6">
            Built for Operations Anywhere
          </h2>
          <p className="text-[#8C8278] text-lg leading-relaxed max-w-2xl mx-auto">
            The system is designed to be used by managers and operational staff away from the desktop. Critical data and actions are fully optimized for mobile devices.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-4 relative pt-12 pb-24">
          
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full max-w-[280px] lg:-mr-12"
          >
            <DemoImage 
              src="/demo-data/mobile-orders.png" 
              alt="Mobile Orders" 
              type="mobile" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-30 w-full max-w-[320px]"
          >
            <DemoImage 
              src="/demo-data/mobile-dashboard.png" 
              alt="Mobile Dashboard" 
              type="mobile" 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-20 w-full max-w-[280px] lg:-ml-12"
          >
            <DemoImage 
              src="/demo-data/mobile-report.png" 
              alt="Mobile Reports" 
              type="mobile" 
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
