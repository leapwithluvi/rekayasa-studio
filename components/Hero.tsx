"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// Simple inline SVG icons for each tech
const techs = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6H36.7V26.3h13.4l67.7 95.2C109.2 113.8 87.7 128 64 128 28.7 128 0 99.3 0 64S28.7 0 64 0zm44.2 107.2L98.2 93.5V26.3h13.4v80.9h-3.4z" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M64 35.7C48.3 35.7 34.4 38.9 24 44c-12.2 6-19 14.3-19 20.9 0 7 7.5 15.8 20.6 21.9 10.5 5 23.8 7.8 38.4 7.8 14.9 0 28.6-2.9 39.3-8.2 13-6.4 20.1-15.2 20.1-21.5 0-6.2-6.6-14.7-18.9-20.9C94 38.8 79.6 35.7 64 35.7zm0 4.2c14.8 0 28.5 3 38.3 8.3 11.3 6 16.8 13.2 16.8 16.6 0 3.6-5.9 11-17.8 17.2-10.2 5.3-23.5 8.1-37.3 8.1-14 0-27.1-2.7-37.1-7.7C15.4 76.2 9 68.7 9 64.9c0-3.6 5.9-11.1 17.5-17.2 10-5.4 23.3-7.8 37.5-7.8zM40.2 47.5c-7.9 13.8-7.9 36.8 0 50.8 3 5.2 6.8 8.5 10.9 8.5 5.5 0 10.9-4.5 15.1-12.6 3.7-7.2 5.8-16.7 5.8-26.3 0-9.8-2.1-19.3-5.9-26.5C61.9 33 56.4 28.4 50.9 28.4 46.9 28.4 43.2 31.9 40.2 47.5zM64 33.6c5.4 0 10.6 5 14.2 13.9 3.2 7.8 5 17.9 5 28.3 0 10.2-1.7 19.9-4.8 27.4-3.5 8.4-8.5 13-14.4 13-5.6 0-10.8-4.7-14.4-13.1-3.2-7.5-4.9-17.2-4.9-27.3 0-10.3 1.8-20.3 5-28C53.4 38.6 58.5 33.6 64 33.6z" />
        <path d="M64 55.3c-4.8 0-8.7 3.9-8.7 8.7s3.9 8.7 8.7 8.7 8.7-3.9 8.7-8.7-3.9-8.7-8.7-8.7z" />
      </svg>
    ),
  },
  {
    name: "Hono",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M64 8L8 40v48l56 32 56-32V40L64 8zm0 8.3l48 27.5v41.4L64 112.2 16 85.2V43.8L64 16.3z" />
        <path d="M64 32L32 50v28l32 18 32-18V50L64 32zm0 8l24 13.7v20.6L64 88 40 74.3V53.7L64 40z" />
      </svg>
    ),
  },
  {
    name: "Express",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M126.7 114.6c-7.7 3.9-14.8.4-19.6-6L77.8 66.8v-.8l28.2-35.9c4.8-5.9 12.1-9.6 19.6-5.8l-32.4 41.6 33.5 48.7zM1.3 66.2L0 42.9h1.3c5.3 0 9.8.5 14 1.3 0 0 25.2 5 25.2 22.8C40.5 83.5 20 89.9 4 89.9H0l1.3-23.7zm10.2-1.5v10.8c8.3 0 17.7-1.3 17.7-10.2 0-8.7-9.7-10.9-17.7-10.9v10.3zm18.8-32.7h.8c6.6 0 14.9 2.4 14.9 10.5 0 8.5-8.3 11.3-15.7 11.3h-.7V32.6l.7.1v-.7zm28.5 31.5c0-18.5-14.8-32.8-33.3-32.8H1.3V97.1h24.2c18.7 0 33.3-14.5 33.3-33.6z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.652C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.351-4.746-12.207-8.653-6.27-6.371-13.531-13.745-29.394-13.745zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.652 6.274 6.372 13.536 13.746 29.395 13.746 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.351-4.745-12.207-8.652C55.128 71.374 47.868 64 32.004 64z" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M93.8 34.3c-3.5-6.4-10-10.7-17.5-11.7-3-.4-6.1-.2-9.1.5-8.5 2-15.3 8.5-18.9 17.2-3.6 8.8-3.3 19 .9 27.5 2.6 5.3 6.5 9.8 11.4 12.9l-1.3 17.1c-.2 2.5 1.6 4.7 4.1 4.9.1 0 .3 0 .4 0 2.3 0 4.3-1.8 4.5-4.2l1.1-14.4c1.5.3 3 .5 4.5.5 1.8 0 3.6-.2 5.4-.6l1.1 14.5c.2 2.4 2.2 4.2 4.5 4.2.1 0 .3 0 .4 0 2.5-.2 4.3-2.4 4.1-4.9l-1.3-17.1c7.4-4.5 12.5-12 13.7-20.7.9-6.6-.5-13.3-3.5-19.2zM64.7 79.4c-11.8 0-21.4-9.6-21.4-21.4S52.9 36.6 64.7 36.6s21.4 9.6 21.4 21.4-9.6 21.4-21.4 21.4z" />
      </svg>
    ),
  },
  {
    name: "MySQL",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M2.001 75.184V52.79h4.42v8.72l6.96-8.72H18.8l-7.463 9.303 8.13 13.091h-5.192l-5.845-9.84-1.999 2.468v7.372zm28.167.404c-1.788 0-3.245-.307-4.37-.921-1.128-.614-1.97-1.48-2.529-2.594-.56-1.114-.84-2.423-.84-3.925V52.791h4.42v14.976c0 1.128.24 1.982.72 2.562.48.58 1.14.87 1.978.87.573 0 1.1-.107 1.583-.32.48-.213.9-.533 1.258-.96l.02.02c.358-.414.64-.921.844-1.52.2-.6.3-1.262.3-1.984V52.791h4.42v22.393h-4.22l-.12-2.688c-.6.907-1.342 1.627-2.227 2.161-.882.534-1.972.8-3.237.93zM48.7 75.184V52.791h4.42l.12 2.464c.507-.84 1.167-1.52 1.979-2.04.812-.52 1.738-.78 2.78-.78.68 0 1.315.12 1.903.36.588.24 1.06.574 1.42 1.001v-1.005h4.42v22.393h-4.42V60.3c0-.867-.2-1.554-.6-2.062-.4-.507-.947-.76-1.64-.76-.493 0-.96.12-1.4.36-.44.24-.82.574-1.14 1.001-.32.428-.574.934-.76 1.52-.187.587-.28 1.234-.28 1.943v12.882H48.7zm30.3-5.768c.426.547.973.974 1.639 1.28.666.307 1.386.46 2.16.46.706 0 1.296-.12 1.769-.36.473-.24.84-.56 1.099-.96.26-.4.4-.854.42-1.36v-.88c-.654.294-1.377.54-2.17.741-.793.2-1.563.3-2.31.3-.96 0-1.8-.173-2.52-.52-.72-.347-1.287-.853-1.7-1.52-.413-.667-.62-1.474-.62-2.421 0-1.04.24-1.934.72-2.681.48-.747 1.14-1.32 1.98-1.72.84-.4 1.82-.601 2.94-.601 1.04 0 1.96.174 2.76.521.8.347 1.44.84 1.92 1.48l.12-1.601h4.02v12.482c0 1.24-.307 2.3-.92 3.181-.614.881-1.48 1.554-2.6 2.021-1.12.467-2.434.7-3.94.7-1.947 0-3.54-.4-4.78-1.2-1.24-.8-2.02-1.867-2.34-3.201l3.36-.96c.2.6.547 1.074 1.04 1.42l-.047-.04zM85.4 63.89c0 .667.2 1.194.6 1.581.4.387.947.58 1.64.58.8 0 1.52-.16 2.16-.48v-2.8c-.507-.28-1.014-.467-1.52-.56-.507-.093-1.007-.14-1.5-.14-.587 0-1.06.147-1.42.44-.36.294-.56.747-.56 1.361v.018zm17.56 11.294V52.791h4.42l.12 2.464c.507-.84 1.167-1.52 1.98-2.04.812-.52 1.738-.78 2.78-.78.68 0 1.315.12 1.902.36.587.24 1.062.574 1.42 1.001v-1.005h4.42v22.393h-4.42V60.3c0-.867-.2-1.554-.6-2.062-.4-.507-.948-.76-1.64-.76-.494 0-.96.12-1.4.36-.44.24-.82.574-1.14 1.001-.32.428-.574.934-.76 1.52-.187.587-.28 1.234-.28 1.943v12.882H102.96z" />
      </svg>
    ),
  },
  {
    name: "Neon",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M16 16h96v64l-32 32H16V16zm8 8v80h56V72h24V24H24zm64 56h-8v16l8-16z" />
      </svg>
    ),
  },
  {
    name: "Supabase",
    icon: (
      <svg viewBox="0 0 128 128" className="w-5 h-5 fill-current shrink-0">
        <path d="M70.9 7.6L14.5 74.4c-2.4 2.9-1 7.2 2.7 8.3l48.1 13.7V120c0 3.8 4.6 5.6 7.2 2.9l53.6-57.5c2.4-2.6 1.3-6.8-2.1-8L76 44.5V8.3c0-3.9-4.7-5.7-7.1-2.8l2 2.1z" />
      </svg>
    ),
  },
];

// Duplicate array for seamless loop
const marqueeItems = [...techs, ...techs];

export default function Hero() {
  const container = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      delay: 0.2,
    })
    .from(".hero-description", {
      y: 30,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    .from(".hero-cta", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
    }, "-=0.6")
    .from(".hero-social", {
      opacity: 0,
      duration: 1.5,
    }, "-=0.4");
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-24 md:pb-24 lg:pb-24 px-6 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <h1 className="hero-title text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[1] tracking-tighter text-charcoal mb-10 text-balance">
          Jasa Website <span className="italic text-amber-warm underline underline-offset-8 decoration-1 decoration-amber-warm/30">Premium</span> <br className="hidden sm:block" /> untuk Elevasi Bisnis.
        </h1>

        <p className="hero-description max-w-2xl mx-auto text-lg md:text-xl text-charcoal/60 leading-relaxed font-medium mb-12 text-balance">
          Kami membantu UMKM dan profesional membangun kehadiran digital kelas dunia melalui website yang elegan, kencang, dan siap mengonversi pengunjung menjadi klien.
        </p>

        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link 
            href="https://wa.me/6283152248722"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto bg-charcoal text-off-white px-12 py-5 text-sm font-black uppercase tracking-[0.2em] rounded-sm hover:bg-amber-warm hover:text-charcoal transition-all duration-500 shadow-2xl flex items-center justify-center gap-3"
          >
            Mulai Diskusi
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
          </Link>
          <Link 
            href="#portfolio"
            className="w-full sm:w-auto bg-transparent border-2 border-charcoal text-charcoal px-12 py-5 text-sm font-black uppercase tracking-[0.2em] rounded-sm hover:bg-charcoal hover:text-off-white transition-all duration-500"
          >
            Lihat Portofolio
          </Link>
        </div>

        {/* Tech Marquee */}
        <div className="hero-social mt-20 pt-16 border-t border-charcoal/5 flex flex-col items-center gap-6 overflow-hidden">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-charcoal/40">Teknologi yang Kami Gunakan</span>

          <div className="relative w-full">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-r from-background to-transparent" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none bg-gradient-to-l from-background to-transparent" />

            <div
              className="flex gap-10 w-max"
              style={{
                animation: "marquee 28s linear infinite",
              }}
            >
              {marqueeItems.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 opacity-25 grayscale hover:opacity-60 hover:grayscale-0 transition-all duration-300 shrink-0"
                >
                  <span className="text-charcoal">{tech.icon}</span>
                  <span className="font-serif font-black text-base tracking-tighter text-charcoal uppercase whitespace-nowrap">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
