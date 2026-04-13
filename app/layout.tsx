import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

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
    default: "Rekayasa Studio — Jasa Pembuatan Website Profesional di Kalimantan Timur",
    template: "%s | Rekayasa Studio",
  },
  description: "Jasa pembuatan website profesional untuk UMKM, portfolio, landing page, dan toko online di Tenggarong, Kutai Kartanegara, Kalimantan Timur. Desain modern, cepat, dan SEO friendly.",
  keywords: [
    "jasa website Kalimantan Timur",
    "jasa website Tenggarong",
    "jasa website Kutai Kartanegara",
    "jasa website UMKM",
    "jasa landing page profesional",
    "jasa toko online WhatsApp",
    "Rekayasa Studio",
    "web developer Kalimantan Timur",
    "rekayasastudio.my.id"
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
      </head>
      <body className={`${syne.variable} ${dmSans.variable} font-sans min-h-full flex flex-col bg-background text-foreground bg-gradient-premium`}>
        {children}
      </body>
    </html>
  );
}
