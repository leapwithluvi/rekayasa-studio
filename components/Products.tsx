"use client";

import React, { useRef } from "react";
import { Sparkles, BarChart3, Zap, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { getWhatsAppUrl } from "@/lib/config";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    icon: BarChart3,
    tag: "SaaS · Coming Soon",
    name: "Novareka Analytics",
    tagline: "Insight bisnis tanpa ribet.",
    desc: "Dashboard analitik sederhana untuk UMKM — pantau performa website, traffic, dan konversi dalam satu layar. Tidak perlu ahli data.",
    accent: true,
  },
  {
    icon: Zap,
    tag: "Tool · Coming Soon",
    name: "Novareka Pages",
    tagline: "Landing page dalam 5 menit.",
    desc: "Builder landing page drag-and-drop khusus bisnis Indonesia. Template lokal, integrasi WhatsApp & pembayaran siap pakai.",
    accent: false,
  },
  {
    icon: Sparkles,
    tag: "AI · Coming Soon",
    name: "Novareka Copy",
    tagline: "Copywriting yang menjual, otomatis.",
    desc: "Tulis konten promosi, caption media sosial, dan deskripsi produk dalam Bahasa Indonesia yang natural — ditenagai AI.",
    accent: false,
  },
];

export default function Products() {
  const container = useRef(null);

  useGSAP(
    () => {
      const timer = setTimeout(() => ScrollTrigger.refresh(), 50);

      gsap.fromTo(
        ".products-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: "#produk",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".product-card",
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".products-grid",
            start: "top 90%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      gsap.fromTo(
        ".products-cta",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          scrollTrigger: {
            trigger: ".products-cta",
            start: "top 92%",
            toggleActions: "play none none none",
            once: true,
          },
        }
      );

      return () => clearTimeout(timer);
    },
    { scope: container }
  );

  return (
    <section
      id="produk"
      ref={container}
      className="py-32 px-6 bg-off-white scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="products-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 md:gap-8 mb-16 md:mb-24 text-center md:text-left">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-warm mb-6 md:mb-8">
              Produk Kami
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight text-charcoal">
              Tools yang kami{" "}
              <span className="text-amber-warm italic">bangun</span>{" "}
              untuk bisnis Anda.
            </h3>
          </div>
          <p className="text-charcoal/50 text-sm leading-relaxed font-medium max-w-xs mx-auto md:mx-0 md:text-right">
            Lebih dari sekadar jasa — kami sedang membangun ekosistem produk
            digital untuk UMKM Indonesia.
          </p>
        </div>

        {/* Cards */}
        <div className="products-grid grid md:grid-cols-3 gap-px bg-charcoal/8 border border-charcoal/8 rounded-sm overflow-hidden mb-12">
          {products.map((p, i) => (
            <div
              key={i}
              className={`product-card flex flex-col p-12 group transition-all duration-300 ${
                p.accent
                  ? "bg-charcoal text-off-white hover:bg-charcoal/90"
                  : "bg-off-white text-charcoal hover:bg-charcoal/[0.02]"
              }`}
            >
              {/* Tag */}
              <span
                className={`inline-block text-[10px] font-black uppercase tracking-[0.3em] mb-10 ${
                  p.accent ? "text-amber-warm" : "text-charcoal/35"
                }`}
              >
                {p.tag}
              </span>

              {/* Icon */}
              <div
                className={`mb-8 transform group-hover:-rotate-12 transition-transform duration-500 ${
                  p.accent ? "text-amber-warm" : "text-charcoal/20"
                }`}
              >
                <p.icon size={48} strokeWidth={1} />
              </div>

              {/* Name */}
              <h4
                className={`text-2xl font-black tracking-tight mb-3 group-hover:text-amber-warm transition-colors ${
                  p.accent ? "text-off-white" : "text-charcoal"
                }`}
              >
                {p.name}
              </h4>

              {/* Tagline */}
              <p
                className={`text-sm font-bold mb-6 ${
                  p.accent ? "text-amber-warm" : "text-amber-warm"
                }`}
              >
                {p.tagline}
              </p>

              {/* Desc */}
              <p
                className={`text-sm leading-relaxed font-medium ${
                  p.accent ? "text-off-white/50" : "text-charcoal/50"
                }`}
              >
                {p.desc}
              </p>

              {/* Coming soon pill */}
              <div className="mt-auto pt-10">
                <span
                  className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] border px-4 py-2 rounded-full ${
                    p.accent
                      ? "border-off-white/15 text-off-white/30"
                      : "border-charcoal/12 text-charcoal/30"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-warm animate-pulse" />
                  Segera Hadir
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div className="products-cta flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border border-charcoal/10 rounded-sm px-10 py-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-charcoal/35 mb-1">
              Tertarik duluan?
            </p>
            <p className="text-charcoal font-black text-lg tracking-tight">
              Daftar waitlist dan dapatkan{" "}
              <span className="text-amber-warm italic">akses early bird</span>.
            </p>
          </div>
          <Link
            href={getWhatsAppUrl(
              "Halo Novareka! Saya tertarik dengan produk yang sedang kalian kembangkan. Bisa info lebih lanjut soal early access?"
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-charcoal text-off-white px-7 py-3.5 text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-amber-warm hover:text-charcoal transition-all duration-300"
          >
            Daftar Waitlist
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
