"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Globe,
  Mail,
  MessageCircle,
  ArrowUp,
  ArrowUpRight,
  Copy,
  Check,
  Sparkles,
} from "lucide-react";
import { SITE_URL, getWhatsAppUrl } from "@/lib/config";
import AltarekaLogo from "@/components/AltarekaLogo";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        window.history.pushState({}, "", href);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("halo.altareka@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = "mailto:halo.altareka@gmail.com";
    }
  };

  return (
    <footer className="relative bg-[#0c0c0b] text-[#f5f4f0] pt-16 md:pt-24 pb-12 px-5 sm:px-8 border-t border-white/[0.08] overflow-hidden">
      {/* Background Ambient Glows & Subtle Texture */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[400px] bg-amber-warm/[0.07] rounded-full blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-[280px] h-[280px] bg-white/[0.02] rounded-full blur-[100px]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Header: Atelier Brand */}
        <div className="flex items-center justify-between pb-8 md:pb-12 border-b border-white/[0.08]">
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="group inline-flex items-center gap-3.5 self-start"
            aria-label="Altareka Home"
          >
            <AltarekaLogo size={38} variant="light" />
            <span className="font-serif font-black text-2xl sm:text-3xl tracking-tighter uppercase text-white">
              Altareka<span className="text-amber-warm italic">.</span>
            </span>
          </Link>
        </div>

        {/* Mobile Fast-Track Quick Contact Cards (Mobile-First Priority) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8 md:py-12 border-b border-white/[0.08]">
          {/* Card 1: WhatsApp Priority Contact */}
          <Link
            href={getWhatsAppUrl(
              "Halo Altareka, saya ingin mendiskusikan rencana pembuatan website untuk bisnis saya.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-amber-warm/40 transition-all duration-300 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-warm/10 border border-amber-warm/20 flex items-center justify-center text-amber-warm group-hover:scale-105 transition-transform duration-300 shrink-0">
                <MessageCircle size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-white">
                    WhatsApp Studio
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-warm/20 text-amber-warm font-bold uppercase tracking-wider">
                    Kilat
                  </span>
                </div>
                <p className="text-xs text-white/50 mt-1">
                  Respon instan dalam &lt; 15 menit
                </p>
              </div>
            </div>
            <div className="w-9 h-9 rounded-full bg-white/[0.05] flex items-center justify-center text-white/40 group-hover:text-amber-warm group-hover:bg-amber-warm/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2">
              <ArrowUpRight size={18} />
            </div>
          </Link>

          {/* Card 2: Email Copy & Open */}
          <div className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-4 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white/70 shrink-0">
                <Mail size={22} />
              </div>
              <div className="truncate">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-white block">
                  Email Resmi
                </span>
                <Link
                  href="mailto:halo.altareka@gmail.com"
                  className="text-xs text-amber-warm/90 hover:text-amber-warm hover:underline truncate block mt-1"
                >
                  halo.altareka@gmail.com
                </Link>
              </div>
            </div>

            <button
              onClick={copyEmail}
              type="button"
              className="px-3 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white/70 hover:text-white transition-all flex items-center gap-1.5 text-[11px] font-bold tracking-wider shrink-0 ml-2 active:scale-95"
              aria-label="Salin email"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" />
                  <span className="text-emerald-400">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Salin</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main Grid: Directory & Architecture Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 py-12 md:py-16">
          {/* Brand Manifesto & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col justify-start">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-amber-warm mb-3 flex items-center gap-2">
              Standar Kualitas Agensi
            </p>
            <h3 className="font-serif font-black text-xl sm:text-2xl tracking-tight text-white mb-4 leading-snug">
              Membangun Website yang Mengonversi Pengunjung Jadi Pelanggan.
            </h3>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed font-normal">
              Altareka adalah studio arsitektur web modern yang berfokus pada
              desain visual berkelas dunia, kecepatan loading ekstrem, dan
              struktur yang terbukti melipatgandakan kredibilitas bisnis Anda.
            </p>
          </div>

          {/* Navigasi Cepat (3 cols on lg) */}
          <div className="lg:col-span-3 sm:pl-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/90 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-warm" />
              Navigasi Halaman
            </h4>
            <ul className="space-y-3.5">
              {[
                { name: "Beranda", id: "#home" },
                { name: "Produk Unggulan", id: "#produk" },
                { name: "Layanan Spesialis", id: "#services" },
                { name: "Keunggulan Studio", id: "#why-me" },
                { name: "Alur Proses Kerja", id: "#how-it-works" },
                { name: "Portofolio Pilihan", id: "#portfolio" },
                { name: "Paket & Investasi", id: "#pricing" },
                { name: "Pertanyaan Umum (FAQ)", id: "#faq" },
                { name: "Konsultasi Proyek", id: "#contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.id}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="group inline-flex items-center justify-between w-full py-1 text-xs font-semibold text-white/55 hover:text-white transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    <span className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-amber-warm text-[10px]">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan & Solusi (3 cols on lg) */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/90 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-warm" />
              Solusi Digital
            </h4>
            <ul className="space-y-3.5 text-xs text-white/55">
              <li className="flex flex-col">
                <span className="font-semibold text-white/80">
                  Landing Page Konversi Tinggi
                </span>
                <span className="text-[11px] text-white/40 mt-0.5">
                  Optimasi iklan Google &amp; Meta Ads
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white/80">
                  Website Korporat &amp; Profil Bisnis
                </span>
                <span className="text-[11px] text-white/40 mt-0.5">
                  Kredibilitas kelas enterprise
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white/80">
                  Web Application &amp; SaaS MVP
                </span>
                <span className="text-[11px] text-white/40 mt-0.5">
                  Fullstack Next.js &amp; performa tinggi
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white/80">
                  Website Toko &amp; E-Commerce
                </span>
                <span className="text-[11px] text-white/40 mt-0.5">
                  Checkout lancar &amp; integrasi WhatsApp
                </span>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold text-white/80">
                  Optimasi Kecepatan &amp; SEO Teknis
                </span>
                <span className="text-[11px] text-white/40 mt-0.5">
                  Skor 95+ PageSpeed &amp; index Google
                </span>
              </li>
            </ul>
          </div>

          {/* Terhubung & Studio Details (2 cols on lg) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-black uppercase tracking-[0.3em] text-white/90 mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-warm" />
              Terhubung
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href={getWhatsAppUrl(
                  "Halo Altareka, saya ingin bertanya tentang layanan pembuatan website.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-white/70 hover:text-white transition-all group"
              >
                <MessageCircle
                  size={15}
                  className="text-amber-warm group-hover:scale-110 transition-transform"
                />
                <span>WhatsApp Langsung</span>
              </Link>

              <Link
                href="mailto:halo.altareka@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-white/70 hover:text-white transition-all group"
              >
                <Mail
                  size={15}
                  className="text-amber-warm group-hover:scale-110 transition-transform"
                />
                <span>Kirim Surel</span>
              </Link>

              <Link
                href={SITE_URL}
                className="inline-flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-semibold text-white/70 hover:text-white transition-all group"
              >
                <Globe
                  size={15}
                  className="text-amber-warm group-hover:scale-110 transition-transform"
                />
                <span>Domain Utama</span>
              </Link>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">
                Basis &amp; Wilayah Layanan
              </p>
              <p className="text-xs text-white/80 font-medium leading-relaxed mb-1.5">
                Tenggarong, Kutai Kartanegara, Kalimantan Timur
              </p>
              <p className="text-[11px] text-white/45 leading-relaxed">
                Melayani: Tenggarong · Kukar · Samarinda · Balikpapan · IKN Nusantara · Seluruh Indonesia
              </p>
            </div>
          </div>
        </div>

        {/* Grand Brand Typography Backdrop — Pure Vector, Guaranteed Zero Cutoff */}
        <div className="pt-10 pb-6 border-t border-white/[0.08] select-none pointer-events-none flex justify-center overflow-hidden">
          <svg
            viewBox="0 0 1400 180"
            className="w-full h-auto text-white/[0.12] select-none pointer-events-none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Altareka"
          >
            <text
              x="50%"
              y="135"
              textAnchor="middle"
              fontSize="130"
              fontWeight="900"
              letterSpacing="0.08em"
              textLength="1150"
              lengthAdjust="spacingAndGlyphs"
              className="font-serif uppercase"
              fill="currentColor"
            >
              ALTAREKA
            </text>
          </svg>
        </div>

        {/* Bottom Legal & Utility Bar */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/40 text-center sm:text-left">
            © 2026 ALTAREKA. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-amber-warm/40 text-xs font-bold uppercase tracking-[0.15em] text-white/70 hover:text-amber-warm transition-all duration-300 active:scale-95"
            aria-label="Kembali ke atas halaman"
          >
            <span>Ke Atas</span>
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}
