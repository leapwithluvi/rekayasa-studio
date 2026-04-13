"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Lumina Scent", category: "UMKM - E-Commerce", img: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800" },
  { title: "Arsenio Architect", category: "Personal Portfolio", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" },
  { title: "Zest Food", category: "Landing Page", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800" },
  { title: "Terra App", category: "SaaS Product", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" },
  { title: "Kopi Senja", category: "UMKM - Cafe", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
  { title: "Oasis Resort", category: "Landing Page", img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6 bg-off-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 md:24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-6 md:8">Karya Kami</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance">
            Terpilih & <span className="text-amber-warm italic">Terukur.</span>
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
