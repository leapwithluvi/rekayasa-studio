"use client";

import React, { useRef } from "react";
import { Quote, ExternalLink, ShieldCheck, Star } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    company: "PT. Bumi Kutai Perkasa",
    location: "Kutai Kartanegara, Kalimantan Timur",
    content:
      "Website tampil sangat profesional dan kredibel di mata rekanan proyek B2B. Membantu kami memvalidasi perizinan resmi dan mempercepat order batu split se-Kaltim.",
    url: "https://www.bumikutaiperkasa.co.id",
  },
];

export default function Testimonials() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".testi-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".testi-card",
        { opacity: 0, scale: 0.96, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          scrollTrigger: {
            trigger: ".testi-grid",
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <section
      id="testimonials"
      ref={container}
      className="py-16 md:py-24 px-6 bg-charcoal overflow-hidden scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto">
        <div className="testi-header text-center mb-12 md:mb-16">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-warm mb-4">
            Testimoni Klien
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-off-white text-balance">
            Kepuasan Nyata dari{" "}
            <br className="hidden sm:block" />
            <span className="text-amber-warm italic">Mitra Kami.</span>
          </h3>
        </div>

        <div className="testi-grid max-w-4xl mx-auto">
          {testimonials.map((testi, i) => (
            <div
              key={i}
              className="testi-card bg-white/[0.04] border border-white/10 hover:border-amber-warm/40 p-8 sm:p-12 md:p-14 rounded-sm relative group transition-all duration-300 shadow-2xl backdrop-blur-sm"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-amber-warm/5 rounded-full blur-3xl pointer-events-none" />

              {/* Top Meta: Stars, Verified Badge, Quote Icon */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1 text-amber-warm">
                    {[...Array(5)].map((_, idx) => (
                      <Star
                        key={idx}
                        size={16}
                        className="fill-amber-warm text-amber-warm"
                      />
                    ))}
                  </div>
                  <span className="text-white/20 text-xs">•</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-warm/15 text-amber-warm text-[10px] font-black uppercase tracking-wider border border-amber-warm/20">
                    <ShieldCheck size={12} />
                    Klien Terverifikasi
                  </span>
                </div>

                <div className="text-amber-warm/25 group-hover:text-amber-warm transition-colors duration-500">
                  <Quote size={36} className="md:w-10 md:h-10" />
                </div>
              </div>

              {/* Quote Content */}
              <p className="text-off-white text-lg sm:text-xl md:text-2xl font-serif leading-relaxed font-normal mb-10 relative z-10 text-balance">
                &ldquo;{testi.content}&rdquo;
              </p>

              {/* Bottom Identity & Link */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-amber-warm rounded-sm flex items-center justify-center font-serif font-black text-charcoal shadow-lg shadow-amber-warm/10 text-sm tracking-wider">
                    BKP
                  </div>
                  <div>
                    <h4 className="text-off-white font-black text-lg tracking-tight">
                      {testi.company}
                    </h4>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-off-white/70">
                      {testi.location}
                    </span>
                  </div>
                </div>

                {testi.url && (
                  <a
                    href={testi.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2.5 px-4 rounded-sm bg-white/5 hover:bg-amber-warm hover:text-charcoal text-off-white text-xs font-bold uppercase tracking-wider border border-white/10 hover:border-amber-warm transition-all duration-300 self-start sm:self-center"
                  >
                    <span>Kunjungi Website Asli</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
