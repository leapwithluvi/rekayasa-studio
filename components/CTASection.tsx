"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-32 px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto bg-charcoal rounded-sm p-8 md:p-32 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-amber-warm/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-amber-warm/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-amber-warm mb-6 md:10 text-balance">Mulai Bersama</h2>
          <h3 className="text-3xl sm:text-5xl md:text-8xl font-serif font-black tracking-tighter text-off-white leading-tight md:leading-none mb-10 md:16 italic text-balance px-4">
            Wujudkan Visi <br className="hidden sm:block" /> <span className="text-amber-warm not-italic">Digital</span> Anda.
          </h3>
          <p className="text-lg md:text-2xl text-off-white/50 font-medium max-w-2xl mx-auto mb-10 md:16 leading-relaxed text-balance">
            Hanya butuh satu klik untuk mengubah bisnis Anda menjadi standar global. Konsultasi pertama gratis.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link 
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full md:w-auto bg-amber-warm text-charcoal px-12 py-6 text-sm font-black uppercase tracking-[0.2em] rounded-sm hover:bg-off-white transition-all duration-500 shadow-2xl flex items-center justify-center gap-4"
            >
              <MessageCircle size={22} className="fill-charcoal" />
              WhatsApp Kami
              <ArrowRight size={22} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
