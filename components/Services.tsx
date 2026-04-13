"use client";

import React from "react";
import { motion } from "framer-motion";
import { Store, User, Rocket, ShoppingBag } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Profil UMKM",
    desc: "Website profesional untuk bisnis offline yang ingin melek digital. Fokus pada informasi produk & lokasi.",
  },
  {
    icon: User,
    title: "Personal Portfolio",
    desc: "Tunjukkan keahlian Anda ke dunia dengan portofolio yang interaktif dan memukau.",
  },
  {
    icon: Rocket,
    title: "High-Conv Landing Page",
    desc: "Halaman khusus untuk promosi produk atau jasa dengan copywriting yang menggerakkan pengunjung jadi pembeli.",
  },
  {
    icon: ShoppingBag,
    title: "Toko Online (Basic)",
    desc: "Sistem katalog produk dengan integrasi checkout WhatsApp untuk kemudahan transaksi.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-charcoal text-off-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-amber-warm mb-8">Spesialisasi Kami</h2>
          <h3 className="text-4xl md:text-6xl font-serif font-black tracking-tighter leading-tight max-w-3xl">
            Solusi Digital yang <br /><span className="text-amber-warm italic">Bekerja</span> untuk Anda.
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-off-white/10 border border-off-white/10 rounded-sm overflow-hidden">
          {services.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ backgroundColor: "rgba(200, 169, 110, 0.05)" }}
              className="bg-charcoal p-12 flex flex-col group transition-all"
            >
              <div className="mb-10 text-amber-warm transform group-hover:-rotate-12 transition-transform duration-500">
                <service.icon size={48} strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-black mb-6 tracking-tight group-hover:text-amber-warm transition-colors">{service.title}</h4>
              <p className="text-off-white/50 text-sm leading-relaxed font-medium">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
