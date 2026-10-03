"use client";

import React, { useRef, useState } from "react";
import { Check, X, MessageCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWhatsAppUrl } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

const notIncludedItems = [
  "Pembelian Domain (.com, .id, dll.)",
  "Pembuatan Konten & Teks Halaman",
  "Desain Logo & Identitas Brand",
  "Foto / Aset Visual Produk",
  "Iklan Berbayar (Google/Meta Ads)",
];

const plans = [
  {
    name: "Essential",
    price: "Mulai 450rb",
    desc: "UMKM · Personal Portfolio · One-Page",
    waMessage:
      "Halo Novareka, saya tertarik untuk memesan Paket Essential (Mulai 450rb). Bisa bantu jelaskan alur pembuatannya?",
    features: [
      "1 Halaman Responsif (One-Page)",
      "Profil Usaha / Portofolio Karya",
      "Mobile Responsive Design",
      "Integrasi WhatsApp & Sosmed",
      "Hosting Gratis Disediakan",
      "Koneksi Domain Custom",
      "SSL Certificate (HTTPS)",
      "Selesai dalam 3–5 Hari",
      "1x Revisi Minor",
    ],
    cta: "Pilih Paket Essential",
    featured: false,
  },
  {
    name: "Growth",
    price: "850rb",
    desc: "Company Profile · Landing Page · Brand",
    waMessage:
      "Halo Novareka, saya tertarik untuk memesan Paket Growth (850rb) untuk Company Profile / Landing Page bisnis saya. Bisa mulai konsultasi?",
    features: [
      "Company Profile Profesional & Elegan",
      "Struktur Multi-Section Terarah",
      "Katalog Layanan & Profil Bisnis",
      "Custom UI/UX Design Premium",
      "Interactive Micro-Animations",
      "High-Conv Copywriting Dasar",
      "Integrasi Google Maps & Kontak",
      "Facebook Pixel / GA4 Setup",
      "Google Search Console (SEO)",
      "Hosting Gratis Disediakan",
      "Koneksi Domain Custom",
      "SSL Certificate (HTTPS)",
      "Selesai dalam 5–7 Hari",
      "3x Revisi",
    ],
    cta: "Pilih Paket Growth",
    featured: true,
  },
  {
    name: "Business",
    price: "1.2jt",
    desc: "Corporate · Katalog Lengkap · Multi-Page",
    waMessage:
      "Halo Novareka, saya tertarik untuk memesan Paket Business (1.2jt) untuk Website Corporate / Katalog Produk. Mohon informasi detailnya.",
    features: [
      "Company Profile Multi-Halaman",
      "Katalog Produk Lengkap & Rinci",
      "Sistem Keranjang & WhatsApp Order",
      "Manajemen Konten & Produk Dasar",
      "Custom UI/UX Design Premium",
      "Interactive Micro-Animations",
      "SEO On-Page & Indexing Cepat",
      "Hosting Gratis Disediakan",
      "Koneksi Domain Custom",
      "SSL Certificate (HTTPS)",
      "Facebook Pixel / GA4 Setup",
      "Panduan Update Konten & Produk",
      "Prioritas Support Teknis",
      "Selesai dalam 7–14 Hari",
      "5x Revisi",
    ],
    cta: "Pilih Paket Business",
    featured: false,
  },
];

const PREVIEW_COUNT = 4;

export default function Pricing() {
  const container = useRef(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setExpandedIndex((prev) => (prev === i ? null : i));
  }

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".pricing-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <section
      id="pricing"
      ref={container}
      className="py-32 px-6 bg-off-white overflow-hidden scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto">
        <div className="pricing-header text-center mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-8">
            Investasi Digital
          </h2>
          <h3 className="text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance">
            Harga Jujur, Hasil{" "}
            <span className="text-amber-warm italic">Luhur.</span>
          </h3>
        </div>

        <div className="pricing-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto items-start">
          {plans.map((plan, i) => {
            const isExpanded = expandedIndex === i;
            const visibleFeatures = isExpanded
              ? plan.features
              : plan.features.slice(0, PREVIEW_COUNT);
            const hiddenCount = plan.features.length - PREVIEW_COUNT;

            return (
              <div
                key={i}
                className={cn(
                  "pricing-card relative p-10 md:p-14 flex flex-col transition-all duration-500 rounded-sm border",
                  plan.featured
                    ? "bg-charcoal text-off-white lg:scale-105 z-10 border-charcoal shadow-2xl shadow-charcoal/30"
                    : "bg-white text-charcoal border-charcoal/5",
                )}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-warm text-charcoal px-6 py-2 text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
                    Paling Populer
                  </div>
                )}

                {/* Price header */}
                <div className="mb-10 text-center">
                  <span
                    className={cn(
                      "text-[10px] font-black uppercase tracking-[0.3em]",
                      plan.featured ? "text-amber-warm" : "text-charcoal/40",
                    )}
                  >
                    {plan.name}
                  </span>
                  <div className="mt-6 flex items-baseline justify-center gap-1 flex-nowrap">
                    <span className="text-xl font-black tracking-tight">
                      Rp
                    </span>
                    <span className="text-5xl sm:text-6xl md:text-7xl font-serif font-black tracking-tighter">
                      {plan.price.replace("Mulai ", "")}
                    </span>
                  </div>
                  {plan.price.includes("Mulai") && (
                    <div className="text-[10px] font-black uppercase tracking-widest text-amber-warm mt-2">
                      Mulai Dari
                    </div>
                  )}
                  <p
                    className={cn(
                      "mt-6 text-[11px] font-bold uppercase tracking-widest leading-relaxed",
                      plan.featured ? "text-off-white/40" : "text-charcoal/30",
                    )}
                  >
                    {plan.desc}
                  </p>
                </div>

                {/* Feature list */}
                <ul className="space-y-3.5 mb-4">
                  {visibleFeatures.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <div
                        className={cn(
                          "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                          plan.featured ? "bg-amber-warm/10" : "bg-charcoal/5",
                        )}
                      >
                        <Check
                          className={cn(
                            "w-3 h-3",
                            plan.featured ? "text-amber-warm" : "text-charcoal",
                          )}
                        />
                      </div>
                      <span className="text-xs font-bold uppercase tracking-tight leading-relaxed">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Expanded: tidak termasuk */}
                {isExpanded && (
                  <>
                    <div
                      className={cn(
                        "border-t my-5",
                        plan.featured
                          ? "border-off-white/10"
                          : "border-charcoal/8",
                      )}
                    />
                    <p
                      className={cn(
                        "text-[9px] font-black uppercase tracking-[0.3em] mb-3",
                        plan.featured
                          ? "text-off-white/30"
                          : "text-charcoal/25",
                      )}
                    >
                      Tidak Termasuk
                    </p>
                    <ul className="space-y-2.5 mb-4">
                      {notIncludedItems.map((item, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <div
                            className={cn(
                              "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0",
                              plan.featured ? "bg-red-500/10" : "bg-red-500/5",
                            )}
                          >
                            <X className="w-3 h-3 text-red-400" />
                          </div>
                          <span
                            className={cn(
                              "text-xs font-bold uppercase tracking-tight leading-relaxed",
                              plan.featured
                                ? "text-off-white/30"
                                : "text-charcoal/30",
                            )}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {/* Toggle button */}
                {hiddenCount > 0 && (
                  <button
                    onClick={() => toggle(i)}
                    className={cn(
                      "flex items-center gap-2 text-[10px] font-black uppercase tracking-widest mb-8 mt-1 transition-colors",
                      plan.featured
                        ? "text-amber-warm hover:text-off-white"
                        : "text-charcoal/40 hover:text-charcoal",
                    )}
                    aria-expanded={isExpanded}
                  >
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-300",
                        isExpanded && "rotate-180",
                      )}
                    />
                    {isExpanded
                      ? "Sembunyikan"
                      : `Lihat Detail (+${hiddenCount} lainnya)`}
                  </button>
                )}

                {/* CTA */}
                <Link
                  href={getWhatsAppUrl(plan.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-auto w-full py-6 flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl shadow-charcoal/5",
                    plan.featured
                      ? "bg-amber-warm text-charcoal hover:bg-off-white"
                      : "bg-charcoal text-off-white hover:bg-amber-warm hover:text-charcoal",
                  )}
                >
                  <MessageCircle size={18} />
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[10px] font-bold text-charcoal/30 uppercase tracking-[0.3em] leading-relaxed">
            *Semua paket di atas sudah termasuk support teknis.{" "}
            <br className="md:hidden" />
            <Link
              href={getWhatsAppUrl(
                "Halo Novareka, saya ingin konsultasi mengenai pembuatan website dengan kebutuhan custom.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal underline underline-offset-4 ml-1"
            >
              Konsultasikan kebutuhan custom Anda
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
