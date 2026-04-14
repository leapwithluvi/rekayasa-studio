"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Konsultasi",
    desc: "Diskusi mendalam via WA atau Zoom untuk memahami visi, target, dan kebutuhan bisnis Anda.",
  },
  {
    num: "02",
    title: "Visual Design",
    desc: "Kami menyusun draft visual yang elegan sesuai dengan jati diri brand Anda.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Proses pengkodean menggunakan teknologi Next.js untuk performa maksimal.",
  },
  {
    num: "04",
    title: "Launch & Support",
    desc: "Website online secara resmi. Kami bantu maintenance dan pantau performanya.",
  },
];

export default function HowItWorks() {
  const container = useRef(null);

  useGSAP(() => {
    // Refresh koordinat lebih cepat
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    // Header - Snappy
    gsap.fromTo(".how-header", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%", // Langsung pemicu begitu terlihat
          toggleActions: "play none none none",
          once: true,
        }
      }
    );

    // Cards - Snappy Stagger
    gsap.fromTo(".step-card", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        stagger: 0.05, // Jeda sangat tipis agar terasa responsif
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 95%", 
          toggleActions: "play none none none",
          once: true,
        }
      }
    );

    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section id="how-it-works" ref={container} className="py-32 px-6 bg-off-white overflow-hidden scroll-mt-14">
      <div className="max-w-7xl mx-auto">
        <div className="how-header text-center mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-8 font-sans text-balance">Proses Kerja</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance px-4">
            Langkah Menuju <span className="italic">Kesuksesan.</span>
          </h3>
        </div>

        <div className="steps-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {steps.map((step, i) => (
            <div 
              key={i}
              className="step-card relative group p-8 md:p-10 border border-charcoal/5 rounded-sm hover:border-amber-warm transition-all duration-700 bg-white"
            >
              <div className="text-[6rem] sm:text-[8rem] md:text-[10rem] font-serif font-black text-charcoal/[0.03] absolute -top-4 -left-2 sm:-top-10 sm:-left-6 pointer-events-none group-hover:text-amber-warm/[0.05] transition-colors leading-none tracking-tighter">
                {step.num}
              </div>
              <div className="relative z-10">
                <h4 className="text-2xl font-black text-charcoal mb-6 tracking-tight">{step.title}</h4>
                <p className="text-charcoal/50 text-sm leading-loose font-medium">
                  {step.desc}
                </p>
              </div>
              <div className="mt-10 h-1 w-12 bg-charcoal group-hover:bg-amber-warm group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
