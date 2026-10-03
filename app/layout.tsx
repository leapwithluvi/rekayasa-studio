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
    default: "Novareka — Jasa Website Premium & Solusi Digital",
    template: "%s | Novareka",
  },
  description:
    "Novareka menghadirkan jasa website premium, company profile, landing page, dan solusi software modern dengan performa tinggi dan desain berkelas dunia.",
  keywords: [
    "novareka",
    "novareka.com",
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
    "web developer kalimantan timur",
  ],
  authors: [{ name: "Luvi Aprilyansyah Gabriel" }],
  creator: "Luvi Aprilyansyah Gabriel",
  publisher: "Novareka",
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
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Novareka — Jasa Website Premium & Solusi Digital",
    description:
      "Novareka menghadirkan jasa website premium, company profile, landing page, dan solusi software modern dengan performa tinggi dan desain berkelas dunia.",
    url: SITE_URL,
    siteName: "Novareka",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Novareka — Jasa Website Premium & Solusi Digital",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novareka — Jasa Website Premium & Solusi Digital",
    description:
      "Novareka menghadirkan jasa website premium, company profile, landing page, dan solusi software modern dengan performa tinggi dan desain berkelas dunia.",
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
