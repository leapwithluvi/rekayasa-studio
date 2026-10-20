import React from "react";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import AltarekaLogo from "@/components/AltarekaLogo";
import { getWhatsAppUrl } from "@/lib/config";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-off-white text-charcoal flex flex-col items-center justify-between px-6 py-12 relative overflow-hidden select-none">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      {/* Top Brand Anchor */}
      <header className="relative z-10 w-full max-w-5xl flex items-center justify-between border-b border-charcoal/10 pb-6">
        <Link href="/" className="inline-flex items-center gap-3 group">
          <AltarekaLogo size={32} />
          <span className="font-serif font-black text-xl tracking-tighter uppercase text-charcoal">
            Altareka<span className="text-amber-warm italic">.</span>
          </span>
        </Link>
        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/70">
          Galat 404
        </span>
      </header>

      {/* Central Editorial Content */}
      <section className="relative z-10 max-w-2xl text-center my-auto py-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal/[0.05] border border-charcoal/10 text-charcoal/80 text-[11px] font-bold uppercase tracking-[0.25em] mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-warm" />
          Halaman Tidak Ditemukan
        </div>

        <h1 className="font-serif font-black text-7xl sm:text-8xl md:text-9xl text-charcoal tracking-tight leading-none mb-6">
          4<span className="text-amber-warm italic">0</span>4
        </h1>

        <p className="text-base sm:text-lg text-charcoal/80 max-w-md mx-auto leading-relaxed mb-10 font-medium">
          Alamat yang Anda tuju mungkin telah dipindahkan, berganti tautan, atau belum diterbitkan.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-charcoal text-off-white text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-amber-warm hover:text-charcoal transition-all shadow-xl"
          >
            <ArrowLeft size={16} />
            Kembali ke Beranda
          </Link>

          <Link
            href={getWhatsAppUrl("Halo Altareka, saya mengalami kendala saat mengakses halaman di website.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-transparent border border-charcoal/20 text-charcoal hover:bg-charcoal/5 text-xs font-black uppercase tracking-[0.2em] rounded-sm transition-all"
          >
            <MessageCircle size={16} className="text-amber-warm" />
            Bantuan WhatsApp
          </Link>
        </div>
      </section>

      {/* Footer Info */}
      <footer className="relative z-10 w-full max-w-5xl text-center pt-6 border-t border-charcoal/10">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-charcoal/70">
          © 2026 ALTAREKA. Seluruh Hak Cipta Dilindungi.
        </p>
      </footer>
    </main>
  );
}
