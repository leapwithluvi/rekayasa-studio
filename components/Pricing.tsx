"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  Check,
  X,
  MessageCircle,
  ChevronDown,
  Globe,
  Server,
  FileImage,
  CreditCard,
  Clock,
  Shield,
  Briefcase,
  Camera,
  Palette,
  ShoppingCart,
  Mail,
  Search,
  Wrench,
  PhoneCall,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getWhatsAppUrl } from "@/lib/config";

gsap.registerPlugin(ScrollTrigger);

/* ───────────────────────────── Types ───────────────────────────── */

interface PricingPlan {
  name: string;
  price: string;
  badge?: string;
  timeline: string;
  revisions: string;
  warranty: string;
  pages: string;
  desc: string;
  waMessage: string;
  content: string[];
  included: string[];
  excluded: string[];
  cta: string;
  featured: boolean;
}

type CategoryKey = "portofolio" | "umkm" | "pt";

interface Category {
  key: CategoryKey;
  label: string;
  icon: React.ReactNode;
  plans: PricingPlan[];
}

/* ──────────────── Shared rules (shown for all tabs) ──────────────── */

const sharedRules = [
  {
    icon: <Globe size={15} />,
    text: "Domain .my.id gratis 1 tahun (didaftarkan atas nama client). Tahun kedua dibayar client. Domain .com atau .co.id dibayar client, kami bantu mendaftarkan. Sudah punya domain? Kami sambungkan tanpa biaya, tanpa potongan harga.",
  },
  {
    icon: <Server size={15} />,
    text: "Hosting statis gratis (Cloudflare Pages / Netlify) + SSL termasuk untuk paket tanpa panel admin. Hosting berbayar tidak termasuk untuk paket dengan panel admin — client beli sendiri (kami bantu pilih & pasang maks 2 jam) atau sewa lewat kami.",
  },
  {
    icon: <FileImage size={15} />,
    text: "Foto, teks, logo, dan data produk disediakan oleh client. Semua website responsif di HP.",
  },
  {
    icon: <CreditCard size={15} />,
    text: "DP 50%, pelunasan sebelum diterbitkan. File dan akses diserahkan setelah lunas.",
  },
];

const sharedExclusions = [
  { icon: <Palette size={14} />, text: "Logo & identitas brand" },
  { icon: <Camera size={14} />, text: "Foto dan video produksi" },
  { icon: <FileImage size={14} />, text: "Penulisan konten" },
  { icon: <ShoppingCart size={14} />, text: "Toko online & pembayaran online" },
  { icon: <Search size={14} />, text: "Iklan berbayar & SEO lanjutan" },
  { icon: <Mail size={14} />, text: "Email bisnis" },
  { icon: <Wrench size={14} />, text: "Perawatan bulanan" },
];

/* ───────────────────────────── Data ───────────────────────────── */

const categories: Category[] = [
  {
    key: "portofolio",
    label: "Portofolio",
    icon: <Camera size={16} />,
    plans: [
      {
        name: "Kilat",
        price: "250rb",
        badge: "Cepat & Hemat",
        timeline: "2 hari",
        revisions: "1× revisi",
        warranty: "7 hari garansi",
        pages: "1 halaman",
        desc: "Website portofolio 1 halaman cepat jadi, template siap pakai.",
        waMessage:
          "Halo Altareka, saya tertarik Paket Portofolio Kilat (mulai Rp 250rb). Bisa bantu jelaskan prosesnya?",
        content: [
          "Hero section",
          "Galeri portofolio",
          "Tentang / bio singkat",
          "Kontak (WA/IG/email)",
        ],
        included: [
          "Pilih 1 dari 3–5 template",
          "Galeri sampai 12 karya",
          "Tombol WhatsApp / IG / email",
          "Domain .my.id gratis 1 tahun",
          "Hosting gratis (Cloudflare/Netlify)",
          "SSL Certificate (HTTPS)",
        ],
        excluded: [
          "Halaman terpisah",
          "Desain unik / custom",
          "Form kontak dengan email",
          "Edit foto",
          "Penulisan bio",
          "Blog",
          "Panel admin",
        ],
        cta: "Pilih Paket Kilat",
        featured: false,
      },
      {
        name: "Pro",
        price: "600rb",
        badge: "Paling Populer",
        timeline: "4–6 hari",
        revisions: "2× revisi",
        warranty: "14 hari garansi",
        pages: "3–4 halaman",
        desc: "Portofolio multi halaman dengan desain yang disesuaikan dan galeri per kategori.",
        waMessage:
          "Halo Altareka, saya tertarik Paket Portofolio Pro (mulai Rp 600rb). Bisa mulai konsultasi?",
        content: [
          "Beranda",
          "Galeri per kategori",
          "Tentang + CV",
          "Halaman kontak",
        ],
        included: [
          "1 konsep desain yang disesuaikan",
          "Galeri sampai 40 karya (5 kategori)",
          "Fitur perbesar foto (lightbox)",
          "Form kontak ke email",
          "SEO dasar",
          "Sesi serah terima 30 menit",
          "Domain .my.id gratis 1 tahun",
          "Hosting gratis (Cloudflare/Netlify)",
          "SSL Certificate (HTTPS)",
        ],
        excluded: [
          "Animasi kompleks",
          "Foto lebih dari 40",
          "Blog",
          "Panel admin",
          "Toko online",
          "Edit foto",
          "Hosting video",
        ],
        cta: "Pilih Paket Pro",
        featured: true,
      },
      {
        name: "Premium",
        price: "1.5jt",
        timeline: "7–10 hari",
        revisions: "3× revisi",
        warranty: "14 hari garansi",
        pages: "5–7 halaman",
        desc: "Portofolio profesional lengkap dengan studi kasus, animasi, dan SEO terstruktur.",
        waMessage:
          "Halo Altareka, saya tertarik Paket Portofolio Premium (mulai Rp 1.5jt). Mohon informasi detailnya.",
        content: [
          "Beranda",
          "Studi kasus (sampai 5 proyek)",
          "Tentang",
          "Layanan & tarif",
          "Kontak",
          "Testimoni",
        ],
        included: [
          "Desain khusus / full custom",
          "Galeri sampai 100 karya",
          "Animasi halus (micro-interactions)",
          "SEO dasar + Sitemap + Search Console",
          "Domain .my.id gratis 1 tahun",
          "Upgrade .com (bayar domainnya saja)",
          "Hosting gratis (Cloudflare/Netlify)",
          "SSL Certificate (HTTPS)",
        ],
        excluded: [
          "Toko online",
          "Panel admin (tersedia sebagai add-on)",
          "Logo",
          "Foto / video produksi",
          "Multi bahasa (+20–40%)",
        ],
        cta: "Pilih Paket Premium",
        featured: false,
      },
    ],
  },
  {
    key: "umkm",
    label: "UMKM",
    icon: <ShoppingCart size={16} />,
    plans: [
      {
        name: "Katalog Simpel",
        price: "450rb",
        badge: "Entry Level",
        timeline: "2–4 hari",
        revisions: "1× revisi",
        warranty: "7 hari garansi",
        pages: "1 halaman",
        desc: "Website katalog 1 halaman untuk usaha kecil, warung, atau UMKM baru.",
        waMessage:
          "Halo Altareka, saya tertarik Paket Katalog Simpel (mulai Rp 450rb) untuk usaha saya. Bisa jelaskan lebih lanjut?",
        content: [
          "Hero / banner usaha",
          "Menu atau produk unggulan",
          "Tentang usaha",
          "Lokasi + jam buka + Google Maps",
          "Footer",
        ],
        included: [
          "Pilih template (hangat/bersih/minimalis)",
          "Sampai 12 produk atau menu",
          "Tombol WA / link GoFood / GrabFood / ShopeeFood",
          "QR code (file gambar)",
          "Domain .my.id gratis 1 tahun",
          "Hosting gratis (Cloudflare/Netlify)",
          "SSL Certificate (HTTPS)",
        ],
        excluded: [
          "Produk lebih dari 12",
          "Halaman detail produk",
          "Panel admin (ubah lewat kami, berbayar)",
          "Keranjang / bayar online",
          "Foto produk",
          "Desain cetak stiker QR",
          "Setup Google Business",
        ],
        cta: "Pilih Katalog Simpel",
        featured: false,
      },
      {
        name: "Katalog Plus",
        price: "900rb",
        badge: "Paling Populer",
        timeline: "5–7 hari",
        revisions: "2× revisi",
        warranty: "14 hari garansi",
        pages: "3–4 halaman",
        desc: "Katalog multi halaman dengan kategori, promo, dan integrasi WhatsApp per produk.",
        waMessage:
          "Halo Altareka, saya tertarik Paket Katalog Plus (mulai Rp 900rb). Bisa mulai konsultasi?",
        content: [
          "Beranda",
          "Katalog + kategori",
          "Tentang usaha",
          "Kontak + Google Maps",
          "Galeri foto",
        ],
        included: [
          "Sampai 40 produk",
          "Tombol WA per produk (pesan terisi nama produk)",
          "Bagian promo / highlight",
          "Support sampai 2 cabang",
          "SEO dasar",
          "Bantuan tautkan ke Google Business",
          "QR code",
          "Domain .my.id gratis 1 tahun",
          "Hosting gratis (Cloudflare/Netlify)",
          "SSL Certificate (HTTPS)",
        ],
        excluded: [
          "Panel admin",
          "Produk lebih dari 40",
          "Bayar online",
          "Blog",
          "Cabang lebih dari 2",
        ],
        cta: "Pilih Katalog Plus",
        featured: true,
      },
      {
        name: "Bisnis Online",
        price: "1.6jt",
        timeline: "7–12 hari",
        revisions: "2× revisi",
        warranty: "14 hari garansi",
        pages: "4–6 halaman + panel admin",
        desc: "Website katalog dengan panel admin agar client bisa kelola produk, harga, dan artikel sendiri.",
        waMessage:
          "Halo Altareka, saya tertarik Paket Bisnis Online (mulai Rp 1.6jt) untuk UMKM saya. Mohon informasi detailnya.",
        content: [
          "Beranda",
          "Katalog + halaman detail produk",
          "Tentang usaha",
          "Blog kecil / artikel",
          "Kontak + Google Maps",
        ],
        included: [
          "Panel admin (WordPress / sejenis)",
          "Ubah produk, harga, foto, & artikel sendiri",
          "Input awal sampai 30 produk",
          "Support sampai 3 cabang",
          "SEO + Sitemap",
          "Pelatihan online 1 sesi + panduan",
          "Pemasangan di hosting client",
          "Domain .my.id gratis 1 tahun",
        ],
        excluded: [
          "Hosting berbayar (±Rp 300rb–1.5jt/tahun)",
          "Produk lebih dari 30",
          "Toko online / checkout",
          "Multi bahasa",
          "Email bisnis",
        ],
        cta: "Pilih Bisnis Online",
        featured: false,
      },
    ],
  },
  {
    key: "pt",
    label: "PT / Corporate",
    icon: <Briefcase size={16} />,
    plans: [
      {
        name: "Starter",
        price: "1.5jt",
        badge: "One-Page Pro",
        timeline: "3–5 hari",
        revisions: "1× revisi",
        warranty: "14 hari garansi",
        pages: "1 halaman (7–9 section)",
        desc: "Company profile 1 halaman formal dengan desain mengikuti identitas perusahaan.",
        waMessage:
          "Halo Altareka, saya tertarik Paket PT Starter (mulai Rp 1.5jt) untuk company profile perusahaan kami.",
        content: [
          "Hero / banner perusahaan",
          "Tentang perusahaan",
          "Layanan (sampai 6)",
          "Keunggulan",
          "Klien / Proyek (sampai 8)",
          "Legalitas",
          "Kontak + Google Maps",
        ],
        included: [
          "Desain formal mengikuti logo & warna",
          "Form kontak",
          "SEO dasar",
          "Domain .my.id gratis 1 tahun",
          "Hosting gratis (Cloudflare/Netlify)",
          "SSL Certificate (HTTPS)",
          "Penawaran PDF + BAST singkat",
        ],
        excluded: [
          "Halaman terpisah",
          "Katalog detail",
          "Panel admin",
          "Blog",
          "Multi bahasa",
          "Penulisan konten",
          "Email bisnis",
        ],
        cta: "Pilih Paket Starter",
        featured: false,
      },
      {
        name: "Bisnis",
        price: "2.5jt",
        badge: "Paling Populer",
        timeline: "1–2 minggu",
        revisions: "2× revisi",
        warranty: "14 hari garansi",
        pages: "4–5 halaman",
        desc: "Company profile multi halaman dengan desain formal khusus dan SEO terstruktur.",
        waMessage:
          "Halo Altareka, saya tertarik Paket PT Bisnis (mulai Rp 2.5jt) untuk website perusahaan kami. Bisa konsultasi?",
        content: [
          "Beranda",
          "Tentang (profil, visi misi, legalitas)",
          "Layanan (sampai 8)",
          "Proyek / Klien (sampai 12)",
          "Kontak",
        ],
        included: [
          "Desain formal khusus",
          "SEO dasar + Sitemap + Search Console",
          "Domain .my.id gratis 1 tahun",
          "Hosting gratis (Cloudflare/Netlify)",
          "SSL Certificate (HTTPS)",
          "Penawaran + BAST",
        ],
        excluded: [
          "Katalog produk + panel admin",
          "Blog",
          "Multi bahasa",
          "Copywriting",
          "Foto produksi",
          "Email bisnis",
        ],
        cta: "Pilih Paket Bisnis",
        featured: true,
      },
      {
        name: "Premium",
        price: "3.5jt",
        timeline: "2–3 minggu",
        revisions: "3× revisi",
        warranty: "30 hari garansi",
        pages: "6–8 halaman + panel admin",
        desc: "Paket lengkap: katalog produk, blog/artikel, panel admin, dan dokumentasi teknis.",
        waMessage:
          "Halo Altareka, saya tertarik Paket PT Premium (mulai Rp 3.5jt) untuk website perusahaan kami. Mohon informasi lengkapnya.",
        content: [
          "Semua isi paket Bisnis",
          "Katalog (kategori + detail produk)",
          "Berita / Artikel / Blog",
          "Form Minta Penawaran",
        ],
        included: [
          "Panel admin (WordPress / sejenis)",
          "Input awal sampai 20 produk",
          "Pencarian & filter kategori",
          "Pelatihan admin 1 sesi",
          "Source code + README + dokumentasi",
          "Kontrak sederhana + BAST",
          "Domain .my.id gratis 1 tahun",
        ],
        excluded: [
          "Hosting berbayar",
          "Toko online / checkout",
          "Produk lebih dari 20",
          "Multi bahasa",
          "Integrasi khusus (stok/ERP)",
          "Foto produk",
        ],
        cta: "Pilih Paket Premium",
        featured: false,
      },
    ],
  },
];

/* ──────────────── Component ──────────────── */

const PREVIEW_COUNT = 4;

export default function Pricing() {
  const container = useRef<HTMLElement>(null);
  const [activeTab, setActiveTab] = useState<CategoryKey>("portofolio");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [rulesOpen, setRulesOpen] = useState(false);

  const toggle = useCallback(
    (i: number) => setExpandedIndex((prev) => (prev === i ? null : i)),
    [],
  );

  /* Reset expanded card when switching tabs */
  const switchTab = useCallback((key: CategoryKey) => {
    setActiveTab(key);
    setExpandedIndex(null);
  }, []);

  /* Transisi halus dan cepat saat ganti tab (tanpa loncatan y) */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-card",
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.22,
          ease: "power1.out",
        },
      );
    }, container);
    return () => ctx.revert();
  }, [activeTab]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".pricing-header",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        },
      );

      gsap.fromTo(
        ".pricing-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );

  const activePlans =
    categories.find((c) => c.key === activeTab)?.plans ?? [];

  return (
    <section
      id="pricing"
      ref={container}
      className="py-16 md:py-24 px-6 bg-off-white overflow-hidden scroll-mt-14"
    >
      <div className="max-w-7xl mx-auto">
        {/* ── Header ── */}
        <div className="pricing-header text-center mb-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-charcoal/70 mb-6">
            Investasi Digital
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tighter text-charcoal text-balance">
            Harga Jujur, Hasil{" "}
            <span className="text-amber-warm italic">Luhur.</span>
          </h3>
          <p className="mt-4 text-xs sm:text-sm text-charcoal/75 max-w-xl mx-auto leading-relaxed">
            Pilih kategori yang sesuai kebutuhan Anda. Semua paket sudah
            termasuk domain .my.id gratis, SSL, dan support teknis.
          </p>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-charcoal/[0.03] rounded-sm p-1.5 gap-1">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => switchTab(cat.key)}
                className={cn(
                  "flex items-center gap-2 px-5 sm:px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm transition-all duration-300",
                  activeTab === cat.key
                    ? "bg-charcoal text-off-white shadow-lg shadow-charcoal/20"
                    : "text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5",
                )}
              >
                {cat.icon}
                <span className="hidden sm:inline">{cat.label}</span>
                <span className="sm:hidden">
                  {cat.label === "PT / Corporate" ? "PT" : cat.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Pricing Cards Grid (Equal Heights & Baselines) ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto items-stretch">
          {activePlans.map((plan, i) => {
            const isExpanded = expandedIndex === i;
            const allDetails = [...plan.content, ...plan.included];
            const visibleDetails = isExpanded
              ? allDetails
              : allDetails.slice(0, PREVIEW_COUNT);
            const hiddenCount = allDetails.length - PREVIEW_COUNT;

            return (
              <div
                key={`${activeTab}-${i}`}
                className={cn(
                  "pricing-card relative p-7 sm:p-8 lg:p-9 flex flex-col h-full justify-between transition-all duration-300 rounded-sm border",
                  plan.featured
                    ? "bg-charcoal text-off-white z-10 border-amber-warm/50 ring-1 ring-amber-warm/30 shadow-2xl shadow-charcoal/25"
                    : "bg-white text-charcoal border-charcoal/8 shadow-sm",
                )}
              >
                {/* Badge */}
                {plan.badge && plan.featured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-warm text-charcoal px-5 py-1.5 text-[9px] font-black uppercase tracking-widest rounded-full shadow-lg whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                {/* Top Section */}
                <div>
                  {/* Price header */}
                  <div className="mb-6 text-center">
                    <span
                      className={cn(
                        "text-[10px] font-black uppercase tracking-[0.3em]",
                        plan.featured ? "text-amber-warm" : "text-charcoal/70",
                      )}
                    >
                      {plan.name}
                    </span>
                    <div className="mt-3 flex items-baseline justify-center gap-1 flex-nowrap">
                      <span className="text-lg font-black tracking-tight">
                        Rp
                      </span>
                      <span className="text-4xl sm:text-5xl font-serif font-black tracking-tighter">
                        {plan.price}
                      </span>
                    </div>
                    <div className="text-[9px] font-black uppercase tracking-widest text-amber-warm mt-1">
                      Mulai Dari
                    </div>
                    <p
                      className={cn(
                        "mt-3 text-xs leading-relaxed max-w-[240px] mx-auto min-h-[36px] flex items-center justify-center text-center",
                        plan.featured ? "text-off-white/80" : "text-charcoal/75",
                      )}
                    >
                      {plan.desc}
                    </p>
                  </div>

                  {/* Quick specs */}
                  <div
                    className={cn(
                      "grid grid-cols-2 gap-2 mb-6 p-3.5 rounded-sm min-h-[82px] items-center",
                      plan.featured ? "bg-off-white/5" : "bg-charcoal/[0.03]",
                    )}
                  >
                    {[
                      { icon: <Clock size={12} />, text: plan.timeline },
                      { icon: <Shield size={12} />, text: plan.warranty },
                    ].map((spec, j) => (
                      <div
                        key={j}
                        className={cn(
                          "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider",
                          plan.featured
                            ? "text-off-white/80"
                            : "text-charcoal/75",
                        )}
                      >
                        {spec.icon}
                        <span className="truncate">{spec.text}</span>
                      </div>
                    ))}
                    {[
                      { icon: <FileImage size={12} />, text: plan.pages },
                      { icon: <Wrench size={12} />, text: plan.revisions },
                    ].map((spec, j) => (
                      <div
                        key={j + 2}
                        className={cn(
                          "flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider",
                          plan.featured
                            ? "text-off-white/80"
                            : "text-charcoal/75",
                        )}
                      >
                        {spec.icon}
                        <span className="truncate">{spec.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Section label: Isi Website */}
                  <p
                    className={cn(
                      "text-[9px] font-black uppercase tracking-[0.3em] mb-3",
                      plan.featured ? "text-amber-warm/80" : "text-amber-warm",
                    )}
                  >
                    {isExpanded ? "Isi Website & Termasuk" : "Highlight Fitur"}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5 mb-4">
                    {visibleDetails.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <div
                          className={cn(
                            "mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0",
                            plan.featured ? "bg-amber-warm/15" : "bg-charcoal/5",
                          )}
                        >
                          <Check
                            className={cn(
                              "w-2.5 h-2.5",
                              plan.featured ? "text-amber-warm" : "text-charcoal",
                            )}
                          />
                        </div>
                        <span className="text-xs font-semibold tracking-tight leading-relaxed">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Expanded: excluded items */}
                  {isExpanded && (
                    <>
                      <div
                        className={cn(
                          "border-t my-4",
                          plan.featured
                            ? "border-off-white/10"
                            : "border-charcoal/8",
                        )}
                      />
                      <p
                        className={cn(
                          "text-[9px] font-black uppercase tracking-[0.3em] mb-2.5",
                          plan.featured
                            ? "text-off-white/70"
                            : "text-charcoal/70",
                        )}
                      >
                        Tidak Termasuk
                      </p>
                      <ul className="space-y-2 mb-4">
                        {plan.excluded.map((item, j) => (
                          <li key={j} className="flex items-start gap-2.5">
                            <div
                              className={cn(
                                "mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0",
                                plan.featured
                                  ? "bg-red-500/15"
                                  : "bg-red-500/8",
                              )}
                            >
                              <X className="w-2.5 h-2.5 text-red-400" />
                            </div>
                            <span
                              className={cn(
                                "text-xs font-medium tracking-tight leading-relaxed",
                                plan.featured
                                  ? "text-off-white/80"
                                  : "text-charcoal/75",
                              )}
                            >
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {/* Toggle button */}
                  {hiddenCount > 0 && (
                    <button
                      onClick={() => toggle(i)}
                      className={cn(
                        "flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest mb-4 mt-1 transition-colors",
                        plan.featured
                          ? "text-amber-warm hover:text-off-white"
                          : "text-charcoal/75 hover:text-charcoal",
                      )}
                      aria-expanded={isExpanded}
                    >
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-300",
                          isExpanded && "rotate-180",
                        )}
                      />
                      {isExpanded
                        ? "Sembunyikan"
                        : `Lihat Detail (+${hiddenCount} lainnya)`}
                    </button>
                  )}
                </div>

                {/* CTA Always Pinned to Bottom */}
                <Link
                  href={getWhatsAppUrl(plan.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "mt-6 w-full py-4 flex items-center justify-center gap-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-md",
                    plan.featured
                      ? "bg-amber-warm text-charcoal hover:bg-off-white"
                      : "bg-charcoal text-off-white hover:bg-amber-warm hover:text-charcoal",
                  )}
                >
                  <MessageCircle size={15} />
                  {plan.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* ── Custom Plan CTA ── */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-charcoal/[0.03] rounded-sm p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-charcoal/5">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-warm mb-2">
                Butuh Lebih?
              </p>
              <p className="text-sm font-bold text-charcoal">
                Custom — Multi bahasa, login klien, katalog besar, atau toko
                online.
              </p>
              <p className="text-xs text-charcoal/75 mt-1">
                Harga setelah konsultasi. Hubungi kami untuk diskusi kebutuhan
                Anda.
              </p>
            </div>
            <Link
              href={getWhatsAppUrl(
                "Halo Altareka, saya ingin konsultasi mengenai pembuatan website dengan kebutuhan custom (multi bahasa / login klien / katalog besar / toko online).",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center gap-3 bg-charcoal text-off-white px-8 py-4 text-[10px] font-black uppercase tracking-[0.2em] rounded-sm hover:bg-amber-warm hover:text-charcoal transition-all duration-300 shadow-xl shadow-charcoal/5"
            >
              <PhoneCall size={16} />
              Hubungi Kami
            </Link>
          </div>
        </div>

        {/* ── Shared Rules (collapsible) ── */}
        <div className="mt-16 max-w-4xl mx-auto">
          <button
            onClick={() => setRulesOpen(!rulesOpen)}
            className="w-full flex items-center justify-between gap-4 text-left group"
            aria-expanded={rulesOpen}
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-charcoal/70">
                Ketentuan Umum
              </p>
              <p className="text-xs text-charcoal/70 mt-1">
                Berlaku untuk semua paket di semua kategori
              </p>
            </div>
            <ChevronDown
              size={18}
              className={cn(
                "text-charcoal/60 transition-transform duration-300 shrink-0",
                rulesOpen && "rotate-180",
              )}
            />
          </button>

          {rulesOpen && (
            <div className="mt-8 space-y-10 animate-in fade-in duration-300">
              {/* Shared rules */}
              <div className="space-y-5">
                {sharedRules.map((rule, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 bg-white p-5 rounded-sm border border-charcoal/5"
                  >
                    <div className="mt-0.5 w-8 h-8 rounded-full bg-amber-warm/10 flex items-center justify-center shrink-0 text-amber-warm">
                      {rule.icon}
                    </div>
                    <p className="text-xs text-charcoal/75 leading-relaxed">
                      {rule.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Shared exclusions */}
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-charcoal/70 mb-4">
                  Tidak Termasuk di Semua Paket
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {sharedExclusions.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white p-4 rounded-sm border border-charcoal/5"
                    >
                      <div className="w-6 h-6 rounded-full bg-red-500/5 flex items-center justify-center shrink-0">
                        <X className="w-3 h-3 text-red-400" />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-tight text-charcoal/75">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Bottom note ── */}
        <div className="mt-16 text-center">
          <p className="text-[10px] font-bold text-charcoal/70 uppercase tracking-[0.3em] leading-relaxed">
            *Semua harga mulai dari, dapat disesuaikan dengan kebutuhan.{" "}
            <br className="md:hidden" />
            <Link
              href={getWhatsAppUrl(
                "Halo Altareka, saya ingin konsultasi mengenai pembuatan website. Bisa bantu?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="text-charcoal underline underline-offset-4 ml-1"
            >
              Konsultasikan kebutuhan Anda
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
