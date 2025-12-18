import { Antonio, Outfit } from 'next/font/google';

// Optimize Antonio font
export const antonio = Antonio({
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-antonio',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

// Optimize Outfit font
export const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  preload: true,
  fallback: ['system-ui', 'arial'],
});
