"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, MessageSquare, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-off-white pt-32 pb-16 px-6 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-2">
            <Link href="/" className="group flex items-center gap-2 mb-10">
              <div className="w-10 h-10 bg-charcoal flex items-center justify-center rounded-sm">
                <span className="text-off-white font-serif font-black text-xl italic">R</span>
              </div>
              <span className="font-serif font-black text-2xl tracking-tighter uppercase text-charcoal">
                Rekayasa<span className="text-amber-warm lowercase">.</span>
              </span>
            </Link>
            <p className="text-charcoal/50 text-base leading-relaxed max-w-sm font-medium">
              Membangun infrastruktur digital yang elegan dan efisien untuk masa depan bisnis Indonesia. Kualitas agensi kelas dunia, harga freelance.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal mb-10">Navigasi</h4>
            <ul className="space-y-6">
              {["Layanan", "Proses", "Portofolio", "Harga", "FAQ"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal mb-10">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li>
                <Link href="mailto:hello@rekayasastudio.com" className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">
                  hello@rekayasastudio.com
                </Link>
              </li>
              <li>
                <Link href="https://wa.me/yournumber" className="text-xs font-bold uppercase tracking-widest text-charcoal/40 hover:text-charcoal transition-colors">
                  +62 812-3456-7890
                </Link>
              </li>
              <li>
                <div className="flex gap-6 pt-4">
                  <Link href="#" className="text-charcoal/30 hover:text-amber-warm transition-colors"><Globe size={20} /></Link>
                  <Link href="#" className="text-charcoal/30 hover:text-amber-warm transition-colors"><Mail size={20} /></Link>
                  <Link href="#" className="text-charcoal/30 hover:text-amber-warm transition-colors"><MessageSquare size={20} /></Link>
                  <Link href="https://wa.me/yournumber" target="_blank" rel="noopener noreferrer" className="text-charcoal/30 hover:text-amber-warm transition-colors"><MessageCircle size={20} /></Link>
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
