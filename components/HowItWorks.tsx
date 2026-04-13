"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Konsultasi",
    desc: "Diskusi mendalam via WA atau Zoom untuk memahami visi, target, dan kebutuhan bisnis Anda.",
  },
  {
    num: "02",
    title: "Visual Design",
    desc: "Kami menyusun draft visual yang elegan sesuai dengan jati diri brand Anda.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Proses pengkodean menggunakan teknologi Next.js untuk performa maksimal.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Website online secara resmi. Kami bantu maintenance dan pantau performanya.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-8 font-sans text-balance">Proses Kerja</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance px-4">
            Langkah Menuju <span className="italic">Kesuksesan.</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group p-8 md:p-10 border border-charcoal/5 rounded-sm hover:border-amber-warm transition-all duration-700 bg-white"
            >
              <div className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-serif font-black text-charcoal/[0.03] absolute -top-4 -left-2 sm:-top-10 sm:-left-6 pointer-events-none group-hover:text-amber-warm/[0.05] transition-colors leading-none tracking-tighter">
                {step.num}
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-charcoal mb-6 tracking-tight">{step.title}</h4>
                <p className="text-charcoal/50 text-sm leading-loose font-medium">
                  {step.desc}
                </p>
              </div>
              <div className="mt-10 h-1 w-12 bg-charcoal group-hover:bg-amber-warm group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
