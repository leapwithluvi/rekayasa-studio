"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navLinks = [
  { name: "Beranda", href: "#home" },
  { name: "Layanan", href: "#services" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Testimoni", href: "#testimonials" },
  { name: "Harga", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const container = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(menuRef.current,
        { y: -12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }
      );
    }
  }, { dependencies: [isOpen], scope: container });

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const el = document.getElementById(href.slice(1));
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - 80, behavior: "smooth" });
      window.history.pushState({}, "", href);
    }
    setIsOpen(false);
  };

  return (
    <nav
      ref={container}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-3 px-4 md:px-10" : "py-5 px-4 md:px-10"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="group flex items-center gap-2.5 shrink-0"
        >
          <div className="relative w-8 h-8 overflow-hidden rounded-sm bg-charcoal flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
            <img
              src="/favicon.png"
              alt="Rekayasa Studio Logo"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <span className="font-serif font-black text-lg md:text-xl tracking-tighter uppercase text-charcoal">
            Rekayasa<span className="text-amber-warm italic">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-5 lg:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-xs font-bold uppercase tracking-[0.15em] text-charcoal/55 hover:text-charcoal transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://wa.me/6283152248722"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-off-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] hover:bg-amber-warm hover:text-charcoal transition-all duration-300 rounded-sm shadow-lg shadow-charcoal/10 whitespace-nowrap"
          >
            Mulai Proyek
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-charcoal p-1 -mr-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu — fullscreen overlay */}
      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden fixed inset-0 top-0 bg-off-white z-40 flex flex-col px-6 pt-24 pb-10 gap-0"
        >
          {/* Close button in overlay */}
          <button
            className="absolute top-5 right-4 text-charcoal p-1"
            onClick={() => setIsOpen(false)}
            aria-label="Tutup menu"
          >
            <X size={26} />
          </button>

          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-charcoal/30 mb-8">Menu</p>

          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-3xl font-serif font-black tracking-tighter text-charcoal py-3 border-b border-charcoal/5 hover:text-amber-warm transition-colors"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto">
            <Link
              href="https://wa.me/6283152248722"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-charcoal text-off-white py-5 flex items-center justify-center text-xs font-black uppercase tracking-[0.25em] rounded-sm hover:bg-amber-warm hover:text-charcoal transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Mulai Proyek →
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
