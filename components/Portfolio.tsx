"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ExternalLink, Quote, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  title: string;
  category: string;
  img: string;
  description?: string;
  techStack?: string[];
  liveUrl?: string;
  testimonial?: { text: string; author: string };
  isPlaceholder?: boolean;
}

// ─────────────────────────────────────────────
// TODO: Isi data project nyata di sini
// ─────────────────────────────────────────────
const projects: Project[] = [
  {
    title: "Company Profile & Katalog Produk",
    category: "Landing Page",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNAGjSiu1qnBelxMM03sRBdR8qoa_J4aRie9kcefLVqQ&s=10",
    description:
      "Website company profile dan katalog produk untuk PT. Bumi Kutai Perkasa yang bergerak di bidang penyedia batu Koral/Split, Batu Agregat, Batu Pondasi, Batu Tronjolan, dan Batu Abu. Melayani area Kutai Kartanegara dan sekitarnya.",
    techStack: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://www.bumikutaiperkasa.co.id",
    testimonial: {
      text: "Testimoni dari klien.",
      author: "Nama Klien",
    },
  },
  {
    title: "Segera Hadir",
    category: "Project Berikutnya",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    isPlaceholder: true,
  },
  {
    title: "Segera Hadir",
    category: "Project Berikutnya",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    isPlaceholder: true,
  },
];

export default function Portfolio() {
  const container = useRef(null);
  const [selected, setSelected] = useState<Project | null>(null);

  useGSAP(
    () => {
      ScrollTrigger.refresh();

      gsap.fromTo(
        ".portfolio-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".portfolio-item",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );

  function openModal(project: Project) {
    setSelected(project);
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    setSelected(null);
    document.body.style.overflow = "";
  }

  return (
    <>
      <section
        id="portfolio"
        ref={container}
        className="py-32 px-6 bg-off-white scroll-mt-14"
      >
        <div className="max-w-7xl mx-auto">
          <div className="portfolio-header text-center mb-16">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/40 mb-6">
              Karya Kami
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance">
              Terpilih &{" "}
              <span className="text-amber-warm italic">Terukur.</span>
            </h3>
          </div>

          <div className="portfolio-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {projects.map((project, i) => (
              <div
                key={i}
                className="portfolio-item group cursor-pointer"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                aria-label={`Lihat detail ${project.title}`}
                onKeyDown={(e) => e.key === "Enter" && openModal(project)}
              >
                <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden rounded-sm mb-4">
                  <img
                    src={project.img}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.isPlaceholder ? "grayscale opacity-50" : ""}`}
                  />
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-charcoal text-off-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-full shadow-xl">
                      {project.isPlaceholder
                        ? "Coming Soon"
                        : "Lihat Detail \u2192"}
                    </span>
                  </div>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-charcoal/40 mb-2 block">
                    {project.category}
                  </span>
                  <h4
                    className={`text-2xl font-black tracking-tight group-hover:text-amber-warm transition-colors ${project.isPlaceholder ? "text-charcoal/30" : "text-charcoal"}`}
                  >
                    {project.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={`Detail project ${selected.title}`}
        >
          <div className="absolute inset-0 bg-charcoal/80 backdrop-blur-sm" />

          <div
            className="relative z-10 bg-off-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img
                src={selected.img}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-charcoal text-off-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-warm hover:text-charcoal transition-colors shadow-lg"
              aria-label="Tutup modal"
            >
              <X size={16} />
            </button>

            <div className="p-8 md:p-12">
              {selected.isPlaceholder ? (
                <div className="text-center py-8">
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-charcoal/30 mb-4">
                    Coming Soon
                  </p>
                  <h4 className="text-3xl font-serif font-black text-charcoal">
                    Project Berikutnya
                  </h4>
                  <p className="mt-4 text-sm text-charcoal/50">
                    Kami sedang mengerjakan project baru yang menakjubkan.
                    Pantau terus!
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-warm mb-3 block">
                    {selected.category}
                  </span>
                  <h4 className="text-3xl md:text-4xl font-serif font-black text-charcoal tracking-tight mb-6">
                    {selected.title}
                  </h4>

                  {selected.description && (
                    <p className="text-sm leading-relaxed text-charcoal/70 mb-8">
                      {selected.description}
                    </p>
                  )}

                  {selected.techStack && selected.techStack.length > 0 && (
                    <div className="mb-8">
                      <p className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/30 mb-3">
                        Tech Stack
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selected.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-black uppercase tracking-widest bg-charcoal text-off-white px-4 py-2 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selected.testimonial && (
                    <div className="bg-charcoal/5 rounded-sm p-6 mb-8 relative">
                      <Quote className="w-8 h-8 text-amber-warm mb-3 opacity-60" />
                      <p className="text-sm italic text-charcoal/70 leading-relaxed mb-3">
                        &ldquo;{selected.testimonial.text}&rdquo;
                      </p>
                      <p className="text-[10px] font-black uppercase tracking-widest text-charcoal/40">
                        — {selected.testimonial.author}
                      </p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                    {selected.liveUrl && (
                      <a
                        href={selected.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 bg-charcoal text-off-white text-xs font-black uppercase tracking-[0.2em] px-8 py-5 rounded-sm hover:bg-amber-warm hover:text-charcoal transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        Kunjungi Website
                      </a>
                    )}
                    <a
                      href={getWhatsAppUrl(
                        `Halo Novareka, saya melihat portofolio Anda (${selected.title}) dan tertarik untuk membuat website serupa. Bisa mulai konsultasi?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 border-2 border-charcoal text-charcoal text-xs font-black uppercase tracking-[0.2em] px-8 py-5 rounded-sm hover:bg-charcoal hover:text-off-white transition-colors duration-300"
                    >
                      <MessageCircle size={16} />
                      Pesan Serupa
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
