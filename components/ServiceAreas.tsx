"use client";

import React, { useRef, useState } from "react";
import {
  MapPin,
  Building2,
  ExternalLink,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  Compass,
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWhatsAppUrl } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

interface RegionArea {
  id: string;
  name: string;
  badge: string;
  focus: string;
  desc: string;
  tags: string[];
}

const REGION_AREAS: RegionArea[] = [
  {
    id: "kukar-tenggarong",
    name: "Tenggarong & Kutai Kartanegara",
    badge: "Basis Utama Studio",
    focus: "Company Profile PT, Supplier & UMKM",
    desc: "Layanan konsultasi tatap muka langsung di Tenggarong dan sekitarnya (Loa Kulu, Samboja, Muara Badak, Kota Bangun). Spesialis profil PT siap tender dan katalog produk UMKM lokal.",
    tags: [
      "Jasa Website Tenggarong",
      "Web Developer Kukar",
      "Company Profile PT Tenggarong",
      "Katalog UMKM Kukar",
    ],
  },
  {
    id: "samarinda",
    name: "Kota Samarinda",
    badge: "Ibu Kota Provinsi Kaltim",
    focus: "Bisnis Retail, Kontraktor & Instansi",
    desc: "Pembuatan website komersial berkecepatan tinggi untuk ritel, konsultan, kontraktor proyek, klinik, butik, dan pelaku usaha di seluruh penjuru Kota Samarinda.",
    tags: [
      "Jasa Website Samarinda",
      "Jasa Pembuatan Website Samarinda",
      "Web Developer Samarinda",
      "Landing Page Samarinda",
    ],
  },
  {
    id: "balikpapan",
    name: "Kota Balikpapan",
    badge: "Pusat Bisnis & Logistik Kaltim",
    focus: "B2B Migas, Logistik Pelabuhan & Korporat",
    desc: "Website resmi berstandar korporat enterprise untuk perusahaan penyedia jasa migas, forwarding, perhotelan, katering industri, dan ekosistem bisnis Balikpapan.",
    tags: [
      "Jasa Website Balikpapan",
      "Jasa Pembuatan Website Balikpapan",
      "Company Profile Balikpapan",
      "Web Developer Balikpapan",
    ],
  },
  {
    id: "ikn-sepaku",
    name: "IKN Nusantara & Sepaku",
    badge: "Ibu Kota Nusantara",
    focus: "Vendor Konstruksi, Material & Supplier",
    desc: "Solusi profil digital berkecepatan tinggi bagi vendor, supplier material konstruksi, dan penyedia jasa pendukung pembangunan di Kawasan Inti Pusat Pemerintahan (KIPP) IKN.",
    tags: [
      "Jasa Website IKN",
      "Jasa Website Nusantara",
      "Profil Vendor IKN Sepaku",
      "Jasa Website PPU",
    ],
  },
  {
    id: "bontang",
    name: "Kota Bontang",
    badge: "Kota Industri & Energi",
    focus: "Manufaktur, Kimia, Teknik & Jasa",
    desc: "Perancangan website profesional untuk subkontraktor industri kimia, fabrikasi, teknik, serta pelaku usaha perdagangan dan kuliner di Kota Bontang.",
    tags: [
      "Jasa Website Bontang",
      "Jasa Pembuatan Website Bontang",
      "Company Profile Bontang",
    ],
  },
  {
    id: "kutim-sangatta",
    name: "Kutai Timur (Sangatta)",
    badge: "Pusat Tambang & Sawit",
    focus: "Supplier Alat Berat, Sawit & Logistik",
    desc: "Website company profile profesional untuk perusahaan pengadaan barang/jasa tambang batubara, perkebunan kelapa sawit, dan kontraktor lokal Sangatta & Bengalon.",
    tags: [
      "Jasa Website Sangatta",
      "Jasa Website Kutai Timur",
      "Profil Perusahaan Sangatta",
    ],
  },
  {
    id: "ppu",
    name: "Penajam Paser Utara (PPU)",
    badge: "Mitra Penyangga IKN",
    focus: "Agroindustri, Transportasi & Usaha Lokal",
    desc: "Membantu pelaku usaha lokal di Penajam, Babulu, dan Waru membangun kehadiran digital modern menyambut perputaran ekonomi pesat di gerbang IKN.",
    tags: [
      "Jasa Website Penajam",
      "Jasa Pembuatan Website PPU",
      "Web Toko Penajam",
    ],
  },
  {
    id: "berau",
    name: "Kabupaten Berau",
    badge: "Pariwisata & Maritim",
    focus: "Resort Wisata, Dive Center & Kuliner",
    desc: "Website editorial mewah multibahasa untuk operator resort pulau (Derawan, Maratua), agen tour & travel bahari, serta usaha lokal di Tanjung Redeb.",
    tags: [
      "Jasa Website Berau",
      "Website Wisata Derawan",
      "Jasa Pembuatan Website Tanjung Redeb",
    ],
  },
  {
    id: "paser",
    name: "Kabupaten Paser (Tanah Grogot)",
    badge: "Agribisnis & Perdagangan",
    focus: "Perkebunan, Koperasi & Toko Online",
    desc: "Pembuatan website katalog dan company profile siap bersaing untuk koperasi perkebunan sawit, UMKM kuliner, dan ritel di Tanah Grogot dan Kuaro.",
    tags: [
      "Jasa Website Paser",
      "Jasa Website Tanah Grogot",
      "Web Toko Paser",
    ],
  },
  {
    id: "kubar-mahulu",
    name: "Kutai Barat & Mahakam Ulu",
    badge: "Pedalaman & Hulu Mahakam",
    focus: "Pengadaan, Komoditas & Ekraf Lokal",
    desc: "Website resmi berbobot ringan yang cepat diakses dari ponsel untuk pengadaan barang, komoditas kerajinan lokal, dan instansi di Sendawar, Melak, & Ujoh Bilang.",
    tags: [
      "Jasa Website Kutai Barat",
      "Jasa Website Sendawar",
      "Jasa Website Mahakam Ulu",
    ],
  },
];

export default function ServiceAreas() {
  const container = useRef(null);
  const [activeArea, setActiveArea] = useState<string>("kukar-tenggarong");

  useGSAP(
    () => {
      gsap.fromTo(
        ".area-header",
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        ".area-grid-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          scrollTrigger: {
            trigger: ".area-grid",
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: container }
  );

  const current =
    REGION_AREAS.find((r) => r.id === activeArea) || REGION_AREAS[0];

  return (
    <section
      id="wilayah"
      ref={container}
      className="py-16 md:py-24 px-6 bg-[#0f0f0e] text-off-white overflow-hidden scroll-mt-14 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="area-header text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-warm/15 text-amber-warm text-[10px] font-black uppercase tracking-[0.25em] mb-4 border border-amber-warm/20">
            <Compass size={13} />
            Jangkauan Layanan Kalimantan Timur & IKN
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tighter text-off-white text-balance mb-6">
            Jasa Pembuatan Website di <br className="hidden sm:block" />
            <span className="text-amber-warm italic">Seluruh Wilayah Kaltim.</span>
          </h2>
          <p className="text-sm md:text-base text-off-white/75 max-w-2xl mx-auto leading-relaxed">
            Berbasis di <strong>Tenggarong, Kutai Kartanegara</strong>, Altareka
            menghadirkan standar arsitektur web modern bagi korporasi PT, pelaku
            UMKM, dan praktisi ahli di 10 kabupaten &amp; kota se-Kalimantan
            Timur.
          </p>
        </div>

        {/* Quick Region Selector Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-5xl mx-auto">
          {REGION_AREAS.map((region) => {
            const isActive = region.id === activeArea;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveArea(region.id)}
                className={`text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-sm border transition-all duration-200 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-amber-warm text-charcoal border-amber-warm shadow-lg shadow-amber-warm/20"
                    : "bg-white/5 hover:bg-white/10 text-off-white/80 border-white/10"
                }`}
              >
                <MapPin size={12} className={isActive ? "text-charcoal" : "text-amber-warm"} />
                <span>{region.name.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Featured Showcase Card of Selected Region */}
        <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/15 rounded-sm p-6 sm:p-10 md:p-12 mb-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-amber-warm/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-8">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="text-[10px] font-black uppercase tracking-[0.25em] px-2.5 py-1 rounded bg-amber-warm text-charcoal">
                  {current.badge}
                </span>
                <span className="text-white/30">•</span>
                <span className="text-xs text-amber-warm font-semibold">
                  {current.focus}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-black text-white mb-4 tracking-tight">
                Jasa Website {current.name}
              </h3>

              <p className="text-off-white/85 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                {current.desc}
              </p>

              {/* Keyword Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {current.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-wider bg-white/5 text-off-white/70 border border-white/10 px-2.5 py-1 rounded-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-3 justify-center sm:items-start md:items-end">
              <a
                href={getWhatsAppUrl(
                  `Halo Altareka, saya tertarik dengan jasa pembuatan website untuk wilayah ${current.name}. Bisa konsultasi gratis?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-warm text-charcoal hover:bg-white text-xs font-black uppercase tracking-[0.15em] rounded-sm transition-all duration-300 shadow-md"
              >
                <MessageCircle size={15} />
                Konsultasi Wilayah Ini
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-off-white/90 text-xs font-bold uppercase tracking-wider rounded-sm border border-white/10 transition-colors"
              >
                <span>Lihat Pilihan Paket</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>

        {/* Grid of All 10 Regencies & Cities in Kaltim */}
        <div className="area-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REGION_AREAS.map((region) => (
            <div
              key={region.id}
              className={`area-grid-item p-6 rounded-sm border transition-all duration-300 cursor-pointer ${
                region.id === activeArea
                  ? "bg-white/[0.08] border-amber-warm/60 shadow-lg"
                  : "bg-white/[0.03] hover:bg-white/[0.06] border-white/10 hover:border-white/20"
              }`}
              onClick={() => setActiveArea(region.id)}
            >
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-serif font-black text-amber-warm tracking-tight">
                  <MapPin size={13} />
                  {region.name}
                </span>
                <span className="text-[9px] font-bold uppercase tracking-wider text-off-white/50 bg-white/5 px-2 py-0.5 rounded">
                  {region.badge}
                </span>
              </div>

              <p className="text-xs text-off-white/70 leading-relaxed mb-4 line-clamp-3">
                {region.desc}
              </p>

              <div className="flex items-center justify-between text-[11px] pt-3 border-t border-white/5 text-amber-warm font-semibold">
                <span>{region.focus.split(",")[0]}</span>
                <span className="text-[10px] uppercase tracking-wider text-off-white/50 group-hover:text-amber-warm">
                  Pilih →
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Highlight Banner */}
        <div className="mt-12 p-6 rounded-sm bg-white/[0.03] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-amber-warm/15 text-amber-warm flex items-center justify-center shrink-0">
              <CheckCircle2 size={20} />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-0.5">
                Konsultasi Tatap Muka &amp; Daring Fleksibel
              </h4>
              <p className="text-xs text-off-white/70 leading-relaxed">
                Tatap muka langsung untuk wilayah Tenggarong &amp; Kukar, serta
                koordinasi intensif via WhatsApp &amp; Google Meet untuk
                Samarinda, Balikpapan, hingga pedalaman Kaltim.
              </p>
            </div>
          </div>

          <a
            href={getWhatsAppUrl(
              "Halo Altareka, saya ingin berkonsultasi mengenai pembuatan website untuk bisnis saya di Kalimantan Timur."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 bg-white/10 hover:bg-amber-warm hover:text-charcoal text-off-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all border border-white/15"
          >
            Hubungi Pengembang
          </a>
        </div>
      </div>
    </section>
  );
}
