"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Layanan", href: "#services" },
  { name: "Proses", href: "#how-it-works" },
  { name: "Portofolio", href: "#portfolio" },
  { name: "Harga", href: "#pricing" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass py-4 px-6 md:px-12" : "py-6 px-6 md:px-12"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 bg-charcoal flex items-center justify-center rounded-sm transition-transform group-hover:scale-105">
            <span className="text-off-white font-serif font-black text-xl italic">R</span>
          </div>
          <span className="font-serif font-black text-xl tracking-tighter uppercase">
            Rekayasa<span className="text-amber-warm lowercase">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-charcoal/60 hover:text-charcoal transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="https://wa.me/6283152248722"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-off-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-amber-warm hover:text-charcoal transition-all duration-300 rounded-sm shadow-xl shadow-charcoal/5"
          >
            Mulai Proyek
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-charcoal"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-off-white border-b border-charcoal/5 p-8 flex flex-col gap-6 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold uppercase tracking-[0.2em] text-charcoal/60"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="https://wa.me/yournumber"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal text-off-white py-4 text-center text-xs font-bold uppercase tracking-[0.2em] rounded-sm"
            >
              Hubungi Kami
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
