"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: "Lumina Scent", category: "UMKM - E-Commerce", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800" },
  { title: "Arsenio Architect", category: "Personal Portfolio", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { title: "Zest Food", category: "Landing Page", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" },
  { title: "Terra App", category: "SaaS Product", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { title: "Kopi Senja", category: "UMKM - Cafe", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
  { title: "Oasis Resort", category: "Landing Page", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" },
];

export default function Portfolio() {
  const container = useRef(null);

  useGSAP(() => {
    // Memastikan koordinat benar
    ScrollTrigger.refresh();

    // Portfolio Header
    gsap.fromTo(".portfolio-header", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        }
      }
    );

    // Portfolio Items
    gsap.fromTo(".portfolio-item", 
      { opacity: 0, y: 50, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".portfolio-grid",
          start: "top bottom-=50",
          toggleActions: "play none none none",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="portfolio" ref={container} className="py-32 px-6 bg-off-white scroll-mt-14">
      <div className="max-w-7xl mx-auto">
        <div className="portfolio-header text-center mb-16 md:24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-6 md:8">Karya Kami</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance">
            Terpilih & <span className="text-amber-warm italic">Terukur.</span>
          </h3>
        </div>

        <div className="portfolio-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <div 
              key={i}
              className="portfolio-item group cursor-pointer"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-sm mb-4 md:6">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-2 block">
                  {project.category}
                </span>
                <h4 className="text-2xl font-black text-charcoal tracking-tight group-hover:text-amber-warm transition-colors">
                  {project.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
