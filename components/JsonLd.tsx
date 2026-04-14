import React from "react";

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rekayasa Studio",
    "image": "https://rekayasastudio.my.id/opengraph-image",
    "@id": "https://rekayasastudio.my.id",
    "url": "https://rekayasastudio.my.id",
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
    "sameAs": [
      "https://rekayasastudio.my.id"
    ],
    "founder": {
      "@type": "Person",
      "name": "Luvi Aprilyansyah Gabriel"
    },
    "description": "Jasa pembuatan website profesional, cepat, dan terjangkau di Kalimantan Timur. Spesialis landing page, portofolio UMKM, dan website bisnis kelas dunia.",
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
    "name": "Rekayasa Studio",
    "url": "https://rekayasastudio.my.id",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rekayasastudio.my.id/?s={search_term_string}",
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
      "name": "Rekayasa Studio"
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
