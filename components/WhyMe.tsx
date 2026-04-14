"use client";

import React, { useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    title: "Teknologi Terbaru",
    desc: "Kami menggunakan Next.js 15 & Tailwind CSS untuk memastikan website Anda berada di standar teknologi masa depan.",
  },
  {
    title: "Optimasi SEO & Kecepatan",
    desc: "Bukan hanya cantik, website kami dirancang untuk kencang (99+ skor Lighthouse) dan mudah ditemukan Google.",
  },
  {
    title: "Mobile First Design",
    desc: "Lebih dari 80% pengguna internet menggunakan HP. Kami memastikan tampilan mobile Anda terlihat sempurna.",
  },
  {
    title: "Milik Anda Sepenuhnya",
    desc: "Tanpa biaya berlangganan platform yang mengikat. Kode dan aset website adalah aset berharga milik Anda.",
  },
];

export default function WhyMe() {
  const container = useRef(null);

  useGSAP(() => {
    // Refresh koordinat lebih cepat
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    // Left side animation
    gsap.fromTo(".whyme-text > *", 
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".whyme-container",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        }
      }
    );

    // Right side (cards) animation
    gsap.fromTo(".advantage-card", 
      { opacity: 0, x: 20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".whyme-grid",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        }
      }
    );

    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section id="why-me" ref={container} className="whyme-container py-24 md:py-32 px-6 bg-off-white overflow-hidden scroll-mt-14">
      <div className="whyme-grid max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-20 items-center border-t border-charcoal/5 pt-24 md:pt-32">
        <div className="whyme-text">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-8 font-sans text-balance">Keunggulan</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-charcoal leading-tight mb-8 text-balance">
            Kualitas <br className="hidden sm:block" /><span className="text-amber-warm italic">Enterprise</span> dengan Harga Kreatif.
          </h3>
          <p className="text-base md:text-lg text-charcoal/60 leading-relaxed font-medium mb-10 text-balance">
            Kami memangkas birokrasi agensi besar untuk memberikan Anda hasil yang sama mahalnya secara visual, namun tetap bersahabat secara biaya.
          </p>
          <div className="flex gap-8 md:gap-10">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-black text-amber-warm">99+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mt-2">Performance</div>
            </div>
            <div className="text-center border-l border-charcoal/5 pl-8 md:pl-10">
              <div className="text-3xl md:text-4xl font-serif font-black text-amber-warm">100%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mt-2">Responsivity</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          {advantages.map((adv, i) => (
            <div 
              key={i}
              className="advantage-card group p-6 md:p-10 bg-white border border-charcoal/5 rounded-sm hover:shadow-2xl hover:shadow-charcoal/5 transition-all duration-500"
            >
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="mt-1 text-amber-warm shrink-0">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-black text-charcoal mb-2 md:mb-4 tracking-tight">{adv.title}</h4>
                  <p className="text-charcoal/50 text-sm leading-relaxed font-medium">
                    {adv.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
