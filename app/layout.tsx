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
    default: "Altareka — Jasa Website Tenggarong, Samarinda, Balikpapan & Kaltim",
    template: "%s | Altareka",
  },
  description:
    "Jasa pembuatan website profesional di Tenggarong, Kutai Kartanegara, Samarinda, Balikpapan, IKN, dan seluruh kabupaten/kota se-Kalimantan Timur. Spesialis Company Profile PT siap tender, Katalog UMKM & Portofolio modern berkecepatan tinggi.",
  keywords: [
    "altareka",
    "www.altareka.com",
    "altareka.com",
    // Tenggarong & Kutai Kartanegara (Basis Utama)
    "jasa website tenggarong",
    "jasa pembuatan website tenggarong",
    "bikin website tenggarong",
    "web developer tenggarong",
    "jasa website kukar",
    "jasa website kutai kartanegara",
    "jasa pembuatan website kutai kartanegara",
    "web developer kukar",
    // Samarinda
    "jasa website samarinda",
    "jasa pembuatan website samarinda",
    "bikin website samarinda",
    "web developer samarinda",
    "jasa landing page samarinda",
    // Balikpapan
    "jasa website balikpapan",
    "jasa pembuatan website balikpapan",
    "bikin website balikpapan",
    "web developer balikpapan",
    "jasa company profile balikpapan",
    // Bontang & Kutai Timur
    "jasa website bontang",
    "jasa pembuatan website bontang",
    "jasa website sangatta",
    "jasa website kutai timur",
    "jasa pembuatan website sangatta",
    // Penajam Paser Utara & IKN Nusantara
    "jasa website penajam",
    "jasa website penajam paser utara",
    "jasa website sepaku",
    "jasa website ikn",
    "jasa website nusantara",
    "jasa website ibu kota nusantara",
    // Berau, Paser, Kubar, Mahulu
    "jasa website berau",
    "jasa pembuatan website berau",
    "jasa website paser",
    "jasa website tanah grogot",
    "jasa website kutai barat",
    "jasa website sendawar",
    "jasa website mahakam ulu",
    // Kalimantan Timur & Spesialisasi
    "jasa website kaltim",
    "jasa website kalimantan timur",
    "jasa pembuatan website kalimantan timur",
    "web developer kalimantan timur",
    "jasa company profile pt kaltim",
    "jasa website pt tender kaltim",
    "jasa website katalog umkm kaltim",
    "jasa pembuatan website profesional kaltim",
    "jasa web design kaltim",
    "jasa landing page murah kaltim",
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
    title: "Altareka — Jasa Website Tenggarong, Samarinda, Balikpapan & Kaltim",
    description:
      "Jasa pembuatan website profesional di Tenggarong, Kutai Kartanegara, Samarinda, Balikpapan, IKN, dan seluruh kabupaten/kota se-Kalimantan Timur. Spesialis Company Profile PT siap tender, Katalog UMKM & Portofolio modern.",
    url: SITE_URL,
    siteName: "Altareka",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Altareka — Jasa Website Tenggarong, Samarinda, Balikpapan & Kaltim",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Altareka — Jasa Website Tenggarong, Samarinda, Balikpapan & Kaltim",
    description:
      "Jasa pembuatan website profesional di Tenggarong, Kutai Kartanegara, Samarinda, Balikpapan, IKN, dan seluruh kabupaten/kota se-Kalimantan Timur. Spesialis Company Profile PT siap tender, Katalog UMKM & Portofolio modern.",
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
