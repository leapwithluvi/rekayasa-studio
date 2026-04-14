"use client";

import React, { useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const container = useRef(null);
  const cardRef = useRef(null);

  useGSAP(() => {
    gsap.from(cardRef.current, {
      opacity: 0,
      scale: 0.95,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

    gsap.from(".cta-content > *", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.2,
      delay: 0.3,
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
      }
    });
  }, { scope: container });

  return (
    <section id="contact" ref={container} className="py-32 px-6 scroll-mt-14">
      <div 
        ref={cardRef}
        className="max-w-7xl mx-auto bg-charcoal rounded-sm p-8 md:p-32 text-center relative overflow-hidden"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-amber-warm/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-amber-warm/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="cta-content relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.5em] text-amber-warm mb-6 md:10 text-balance">Mulai Bersama</h2>
          <h3 className="text-3xl sm:text-5xl md:text-8xl font-serif font-black tracking-tighter text-off-white leading-tight md:leading-none mb-10 md:16 italic text-balance px-4">
            Wujudkan Visi <br className="hidden sm:block" /> <span className="text-amber-warm not-italic">Digital</span> Anda.
          </h3>
          <p className="text-lg md:text-2xl text-off-white/50 font-medium max-w-2xl mx-auto mb-10 md:16 leading-relaxed text-balance">
            Hanya butuh satu klik untuk mengubah bisnis Anda menjadi standar global. Konsultasi pertama gratis.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <Link 
              href="https://wa.me/6283152248722"
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
      </div>
    </section>
  );
}
