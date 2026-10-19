/**
 * Satu sumber kebenaran untuk URL situs.
 * Set NEXT_PUBLIC_SITE_URL di .env untuk mengubah URL secara dinamis.
 * Fallback ke altareka.com jika env tidak diset.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://altareka.com";

export const WA_PHONE = "6283152248722";

export function getWhatsAppUrl(message?: string): string {
  const base = `https://wa.me/${WA_PHONE}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
