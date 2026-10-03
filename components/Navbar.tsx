"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { getWhatsAppUrl } from "@/lib/config";
import NovarekaLogo from "@/components/NovarekaLogo";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Layanan", href: "#services" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Keunggulan", href: "#why-me" },
  { name: "Harga", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.pageYOffset - 80,
        behavior: "smooth",
      });
      window.history.pushState({}, "", href);
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-off-white/95 backdrop-blur-xl border-b border-charcoal/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.03)] py-3 px-5 sm:px-8 md:px-12"
          : "bg-off-white/85 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b border-charcoal/[0.06] md:border-transparent py-3.5 md:py-5 px-5 sm:px-8 md:px-12",
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="group flex items-center gap-3 shrink-0"
          aria-label="Novareka Home"
        >
          <NovarekaLogo size={32} />
          <span className="font-serif font-black text-xl tracking-tighter uppercase text-charcoal">
            Novareka<span className="text-amber-warm italic">.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.16em] text-charcoal/60 hover:text-charcoal hover:bg-charcoal/[0.04] transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Enterprise CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={getWhatsAppUrl(
              "Halo Novareka, saya ingin konsultasi proyek pembuatan website baru. Bisa info alurnya?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 bg-charcoal text-off-white px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] rounded-full hover:bg-amber-warm hover:text-charcoal transition-all duration-300 shadow-md shadow-charcoal/10 active:scale-95 whitespace-nowrap"
          >
            <span>Mulai Proyek</span>
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Hamburger Toggle Only (No extra button) */}
        <button
          className="md:hidden text-charcoal p-1.5 -mr-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay — Spacious, Fullscreen, Airy Luxury Layout */}
      <div
        className={cn(
          "md:hidden fixed inset-0 w-full h-[100dvh] bg-off-white z-50 flex flex-col justify-between px-8 pt-8 pb-10 overflow-y-auto transition-all duration-300 ease-out",
          isOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4",
        )}
      >
        {/* Top Bar inside Drawer: Brand Logo + Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-charcoal/5">
          <div className="flex items-center gap-3">
            <NovarekaLogo size={32} />
            <span className="font-serif font-black text-xl tracking-tighter uppercase text-charcoal">
              Novareka<span className="text-amber-warm italic">.</span>
            </span>
          </div>

          <button
            className="text-charcoal p-2 rounded-full hover:bg-charcoal/5 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* Spacious Nav Links */}
        <div className="flex flex-col my-auto py-8">
          <p className="text-[10px] font-black uppercase tracking-[0.35em] text-charcoal/30 mb-4">
            Navigasi
          </p>
          <div className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-3xl sm:text-4xl font-serif font-black tracking-tighter text-charcoal py-3.5 border-b border-charcoal/5 hover:text-amber-warm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Bottom CTA Button */}
        <div className="pt-4">
          <Link
            href={getWhatsAppUrl(
              "Halo Novareka, saya ingin konsultasi proyek pembuatan website baru. Bisa info alurnya?",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-charcoal text-off-white py-4.5 px-6 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-[0.2em] rounded-sm hover:bg-amber-warm hover:text-charcoal transition-all shadow-xl active:scale-95"
            onClick={() => setIsOpen(false)}
          >
            <MessageCircle size={18} />
            <span>Mulai Proyek WhatsApp</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
