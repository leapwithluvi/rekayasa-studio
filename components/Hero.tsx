"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
    })
    .from(".hero-description", {
      y: 30,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    .from(".hero-cta", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    }, "-=0.6")
    .from(".hero-social", {
      opacity: 0,
      duration: 1.5,
    }, "-=0.4");
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-24 md:pb-24 lg:pb-24 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[1] tracking-tighter text-charcoal mb-10 text-balance">
          Jasa Website <span className="italic text-amber-warm underline underline-offset-8 decoration-1 decoration-amber-warm/30">Premium</span> <br className="hidden sm:block" /> untuk Elevasi Bisnis.
        </h1>

        <p className="hero-description max-w-2xl mx-auto text-lg md:text-xl text-charcoal/60 leading-relaxed font-medium mb-12 text-balance">
          Kami membantu UMKM dan profesional membangun kehadiran digital kelas dunia melalui website yang elegan, kencang, dan siap mengonversi pengunjung menjadi klien.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="https://wa.me/6283152248722"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-charcoal text-off-white px-12 py-5 text-sm font-black uppercase tracking-[0.2em] rounded-sm hover:bg-amber-warm hover:text-charcoal transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
          >
            Mulai Diskusi
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
          </Link>
          <Link 
            href="#portfolio"
            className="w-full sm:w-auto bg-transparent border-2 border-charcoal text-charcoal px-12 py-5 text-sm font-black uppercase tracking-[0.2em] rounded-sm hover:bg-charcoal hover:text-off-white transition-all duration-500"
          >
            Lihat Portofolio
          </Link>
        </div>

        {/* Social Proof Text */}
        <div className="hero-social mt-20 pt-16 border-t border-charcoal/5 flex flex-col items-center gap-6">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">Teknologi yang Kami Gunakan</span>
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-x-6 md:gap-x-10 lg:gap-x-12 gap-y-4 opacity-30 grayscale contrast-125 items-center">
            <span className="font-serif font-black text-lg md:text-xl lg:text-2xl tracking-tighter">NEXT.JS</span>
            <div className="w-1 h-1 bg-charcoal rounded-full hidden md:block" />
            <span className="font-serif font-black text-lg md:text-xl lg:text-2xl tracking-tighter">EXPRESS</span>
            <div className="w-1 h-1 bg-charcoal rounded-full hidden md:block" />
            <span className="font-serif font-black text-lg md:text-xl lg:text-2xl tracking-tighter">SUPABASE</span>
            <div className="w-1 h-1 bg-charcoal rounded-full hidden md:block" />
            <span className="font-serif font-black text-lg md:text-xl lg:text-2xl tracking-tighter">VERCEL</span>
          </div>
        </div>
      </div>
    </section>
  );
}
