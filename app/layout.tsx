import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  metadataBase: new URL("https://rekayasastudio.my.id"),
  title: {
    default: "Jasa Pembuatan Website Tenggarong & Kaltim | Rekayasa Studio",
    template: "%s | Jasa Website Rekayasa Studio",
  },
  description: "Solusi Jasa Pembuatan Website Profesional di Tenggarong & Kaltim. Spesialis Landing Page, UMKM, dan Website Bisnis dengan hasil premium & pengerjaan kilat.",
  keywords: [
    "jasa website tenggarong",
    "jasa website samarinda",
    "jasa website balikpapan",
    "jasa website bontang",
    "jasa website sangatta",
    "jasa website penajam",
    "jasa website kaltim",
    "jasa website kukar",
    "jasa website kutai kartanegara",
    "jasa pembuatan website profesional",
    "jasa landing page murah",
    "jasa web design kaltim",
    "rekayasa studio",
    "web developer kalimantan timur"
  ],
  authors: [{ name: "Luvi Aprilyansyah Gabriel" }],
  creator: "Luvi Aprilyansyah Gabriel",
  publisher: "Rekayasa Studio",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Rekayasa Studio — Jasa Pembuatan Website Profesional di Kalimantan Timur",
    description: "Desain Elevasi Bisnis Anda. Jasa website UMKM, portfolio, dan landing page di Tenggarong & sekitarnya.",
    url: "https://rekayasastudio.my.id",
    siteName: "Rekayasa Studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rekayasa Studio — Desain Elevasi Bisnis Anda",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rekayasa Studio — Jasa Pembuatan Website Profesional di Kalimantan Timur",
    description: "Jasa pembuatan website UMKM, portfolio, dan landing page profesional di Kalimantan Timur.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
