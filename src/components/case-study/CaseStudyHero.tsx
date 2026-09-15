"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { DemoImage } from "@/components/ui/DemoImage";

export function CaseStudyHero() {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(23,125,99,0.1) 0%, transparent 70%)",
        }}
      />
      
      <div className="container-wide relative z-10">
        <Link href="/" className="inline-flex items-center gap-2 text-[#8C8278] hover:text-[#177D63] transition-colors mb-8 font-medium text-sm">
          <ArrowLeft size={16} /> Back to Portfolio
        </Link>
        
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-semibold text-[#1F1B17] tracking-tight mb-6">
              MiBx Dispatch
            </h1>
            <h2 className="text-xl md:text-2xl text-[#177D63] font-medium mb-8">
              E-commerce Dispatch & Operations Automation Platform
            </h2>
            <p className="text-[#5A534B] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              A custom operations platform built to connect Shopify orders, fraud intelligence, bulk dispatch, courier tracking, delivery/return workflows, customer communication, finance and business reporting into one operational system.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-6xl mx-auto"
        >
          <DemoImage 
            src="/demo-data/dashboard.png" 
            alt="MiBx Dispatch Dashboard Platform" 
            type="browser"
            containerClassName="opacity-95 hover:opacity-100 transition-opacity duration-500" 
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
