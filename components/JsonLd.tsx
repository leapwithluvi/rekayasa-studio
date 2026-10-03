import React from "react";
import { SITE_URL } from "@/lib/config";

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Novareka",
    "image": `${SITE_URL}/opengraph-image`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": "+6283152248722",
    "priceRange": "Rp 450.000 - Rp 1.200.000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tenggarong",
      "addressLocality": "Kutai Kartanegara",
      "addressRegion": "Kalimantan Timur",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -0.4147,
      "longitude": 116.9912
    },
    "openingHoursSpecification": {
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
      "closes": "17:00"
    },
    "sameAs": [SITE_URL],
    "founder": {
      "@type": "Person",
      "name": "Luvi Aprilyansyah Gabriel"
    },
    "description": "Solusi Jasa Pembuatan Website & Platform Digital Modern oleh Novareka. Spesialis Company Profile, Landing Page, dan Website Bisnis Premium.",
    "areaServed": [
      "Tenggarong",
      "Samarinda",
      "Balikpapan",
      "Bontang",
      "Sangatta",
      "Penajam",
      "Kutai Kartanegara",
      "Kalimantan Timur"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Pembuatan Website UMKM"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Landing Page Profesional"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Website Portofolio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Jasa Web Design Kaltim"
          }
        }
      ]
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Novareka",
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${SITE_URL}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Luvi Aprilyansyah Gabriel",
    "jobTitle": "Web Developer & Designer",
    "worksFor": {
      "@type": "Organization",
      "name": "Novareka"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Tenggarong",
      "addressRegion": "Kalimantan Timur",
      "addressCountry": "ID"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
