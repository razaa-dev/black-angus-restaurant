"use client";

import { useEffect, useRef } from "react";

export default function GalleryScripts() {
  const initializedRef = useRef(false);
  const retryCountRef = useRef(0);
  const maxRetries = 20; // Max attempts to wait for Breakdance to load
  const retryDelay = 200; // ms

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Only run on pages with .breakdance class (Home page)
    const breakdanceElements = document.querySelectorAll(".breakdance");
    if (breakdanceElements.length === 0) return;

    // Function to ensure BreakdanceFrontend.data exists
    const ensureBreakdanceFrontendData = () => {
      if (!window.BreakdanceFrontend) window.BreakdanceFrontend = {};
      if (!window.BreakdanceFrontend.data) {
        window.BreakdanceFrontend.data = {
          homeUrl: "https://restaurantblackangus.com",
          ajaxUrl: "https://restaurantblackangus.com/wp-admin/admin-ajax.php",
          elementsPluginUrl:
            "https://restaurantblackangus.com/wp-content/plugins/breakdance/subplugins/breakdance-elements/",
          
          breakpoints: [
            { id: "breakpoint_base", label: "Desktop", defaultPreviewWidth: "100%" },
            { id: "breakpoint_tablet_landscape", label: "Tablet Landscape", defaultPreviewWidth: 1024, maxWidth: 1119 },
            { id: "breakpoint_tablet_portrait", label: "Tablet Portrait", defaultPreviewWidth: 768, maxWidth: 1023 },
            { id: "breakpoint_phone_landscape", label: "Phone Landscape", defaultPreviewWidth: 480, maxWidth: 767 },
            { id: "breakpoint_phone_portrait", label: "Phone Portrait", defaultPreviewWidth: 400, maxWidth: 479 },
          ],
          subscriptionMode: "pro",
        };
      }
      return !!window.BreakdanceFrontend.data?.BASE_BREAKPOINT_ID;
    };

    // Initialize all Breakdance components safely
    const initializeBreakdanceComponents = () => {
      if (initializedRef.current) return; // Prevent multiple runs

      // STOP if Breakdance is not ready
      if (!ensureBreakdanceFrontendData()) {
        retryCountRef.current += 1;
        if (retryCountRef.current <= maxRetries) {
          setTimeout(initializeBreakdanceComponents, retryDelay);
        } else {
          console.error("BreakdanceFrontend.data not ready after max retries");
        }
        return;
      }

      // Mark as initialized
      initializedRef.current = true;

      try {
        // Header Builders
        if (typeof BreakdanceHeaderBuilder !== "undefined") {
          [".bde-header-builder-130-100", ".bde-header-builder-130-115"].forEach((sel) => {
            const el = document.querySelector(`.breakdance ${sel}`);
            if (el) new BreakdanceHeaderBuilder(`.breakdance ${sel}`, el.dataset.id || "100", false);
          });
        }

        // Swipers / Galleries
        if (typeof window.BreakdanceSwiper === "function") {
          const galleryConfigs = [
            { selector: ".bde-gallery-769-110", autoHeight: true, speed: 600 },
            { selector: ".bde-gallery-769-301", autoHeight: false, speed: 600 },
            { selector: ".bde-gallery-769-115", autoHeight: false, speed: 800 },
            { selector: ".bde-gallery-769-117", autoHeight: false, speed: 1000, centerSlides: true },
            { selector: ".bde-gallery-769-290", autoHeight: true, speed: 600 },
            { selector: ".bde-gallery-769-293", autoHeight: false, speed: 600 },
            { selector: ".bde-gallery-769-295", autoHeight: false, speed: 800 },
            { selector: ".bde-gallery-769-297", autoHeight: false, speed: 1000, centerSlides: true },
          ];

          galleryConfigs.forEach((config) => {
            const el = document.querySelector(`.breakdance ${config.selector}`);
            if (el) {
              window.BreakdanceSwiper().update({
                id: el.id,
                selector: `.breakdance ${config.selector}`,
                settings: {
                  advanced: {
                    slides_per_view: { breakpoint_base: 1 },
                    one_per_view_at: "breakpoint_phone_landscape",
                    slides_per_group: { breakpoint_base: 3 },
                    swipe_on_scroll: false,
                    auto_height: config.autoHeight,
                  },
                  infinite: "enabled",
                  autoplay: "enabled",
                  speed: { number: config.speed, unit: "ms", style: `${config.speed}ms` },
                  ...(config.centerSlides && { center_slides: true }),
                },
                paginationSettings: { type: "none" },
              });
            }
          });
        }

        // Lightboxes
        if (typeof BreakdanceLightbox !== "undefined") {
          const lightboxSelectors = [
            ".bde-gallery-769-110",
            ".bde-gallery-769-301",
            ".bde-gallery-769-115",
            ".bde-gallery-769-117",
            ".bde-gallery-769-290",
            ".bde-gallery-769-293",
            ".bde-gallery-769-295",
            ".bde-gallery-769-297",
          ];
          lightboxSelectors.forEach((sel) => {
            const el = document.querySelector(`.breakdance ${sel}`);
            if (el) {
              new BreakdanceLightbox(`.breakdance ${sel}`, {
                itemSelector: ".ee-gallery-item",
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              });
            }
          });
        }

        // Parallax
        if (typeof BreakdanceParallax !== "undefined") {
          const parallaxEl = document.querySelector(".breakdance .bde-image-769-308");
          if (parallaxEl) {
            new BreakdanceParallax(parallaxEl, { enabled: true });
          }
        }
      } catch (error) {
        console.error("Error initializing Breakdance components:", error);
      }
    };

    // Start initialization with a small delay
    const initTimer = setTimeout(() => {
      if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initializeBreakdanceComponents);
      } else {
        initializeBreakdanceComponents();
      }
    }, 100);

    return () => {
      clearTimeout(initTimer);
      document.removeEventListener("DOMContentLoaded", initializeBreakdanceComponents);
      initializedRef.current = false;
      retryCountRef.current = 0;
    };
  }, []);

  return null;
}
