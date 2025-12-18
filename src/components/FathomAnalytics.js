'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as Fathom from 'fathom-client';

function TrackPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Initialize Fathom on mount
    const siteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID || 'HSIOXICW';

    if (siteId && siteId !== 'YOUR_FATHOM_SITE_ID') {
      Fathom.load(siteId, {
        auto: false, // Disable automatic tracking since we'll handle it manually
        spa: 'auto', // Enable SPA mode
      });
    }
  }, []);

  useEffect(() => {
    // Track pageview on route change
    const siteId = process.env.NEXT_PUBLIC_FATHOM_SITE_ID || 'HSIOXICW';

    if (siteId && siteId !== 'YOUR_FATHOM_SITE_ID') {
      Fathom.trackPageview();
    }
  }, [pathname, searchParams]);

  return null;
}

export default function FathomAnalytics() {
  return (
    <Suspense fallback={null}>
      <TrackPageView />
    </Suspense>
  );
}
