"use client";

import React, { useRef } from "react";
import { Quote } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Hendra Wijaya",
    role: "Owner Lumina Scent",
    content: "Website yang dibuat benar-benar mengangkat brand kami. Klien banyak yang memuji betapa kencang dan mewahnya tampilan web kami sekarang.",
  },
  {
    name: "Ratna Sari",
    role: "Marketing Manager Oasis",
    content: "Landing page dari Rekayasa Studio punya konversi yang sangat bagus. Proses kerjanya profesional dan sangat memperhatikan detail.",
  },
  {
    name: "Budi Pratama",
    role: "Architect Arsenio",
    content: "Minimalis, elegan, dan fungsional. Persis seperti yang saya harapkan untuk portofolio arsitektur saya. Skill teknis mereka luar biasa.",
  },
];

export default function Testimonials() {
  const container = useRef(null);

  useGSAP(() => {
    ScrollTrigger.refresh();

    gsap.fromTo(".testi-header", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        }
      }
    );

    gsap.fromTo(".testi-card", 
      { opacity: 0, scale: 0.9, y: 50 },
      { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: ".testi-grid",
          start: "top bottom-=50",
          toggleActions: "play none none none",
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 px-6 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="testi-header text-center mb-16 md:24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-warm/60 mb-6 md:8">Testimoni</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-off-white text-balance">
            Mereka yang Berhasil <br className="hidden sm:block" /><span className="text-amber-warm italic">Tampil Beda.</span>
          </h3>
        </div>

        <div className="testi-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testi, i) => (
            <div 
              key={i}
              className="testi-card bg-white/5 border border-white/10 p-8 md:p-12 rounded-sm relative group hover:border-amber-warm transition-all"
            >
              <div className="text-amber-warm/20 absolute top-6 right-6 md:top-10 md:right-10 group-hover:text-amber-warm transition-colors duration-500">
                <Quote size={32} className="md:w-10 md:h-10" />
              </div>
              <p className="text-off-white/70 text-lg leading-relaxed font-medium mb-12 relative z-10">
                "{testi.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-warm rounded-full flex items-center justify-center font-serif font-black text-charcoal shadow-xl shadow-amber-warm/10">
                  {testi.name[0]}
                </div>
                <div>
                  <h4 className="text-off-white font-black tracking-tight">{testi.name}</h4>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-off-white/40">{testi.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
