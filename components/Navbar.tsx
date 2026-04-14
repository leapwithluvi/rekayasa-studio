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
  { name: "Keunggulan", href: "#why-me" },
  { name: "Proses", href: "#how-it-works" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Harga", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        display: "flex"
      });
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        display: "none"
      });
    }
  }, { dependencies: [isOpen], scope: container });

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 80; // Sesuaikan dengan tinggi navbar
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });

        // Update URL tanpa trigger scroll default browser
        window.history.pushState({}, "", href);
        setIsOpen(false);
      }
    }
  };

  return (
    <nav 
      ref={container}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-4 px-6 md:px-12" : "py-6 px-6 md:px-12"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="#home" 
          onClick={(e) => handleScroll(e, "#home")}
          className="group flex items-center gap-3"
        >
          <div className="relative w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-sm bg-charcoal flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
            <img 
              src="/favicon.png" 
              alt="Rekayasa Studio Logo" 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </div>
          <span className="font-serif font-black text-xl md:text-2xl tracking-tighter uppercase text-charcoal">
            Rekayasa<span className="text-amber-warm italic">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs font-bold uppercase tracking-[0.15em] text-charcoal/60 hover:text-charcoal transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://wa.me/6283152248722"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-off-white px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-amber-warm hover:text-charcoal transition-all duration-300 rounded-sm shadow-xl shadow-charcoal/5"
          >
            Mulai Proyek
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="xl:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="absolute top-full left-0 right-0 bg-off-white border-b border-charcoal/5 p-8 flex-col gap-6 xl:hidden shadow-2xl overflow-hidden"
        style={{ display: "none", height: 0, opacity: 0 }}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            onClick={(e) => handleScroll(e, link.href)}
            className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal/60"
          >
            {link.name}
          </Link>
        ))}
        <Link 
          href="https://wa.me/6283152248722"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-charcoal text-off-white py-4 text-center text-xs font-bold uppercase tracking-[0.2em] rounded-sm"
        >
          Hubungi Kami
        </Link>
      </div>
    </nav>
  );
}
