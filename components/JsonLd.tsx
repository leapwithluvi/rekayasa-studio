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
    "areaServed": "Indonesia",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website UMKM"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Personal Portfolio"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Landing Page"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Toko Online"
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
