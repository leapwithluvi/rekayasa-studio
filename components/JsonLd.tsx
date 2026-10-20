import React from "react";
import { SITE_URL, WA_PHONE } from "@/lib/config";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    "name": "Altareka",
    "alternateName": [
      "Altareka Web",
      "Altareka Digital",
      "Jasa Website Tenggarong Altareka",
      "Jasa Website Kukar Altareka",
      "Jasa Pembuatan Website Kaltim"
    ],
    "image": `${SITE_URL}/opengraph-image`,
    "logo": `${SITE_URL}/brand/altareka-logo-dark.svg`,
    "url": SITE_URL,
    "telephone": `+${WA_PHONE}`,
    "priceRange": "Rp 250.000 - Rp 3.500.000",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Bank Transfer, QRIS, DP 50%",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tenggarong",
      "addressLocality": "Tenggarong",
      "addressRegion": "Kalimantan Timur",
      "postalCode": "75511",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -0.4147,
      "longitude": 116.9912
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "21:00"
      }
    ],
    "sameAs": [
      SITE_URL
    ],
    "founder": {
      "@type": "Person",
      "name": "Luvi Aprilyansyah Gabriel",
      "jobTitle": "Lead Digital Architect & Web Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Altareka"
      }
    },
    "description": "Jasa pembuatan website profesional di Tenggarong, Kutai Kartanegara (Kukar), Samarinda, dan Kalimantan Timur. Spesialis Company Profile PT siap tender, Katalog UMKM modern, dan Portofolio profesional berkinerja tinggi.",
    "areaServed": [
      { "@type": "City", "name": "Tenggarong" },
      { "@type": "AdministrativeArea", "name": "Kutai Kartanegara" },
      { "@type": "City", "name": "Samarinda" },
      { "@type": "City", "name": "Balikpapan" },
      { "@type": "City", "name": "Bontang" },
      { "@type": "City", "name": "Sangatta" },
      { "@type": "AdministrativeArea", "name": "Penajam Paser Utara" },
      { "@type": "AdministrativeArea", "name": "Nusantara (IKN)" },
      { "@type": "AdministrativeArea", "name": "Kalimantan Timur" },
      { "@type": "Country", "name": "Indonesia" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Pembuatan Website Altareka",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Website Company Profile PT (Tender-Ready & Verified)",
            "description": "Pembuatan website profil perusahaan resmi berstandar korporat, siap audit tender, terintegrasi email domain resmi dan arsitektur keamanan modern."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Website Katalog Digital UMKM",
            "description": "Pembuatan katalog produk dan menu online UMKM modern, cepat diakses dari HP, dan terintegrasi tombol order langsung ke WhatsApp."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Website Portofolio Profesional",
            "description": "Website personal branding mewah untuk dokter, arsitek, konsultan, pengacara, dan praktisi ahli."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Website Tenggarong & Kutai Kartanegara",
            "description": "Layanan konsultasi dan pembuatan website lokal di wilayah Tenggarong, Kukar, Samarinda, dan sekitarnya."
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": "Altareka",
    "alternateName": "Altareka Jasa Website",
    "url": SITE_URL,
    "inLanguage": "id-ID",
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Berapa lama estimasi pengerjaan website di Altareka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bergantung pada paket: Paket Kilat / Katalog Simpel (2-4 hari kerja), Paket Pro / Katalog Plus (4-7 hari kerja), hingga Paket PT & Bisnis Online (1-3 minggu) terhitung setelah materi dan DP diterima."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah bisa request desain atau konsep sendiri?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tentu saja. Kami sangat terbuka jika Anda memiliki referensi desain, warna brand, atau struktur sendiri. Kami akan menyesuaikan arsitektur web dengan kebutuhan dan identitas bisnis Anda."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana alur pengerjaan dan komunikasinya jika berada di luar kota?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Seluruh komunikasi dan serah terima materi dilakukan secara fleksibel dan transparan melalui WhatsApp, Google Meet, atau email. Anda akan menerima link preview website secara berkala untuk memantau progres sebelum diterbitkan secara resmi."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah ada biaya tersembunyi setelah website selesai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tidak ada biaya tersembunyi. Biaya sesuai kesepakatan paket di awal. Untuk paket tanpa panel admin, hosting statis & SSL sudah gratis selamanya. Domain .my.id gratis untuk 1 tahun pertama."
        }
      },
      {
        "@type": "Question",
        "name": "Apakah website bisa diedit sendiri setelah jadi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Untuk paket yang menyertakan panel admin (Bisnis Online UMKM & PT Premium), Anda bisa mengelola produk, harga, dan artikel sendiri secara mandiri lengkap dengan panduan dan sesi pelatihan."
        }
      },
      {
        "@type": "Question",
        "name": "Bagaimana cara memesan jasa pembuatan website di Altareka?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cukup klik tombol 'Konsultasi Sekarang' atau chat langsung ke WhatsApp Altareka di 0831-5224-8722. Kami akan segera merespons untuk mendiskusikan kebutuhan website Anda."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
