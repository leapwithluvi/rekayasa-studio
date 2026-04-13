"use client";

import React from "react";
import { Check, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const plans = [
  {
    name: "Essential",
    price: "Mulai 450rb",
    desc: "UMKM & Personal Portfolio",
    features: [
      "1 Halaman (Profile/Gallery)",
      "Mobile Responsive Design",
      "WhatsApp & Sosmed Link",
      "Selesai dalam 3-5 Hari",
      "SSL Certificate (HTTPS)",
      "Bantuan Setup Domain",
    ],
    cta: "Pilih Paket Essential",
    featured: false,
  },
  {
    name: "Growth",
    price: "850rb",
    desc: "Landing Page & Sales Funnel",
    features: [
      "High-Conv Copywriting",
      "Custom UI/UX Design",
      "Facebook Pixel / GA4",
      "Interactive Animations",
      "Google Search Console",
      "Premium Design Standards",
    ],
    cta: "Pilih Paket Growth",
    featured: true,
  },
  {
    name: "Business",
    price: "1.2jt",
    desc: "E-Commerce & Online Store",
    features: [
      "Katalog Produk WhatsApp",
      "Sistem Keranjang Virtual",
      "Manajemen Produk Dasar",
      "Integrasi Pengiriman Dasar",
      "Panduan Update Produk",
      "Prioritas Support Teknis",
    ],
    cta: "Pilih Paket Business",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-8">Investasi Digital</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance">
            Harga Jujur, Hasil <span className="text-amber-warm italic">Luhur.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "relative p-10 md:p-14 flex flex-col transition-all duration-500 rounded-sm border",
                plan.featured 
                  ? "bg-charcoal text-off-white lg:scale-105 z-10 border-charcoal shadow-2xl shadow-charcoal/30" 
                  : "bg-white text-charcoal border-charcoal/5 scale-100"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-warm text-charcoal px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                  Paling Populer
                </div>
              )}
              
              <div className="mb-12 text-center">
                <span className={cn("text-[10px] font-black uppercase tracking-[0.3em]", plan.featured ? "text-amber-warm" : "text-charcoal/40")}>
                  {plan.name}
                </span>
                <div className="mt-6 flex items-baseline justify-center gap-1 flex-nowrap">
                  <span className="text-xl font-black tracking-tight">Rp</span>
                  <span className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tighter">{plan.price.replace("Mulai ", "")}</span>
                </div>
                {plan.price.includes("Mulai") && (
                  <div className="text-[10px] font-black uppercase tracking-widest text-amber-warm mt-2">Mulai Dari</div>
                )}
                <p className={cn("mt-8 text-[11px] font-bold uppercase tracking-widest leading-relaxed", plan.featured ? "text-off-white/40" : "text-charcoal/30")}>
                  {plan.desc}
                </p>
              </div>

              <ul className="space-y-4 mb-16 flex-1">
                {plan.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <div className={cn("mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0", plan.featured ? "bg-amber-warm/10" : "bg-charcoal/5")}>
                      <Check className={cn("w-3 h-3", plan.featured ? "text-amber-warm" : "text-charcoal")} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-tight leading-relaxed">{feat}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="https://wa.me/yournumber"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "w-full py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl shadow-charcoal/5",
                  plan.featured 
                    ? "bg-amber-warm text-charcoal hover:bg-off-white" 
                    : "bg-charcoal text-off-white hover:bg-amber-warm hover:text-charcoal"
                )}
              >
                <MessageCircle size={18} />
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.3em] leading-relaxed">
            *Semua paket di atas sudah termasuk support teknis. <br className="md:hidden" />
            <Link href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="text-charcoal underline underline-offset-4 ml-1">Konsultasikan kebutuhan custom Anda</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
