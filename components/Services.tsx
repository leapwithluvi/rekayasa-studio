"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Building2, Store, User, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Building2,
    title: "Company Profile PT",
    desc: "Website resmi berstandar korporat untuk membangun kredibilitas, memvalidasi legalitas B2B, dan kesiapan verifikasi tender.",
  },
  {
    icon: Store,
    title: "Katalog UMKM & Menu",
    desc: "Website interaktif untuk toko, kuliner, dan cafe. Tampil di Google, navigasi multi-cabang, dan tombol order otomatis via WhatsApp.",
  },
  {
    icon: User,
    title: "Portofolio Profesional",
    desc: "Showcase karya visual elegan untuk fotografer, arsitek, desainer, dan konsultan dengan galeri resolusi tinggi & studi kasus.",
  },
  {
    icon: Rocket,
    title: "High-Conv Landing Page",
    desc: "Halaman penawaran khusus berkecepatan tinggi dengan struktur copywriting terarah yang mengonversi pengunjung menjadi klien.",
  },
];

export default function Services() {
  const container = useRef(null);

  useGSAP(() => {
    // Memastikan koordinat ScrollTrigger diperbarui setelah render awal
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    // Animasi Header
    gsap.fromTo(".services-header", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5,
        scrollTrigger: {
          trigger: "#services",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        }
      }
    );

    // Animasi Kartu (Staggered)
    gsap.fromTo(".service-card", 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 95%",
          toggleActions: "play none none none",
          once: true,
        }
      }
    );

    return () => clearTimeout(timer);
  }, { scope: container });

  return (
    <section id="services" ref={container} className="py-16 md:py-24 px-6 bg-charcoal text-off-white scroll-mt-14">
      <div className="max-w-7xl mx-auto">
        <div className="services-header mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-warm mb-6 md:mb-8">Spesialisasi Kami</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight max-w-3xl mx-auto md:mx-0">
            Solusi Digital yang <br className="hidden sm:inline" /><span className="text-amber-warm italic">Bekerja</span> untuk Anda.
          </h3>
        </div>

        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-off-white/10 border border-off-white/10 rounded-sm overflow-hidden">
          {services.map((service, i) => (
            <div 
              key={i}
              className="service-card bg-charcoal p-12 flex flex-col group transition-all hover:bg-amber-warm/5"
            >
              <div className="mb-10 text-amber-warm transform group-hover:-rotate-12 transition-transform duration-500">
                <service.icon size={48} strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-black mb-6 tracking-tight group-hover:text-amber-warm transition-colors">{service.title}</h4>
              <p className="text-off-white/50 text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
