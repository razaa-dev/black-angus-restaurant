"use client";

import { useEffect, useRef } from "react";

export default function TrustindexWidget() {
  const containerRef = useRef(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Prevent double loading in development mode
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    // Load the Trustindex script dynamically
    const script = document.createElement("script");
    script.src = "https://cdn.trustindex.io/loader.js?ff5628959853892e7856e1da21d";
    script.defer = true;
    script.async = true;

    // Append to the container instead of body
    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    // Cleanup function to remove script when component unmounts
    return () => {
      if (containerRef.current && containerRef.current.contains(script)) {
        containerRef.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="bde-shortcode-769-365 bde-shortcode trustindex-widget-container"
    >
      {/* The Trustindex script will automatically inject the widget here */}
    </div>
  );
}
