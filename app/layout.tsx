import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Rekayasa Studio — Jasa Pembuatan Website & Landing Page Premium",
  description: "Bantu bisnis UMKM dan profesional melek digital dengan website berperforma tinggi, desain minimalis modern, dan hasil yang mengonversi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${syne.variable} ${dmSans.variable} font-sans min-h-full flex flex-col bg-background text-foreground bg-gradient-premium`}>
        {children}
      </body>
    </html>
  );
}
