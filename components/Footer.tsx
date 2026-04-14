"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, MessageSquare, MessageCircle } from "lucide-react";

export default function Footer() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        window.history.pushState({}, "", href);
      }
    }
  };

  return (
    <footer className="bg-off-white pt-32 pb-16 px-6 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link 
              href="#home" 
              onClick={(e) => handleScroll(e, "#home")}
              className="group flex items-center gap-3 mb-10"
            >
              <div className="relative w-10 h-10 overflow-hidden rounded-sm bg-charcoal flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
                <img 
                  src="/favicon.png" 
                  alt="Rekayasa Studio Logo" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <span className="font-serif font-black text-2xl tracking-tighter uppercase text-charcoal">
                Rekayasa<span className="text-amber-warm italic">.</span>
              </span>
            </Link>
            <p className="text-charcoal/50 text-base leading-relaxed max-w-sm font-medium">
              Membangun infrastruktur digital yang elegan dan efisien untuk bisnis masa depan Indonesia. Kualitas agensi kelas dunia, pengerjaan secepat kilat.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal mb-10">Navigasi</h4>
            <ul className="space-y-6">
              {[
                { name: "Beranda", id: "#home" },
                { name: "Layanan", id: "#services" },
                { name: "Keunggulan", id: "#why-me" },
                { name: "Proses", id: "#how-it-works" },
                { name: "Portofolio", id: "#portfolio" },
                { name: "Harga", id: "#pricing" },
                { name: "FAQ", id: "#faq" },
                { name: "Kontak", id: "#contact" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.id}
                    onClick={(e) => handleScroll(e, item.id)}
                    className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal mb-10">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li>
                <Link href="mailto:itsluvi13@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">
                  itsluvi13@gmail.com
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/6283152248722" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">
                  +62 831-5224-8722
                </Link>
              </li>
              <li>
                <div className="flex gap-6 pt-4">
                  <Link href="https://rekayasastudio.my.id" target="_blank" rel="noopener noreferrer" className="text-charcoal/30 hover:text-amber-warm transition-colors"><Globe size={20} /></Link>
                  <Link href="itsluvi13@gmail.com" target="_blank" rel="noopener noreferrer" className="text-charcoal/30 hover:text-amber-warm transition-colors"><Mail size={20} /></Link>
                  <Link href="https://wa.me/6283152248722" target="_blank" rel="noopener noreferrer" className="text-charcoal/30 hover:text-amber-warm transition-colors"><MessageSquare size={20} /></Link>
                  <Link href="https://wa.me/6283152248722" target="_blank" rel="noopener noreferrer" className="text-charcoal/30 hover:text-amber-warm transition-colors"><MessageCircle size={20} /></Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-16 border-t border-charcoal/5 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/30">
            © 2026 REKAYASA STUDIO. All Rights Reserved.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/30 hover:text-charcoal">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/30 hover:text-charcoal">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
