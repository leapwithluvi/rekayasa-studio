import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SITE_URL } from "@/lib/config";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Altareka — Jasa Website Tenggarong, Kukar & Solusi Web Kaltim",
    template: "%s | Altareka",
  },
  description:
    "Jasa pembuatan website profesional di Tenggarong, Kutai Kartanegara (Kukar), Samarinda, dan Kalimantan Timur. Spesialis Company Profile PT siap tender, Katalog UMKM & Portofolio modern berkecepatan tinggi.",
  keywords: [
    "altareka",
    "altareka.web.id",
    "jasa website tenggarong",
    "jasa pembuatan website tenggarong",
    "jasa website kukar",
    "jasa website kutai kartanegara",
    "jasa website samarinda",
    "jasa website balikpapan",
    "jasa website bontang",
    "jasa website sangatta",
    "jasa website penajam",
    "jasa website kaltim",
    "jasa website kalimantan timur",
    "jasa website ikn",
    "jasa website nusantara",
    "web developer tenggarong",
    "web developer kalimantan timur",
    "bikin website kukar",
    "jasa company profile pt",
    "jasa pembuatan website pt",
    "jasa website katalog umkm",
    "jasa pembuatan website profesional",
    "jasa landing page murah",
    "jasa web design kaltim",
  ],
  authors: [{ name: "Luvi Aprilyansyah Gabriel" }],
  creator: "Luvi Aprilyansyah Gabriel",
  publisher: "Altareka",
  category: "technology",
  classification: "Jasa Pembuatan Website & Pengembangan Perangkat Lunak",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google-site-verification",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Altareka — Jasa Website Tenggarong, Kukar & Solusi Web Kaltim",
    description:
      "Jasa pembuatan website profesional di Tenggarong, Kutai Kartanegara (Kukar), Samarinda, dan Kalimantan Timur. Spesialis Company Profile PT siap tender, Katalog UMKM & Portofolio modern.",
    url: SITE_URL,
    siteName: "Altareka",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Altareka — Jasa Website Tenggarong, Kukar & Solusi Web Kaltim",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altareka — Jasa Website Tenggarong, Kukar & Solusi Web Kaltim",
    description:
      "Jasa pembuatan website profesional di Tenggarong, Kutai Kartanegara (Kukar), Samarinda, dan Kalimantan Timur. Spesialis Company Profile PT siap tender, Katalog UMKM & Portofolio modern.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <JsonLd />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                if ('scrollRestoration' in history) {
                  history.scrollRestoration = 'manual';
                }
                window.scrollTo(0, 0);
                if (window.location.hash) {
                  window.history.replaceState({}, document.title, window.location.pathname);
                }
              }
            `,
          }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} font-sans min-h-full flex flex-col bg-background text-foreground bg-gradient-premium`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
