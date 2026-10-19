"use client";

import React, { useState, useRef } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Berapa lama estimasi pengerjaan website?",
    a: "Bergantung pada paket: Paket Kilat / Katalog Simpel (2-4 hari), Paket Pro / Katalog Plus (4-7 hari), hingga Paket PT & Bisnis Online (1-3 minggu) terhitung setelah materi dan DP diterima.",
  },
  {
    q: "Apakah bisa request desain atau konsep sendiri?",
    a: "Tentu saja. Kami sangat terbuka jika Anda memiliki referensi desain, warna brand, atau struktur sendiri. Kami akan menyesuaikan arsitektur web dengan kebutuhan dan identitas bisnis Anda.",
  },
  {
    q: "Bagaimana alur pengerjaan dan komunikasinya?",
    a: "Seluruh komunikasi dan serah terima materi dilakukan secara fleksibel melalui WhatsApp, Google Meet, atau email. Anda akan menerima link preview website secara berkala untuk memantau progres sebelum diterbitkan secara resmi.",
  },
  {
    q: "Apakah ada biaya tersembunyi setelah website selesai?",
    a: "Tidak ada biaya tersembunyi. Biaya sesuai kesepakatan paket di awal. Untuk paket tanpa panel admin, hosting statis & SSL sudah gratis selamanya. Domain .my.id gratis untuk 1 tahun pertama.",
  },
  {
    q: "Apakah website bisa diedit sendiri setelah jadi?",
    a: "Untuk paket yang menyertakan panel admin (Bisnis Online UMKM & PT Premium), Anda bisa mengelola produk, harga, dan artikel sendiri secara mandiri lengkap dengan panduan dan sesi pelatihan.",
  },
  {
    q: "Bagaimana cara memulai pemesanan?",
    a: "Cukup klik tombol 'Konsultasi Sekarang' atau chat langsung ke WhatsApp kami. Kami akan merespons cepat untuk mendiskusikan kebutuhan website Anda.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const container = useRef(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // Memastikan posisi dihitung ulang setelah DOM siap
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 50);

    // Header reveal
    gsap.fromTo(".faq-header", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
          toggleActions: "play none none none",
        }
      }
    );

    // List items stagger
    gsap.fromTo(".faq-item", 
      { opacity: 0, y: 20 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        stagger: 0.05,
        scrollTrigger: {
          trigger: ".faq-list",
          start: "top 95%",
          toggleActions: "play none none none",
        }
      }
    );

    return () => clearTimeout(timer);
  }, { scope: container });

  useGSAP(() => {
    // Accordion Logic
    faqs.forEach((_, i) => {
      const el = contentRefs.current[i];
      if (!el) return;

      if (openIndex === i) {
        gsap.to(el, { height: "auto", opacity: 1, duration: 0.4, ease: "power2.out" });
      } else {
        gsap.to(el, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      }
    });
  }, { dependencies: [openIndex] });

  return (
    <section id="faq" ref={container} className="py-16 md:py-24 px-6 bg-off-white overflow-hidden scroll-mt-14">
      <div className="max-w-4xl mx-auto">
        <div className="faq-header text-center mb-12 md:mb-16 border-t border-charcoal/5 pt-8 md:pt-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-6 md:8 text-balance">Pusat Informasi</h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance">
            Pertanyaan <span className="text-amber-warm italic">Umum.</span>
          </h3>
        </div>

        <div className="faq-list space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "faq-item border-b border-charcoal/5 transition-all duration-500",
                openIndex === i ? "pb-6 md:pb-8" : "pb-0"
              )}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 md:py-8 flex items-center justify-between text-left group gap-4"
              >
                <span className={cn(
                  "text-lg md:text-2xl font-black tracking-tighter transition-all duration-300 text-balance",
                  openIndex === i ? "text-amber-warm" : "text-charcoal group-hover:text-amber-warm"
                )}>
                  {faq.q}
                </span>
                <div className={cn(
                  "shrink-0 w-8 h-8 rounded-full border border-charcoal/10 flex items-center justify-center transition-all duration-500",
                  openIndex === i ? "bg-charcoal border-charcoal text-off-white rotate-180" : "group-hover:border-charcoal/30"
                )}>
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div
                ref={(el) => { contentRefs.current[i] = el; }}
                className="overflow-hidden"
                style={{ height: i === 0 ? "auto" : 0, opacity: i === 0 ? 1 : 0 }}
              >
                <p className="text-charcoal/60 text-base md:text-lg leading-relaxed font-medium pb-8 max-w-3xl">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
