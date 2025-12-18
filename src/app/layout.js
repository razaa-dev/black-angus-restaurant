import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";
import FathomAnalytics from "../components/FathomAnalytics";
import { antonio, outfit } from "./fonts";

export const metadata = {
  title: "Black Angus, le restaurant qui sublime la viande à Paris 11 ème",
  description: "Le nouveau restaurant Black Angus vous propose le meilleur de la viande à Paris sur la place de la république, avec trois formules offrant de belles pièces comme le cœur de rumsteak, l'entrecôte ou le filet de bœuf.",
  robots: "max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Black Angus, le restaurant qui sublime la viande à Paris 11 ème",
    description: "Le nouveau restaurant Black Angus vous propose le meilleur de la viande à Paris sur la place de la république, avec trois formules offrant de belles pièces comme le cœur de rumsteak, l'entrecôte ou le filet de bœuf.",
    // url: "https://restaurantblackangus.com/",
    type: "website",
    locale: "fr_FR",
    siteName: "Restaurant Black Angus Paris",
  },
  icons: {
    icon: [
      { url: "/wp-content/uploads/2024/12/cropped-logo-black-angus-reseaux-sociaux-32x32.jpg", sizes: "32x32" },
      { url: "/wp-content/uploads/2024/12/cropped-logo-black-angus-reseaux-sociaux-192x192.jpg", sizes: "192x192" },
    ],
    apple: "/wp-content/uploads/2024/12/cropped-logo-black-angus-reseaux-sociaux-180x180.jpg",
  },
  manifest: '/manifest.json',
  themeColor: '#ed1d23',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Black Angus Restaurant',
  },
  other: {
    "google-site-verification": "C3QiZHyJN95SfoNwfuQo5mSAkRQYbBHFlOVGMfuKq2Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-FR" className={`${antonio.variable} ${outfit.variable}`}>
      <head>

        {/* ✅ Google Tag Manager (PRODUCTION) – must be highest in head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://analytics.restaurantblackangus.com/gmmwbh05kssnwvn.js?awl='+i.replace(/^GTM-/, '')+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-57RHP55Z');`,
          }}
        />

        <link rel="canonical" href="https://restaurantblackangus.com/" />
        <link rel="alternate" href="https://restaurantblackangus.com/" hrefLang="fr" />
        <link rel="alternate" href="https://restaurantblackangus.com/en/" hrefLang="en" />

        <style
          dangerouslySetInnerHTML={{
            __html: `
              img:is([sizes="auto" i], [sizes^="auto," i]) {
                contain-intrinsic-size: 3000px 1500px;
              }
              .lazyload { background-image: none !important; }
              .lazyload:before { background-image: none !important; }
              .country-selector.weglot-dropdown .wgcurrent a,
              .country-selector.weglot-dropdown .wgcurrent span {
                padding-right: 20px;
              }
            `,
          }}
        />
      </head>

      <body className="wp-singular page-template-default page wp-theme-breakdance-zero-theme breakdance">

        {/* ✅ Google Tag Manager (noscript) (PRODUCTION) – must appear immediately after <body> */}
        <noscript>
          <iframe
            src="https://analytics.restaurantblackangus.com/ns.html?id=GTM-57RHP55Z"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <FathomAnalytics />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {/* JavaScript files */}
        <Script src="/wp-content/plugins/weglot/dist/front-js5fba.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/breakdance/plugin/global-scripts/breakdance-utilsc93c.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/breakdance-header-builder@1/header-builderc93c.js" strategy="afterInteractive" />

        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/swiper@8/swiper-bundle.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/breakdance-swiper/breakdance-swiperc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/isotope-layout@3.0.6/isotope.pkgd.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/lightgallery@2/lightgallery-bundle.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/elements-reusable-code/lightboxc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/breakdance-gallery@1/galleryc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/imagesloaded@4/imagesloaded.pkgd.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/plugin/animations/scrolling/js/blur-pluginc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/plugin/animations/scrolling/js/parallaxc93c.js" strategy="lazyOnload" />

        <Script src="https://unpkg.com/gsap@3.12.2/dist/gsap.min.js" strategy="lazyOnload" crossOrigin="anonymous" />
        <Script src="https://unpkg.com/gsap@3.12.2/dist/ScrollTrigger.min.js" strategy="lazyOnload" crossOrigin="anonymous" />
      </body>
    </html>
  );
}
