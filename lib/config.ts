/**
 * Satu sumber kebenaran untuk URL situs.
 * Set NEXT_PUBLIC_SITE_URL di .env untuk mengubah URL secara dinamis.
 * Fallback ke rekayasastudio.my.id jika env tidak diset.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://rekayasastudio.my.id";
