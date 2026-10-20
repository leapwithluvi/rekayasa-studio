"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ExternalLink,
  Quote,
  MessageCircle,
  Globe,
  Sparkles,
  CheckCircle2,
  Zap,
  ShieldCheck,
  TrendingUp,
  Clock,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=80",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".spotlight-card",
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".spotlight-card",
            start: "top bottom-=60",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".next-slot-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".next-slot-card",
            start: "top bottom-=40",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      id="portfolio"
      ref={container}
      className="py-16 md:py-24 px-6 bg-off-white scroll-mt-14 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="portfolio-header text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal/5 border border-charcoal/5 mb-5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/70">
              Karya Pilihan Kami · Live Production
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tighter text-charcoal text-balance">
            Karya Pilihan, Hasil{" "}
            <span className="text-amber-warm italic">Nyata & Teruji.</span>
          </h3>

          <p className="mt-4 text-xs sm:text-sm text-charcoal/60 max-w-xl mx-auto leading-relaxed">
            Lihat langsung website produksi yang telah kami bangun dan rilis
            secara resmi untuk klien kami.
          </p>
        </div>

        {/* ── Main Spotlight Showcase Card (PT. Bumi Kutai Perkasa) ── */}
        <div className="spotlight-card bg-white rounded-md border border-charcoal/10 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 mb-10">
          {/* Light / White Browser Mockup Header */}
          <div className="bg-[#fbfbf9] px-4 sm:px-6 py-3 border-b border-charcoal/8 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            </div>

            <a
              href="https://www.bumikutaiperkasa.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-3 sm:px-4 py-1 rounded-sm bg-white border border-charcoal/8 hover:border-amber-warm/60 text-[11px] text-charcoal/70 font-mono transition-all max-w-[240px] sm:max-w-md truncate shadow-2xs"
              title="Kunjungi website asli di tab baru"
            >
              <Globe size={11} className="text-amber-warm shrink-0" />
              <span className="truncate">https://www.bumikutaiperkasa.co.id</span>
              <ExternalLink
                size={11}
                className="opacity-40 group-hover:opacity-100 group-hover:text-amber-warm shrink-0 transition-opacity ml-auto"
              />
            </a>

            <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="hidden sm:inline">Live Website</span>
              <span className="sm:hidden">Live</span>
            </div>
          </div>

          {/* Full Banner Preview (Proportional 1024x523 HD, Not Cut Off) */}
          <div className="relative aspect-[1024/523] w-full bg-charcoal/5 overflow-hidden group">
            <a
              href="https://www.bumikutaiperkasa.co.id"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative"
              title="Klik untuk membuka website di tab baru"
            >
              <picture>
                <source srcSet="/portfolio/bumi-kutai-perkasa.webp" type="image/webp" />
                <img
                  src="/portfolio/bumi-kutai-perkasa.png"
                  alt="Website Resmi PT. Bumi Kutai Perkasa oleh Altareka - Jasa Website Tenggarong, Kukar & Kaltim"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                  loading="lazy"
                  width={1024}
                  height={523}
                />
              </picture>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <span className="inline-flex items-center gap-2 bg-charcoal text-off-white hover:bg-amber-warm hover:text-charcoal px-5 py-3 rounded-sm text-xs font-black uppercase tracking-[0.2em] shadow-2xl transition-colors">
                  <ExternalLink size={14} />
                  Buka Website Asli di Tab Baru ↗
                </span>
              </div>
            </a>
          </div>

          {/* Project Details Section */}
          <div className="p-6 sm:p-8 md:p-10 border-t border-charcoal/8 bg-white">
            <div className="grid md:grid-cols-12 gap-8 items-start">
              {/* Left Column: Description & Specs */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-warm">
                      PT / Corporate Profile & Katalog
                    </span>
                    <span className="text-charcoal/20">•</span>
                    <span className="text-[10px] text-charcoal/40 font-mono">
                      2026
                    </span>
                  </div>

                  <h4 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-charcoal mb-3">
                    PT. Bumi Kutai Perkasa
                  </h4>

                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed mb-6">
                    Website company profile dan katalog resmi produsen penyedia batu
                    split, koral, batu pondasi, dan batu agregat base course di
                    Kutai Kartanegara, Kalimantan Timur. Dibangun dengan
                    arsitektur modern, responsif di HP, dan terintegrasi
                    langsung dengan saluran pemesanan WhatsApp.
                  </p>

                  {/* 4 Metric Badges */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    <div className="bg-[#fbfbf9] p-3 rounded border border-charcoal/5 text-center">
                      <div className="flex items-center justify-center gap-1 text-emerald-600 mb-0.5">
                        <Zap size={13} />
                        <span className="text-xs font-black font-mono">98/100</span>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-wider text-charcoal/45 block">
                        PageSpeed
                      </span>
                    </div>

                    <div className="bg-[#fbfbf9] p-3 rounded border border-charcoal/5 text-center">
                      <div className="flex items-center justify-center gap-1 text-amber-warm mb-0.5">
                        <ShieldCheck size={13} />
                        <span className="text-xs font-black">.co.id</span>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-wider text-charcoal/45 block">
                        Domain Resmi
                      </span>
                    </div>

                    <div className="bg-[#fbfbf9] p-3 rounded border border-charcoal/5 text-center">
                      <div className="flex items-center justify-center gap-1 text-charcoal mb-0.5">
                        <TrendingUp size={13} />
                        <span className="text-xs font-black">Rank #1</span>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-wider text-charcoal/45 block">
                        SEO Lokal
                      </span>
                    </div>

                    <div className="bg-[#fbfbf9] p-3 rounded border border-charcoal/5 text-center">
                      <div className="flex items-center justify-center gap-1 text-charcoal mb-0.5">
                        <Clock size={13} />
                        <span className="text-xs font-black font-mono">&lt;0.8s</span>
                      </div>
                      <span className="text-[8px] font-bold uppercase tracking-wider text-charcoal/45 block">
                        Waktu Muat
                      </span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-6">
                    <p className="text-[9px] font-black uppercase tracking-[0.3em] text-charcoal/30">
                      Fitur & Solusi
                    </p>
                    {[
                      "Profil legalitas dan armada dump truck terverifikasi",
                      "Katalog spesifikasi lengkap batu split & agregat",
                      "Tombol pemesanan cepat langsung ke WhatsApp Sales",
                      "Skema SEO Google Search Console & Schema.org",
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          size={13}
                          className="text-amber-warm shrink-0 mt-0.5"
                        />
                        <span className="text-xs text-charcoal/80 leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-charcoal/8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.bumikutaiperkasa.co.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-5 bg-charcoal text-off-white hover:bg-amber-warm hover:text-charcoal text-xs font-black uppercase tracking-[0.15em] rounded-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-sm"
                  >
                    <ExternalLink size={14} />
                    Buka Website Asli ↗
                  </a>

                  <a
                    href={getWhatsAppUrl(
                      "Halo Altareka, saya melihat website PT. Bumi Kutai Perkasa dan tertarik untuk membuat website serupa untuk bisnis saya. Bisa konsultasi?",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-5 border border-charcoal/30 hover:border-charcoal text-charcoal hover:bg-charcoal hover:text-off-white text-xs font-black uppercase tracking-[0.15em] rounded-sm flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <MessageCircle size={14} />
                    Pesan Serupa
                  </a>
                </div>
              </div>

              {/* Right Column: Tech Stack & Testimonial */}
              <div className="md:col-span-5 flex flex-col justify-between h-full space-y-6">
                {/* Tech Stack */}
                <div className="bg-[#fbfbf9] p-5 rounded-sm border border-charcoal/5">
                  <p className="text-[9px] font-black uppercase tracking-[0.3em] text-charcoal/40 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Next.js 15",
                      "Tailwind CSS",
                      "TypeScript",
                      "Vercel Edge",
                      "JSON-LD Schema",
                    ].map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-bold uppercase tracking-wider bg-white text-charcoal/80 border border-charcoal/10 px-2.5 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-[#fbfbf9] p-5 rounded-sm border border-charcoal/5 border-l-2 border-l-amber-warm">
                  <Quote className="w-5 h-5 text-amber-warm mb-2 opacity-70" />
                  <p className="text-xs italic text-charcoal/80 leading-relaxed mb-3">
                    &ldquo;Website tampil sangat profesional dan kredibel di
                    mata rekanan proyek B2B. Membantu kami memvalidasi perizinan
                    dan mempercepat order batu split se-Kaltim.&rdquo;
                  </p>
                  <p className="text-[10px] font-black uppercase tracking-wider text-charcoal">
                    — Manajemen PT. Bumi Kutai Perkasa
                  </p>
                  <p className="text-[9px] text-charcoal/40">
                    Kutai Kartanegara, Kaltim
                  </p>
                </div>

                {/* Quick note */}
                <div className="p-4 bg-emerald-50/50 rounded-sm border border-emerald-100/80">
                  <p className="text-[11px] text-emerald-900/80 leading-relaxed font-medium">
                    ✓ Garansi performa & keamanan SSL aktif penuh di lingkungan
                    produksi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Next Slot Invitation Card ── */}
        <div className="next-slot-card bg-charcoal text-off-white rounded-md p-6 sm:p-8 md:p-10 border border-charcoal shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-warm/15 text-amber-warm text-[10px] font-black uppercase tracking-widest mb-3">
                <Sparkles size={11} />
                Slot Pengerjaan Terbuka Bulan Ini
              </div>

              <h4 className="text-xl sm:text-2xl font-serif font-black tracking-tight text-off-white mb-2">
                Jadilah Mitra Digital Kami{" "}
                <span className="text-amber-warm italic">Berikutnya.</span>
              </h4>

              <p className="text-xs text-off-white/70 leading-relaxed max-w-xl">
                Butuh website untuk <strong>Portofolio</strong>,{" "}
                <strong>Katalog UMKM</strong>, atau{" "}
                <strong>Company Profile PT</strong>? Dapatkan pendampingan
                langsung 1-on-1, domain .my.id gratis, dan jaminan kecepatan
                loading.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
              <a
                href={getWhatsAppUrl(
                  "Halo Altareka, saya tertarik untuk memesan pembuatan website dan ingin berkonsultasi mengenai slot pengerjaan.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-amber-warm text-charcoal hover:bg-off-white text-xs font-black uppercase tracking-[0.15em] rounded-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md"
              >
                <MessageCircle size={15} />
                Klaim Slot Sekarang
                <ArrowRight size={13} />
              </a>

              <a
                href="#pricing"
                className="py-3.5 px-5 bg-white/5 hover:bg-white/10 text-off-white/80 hover:text-off-white text-xs font-bold uppercase tracking-wider rounded-sm text-center transition-colors border border-white/5"
              >
                Lihat Harga →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
