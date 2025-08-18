'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import * as gtag from '@/lib/gtag';
import { GTag } from '@/constants';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    gtagReady?: boolean;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const loadGoogleAnalytics = () => {
    console.log('Loading Google Analytics...');

    // Don't load if already loaded
    if (typeof window.gtag === 'function' && window.gtagReady) {
      console.log('Google Analytics already loaded');
      return;
    }

    // Load Google Analytics script dynamically
    const script1 = document.createElement('script');
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GTag}`;
    script1.async = true;

    script1.onload = () => {
      console.log('Google Analytics script loaded successfully');

      // Initialize Google Analytics after the script loads
      const script2 = document.createElement('script');
      script2.innerHTML = `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GTag}');
                
                // Set a flag to indicate gtag is ready
                window.gtagReady = true;
                
                console.log('Google Analytics initialized successfully');
            `;
      document.head.appendChild(script2);
    };

    script1.onerror = () => {
      console.error('Failed to load Google Analytics script');
    };

    document.head.appendChild(script1);
  };

  useEffect(() => {
    const analyticsEnabled = localStorage.getItem('analytics_enabled');

    if (analyticsEnabled !== 'true') {
      console.log('Analytics disabled');
      return;
    }

    // Load Google Analytics if user has already accepted cookies
    if (!window.gtag || !window.gtagReady) {
      console.log('User has accepted cookies, loading Google Analytics...');
      loadGoogleAnalytics();
    }

    // Function to track page view
    const trackPageView = () => {
      if (!searchParams) {
        console.error('Search parameters are not available for analytics');
        return;
      }

      const url = pathname + searchParams.toString();
      console.log(`Tracking page view: ${url}`);
      gtag.pageview(url);
    };

    if (typeof window.gtag === 'function' && window.gtagReady) {
      console.log('Google Analytics ready, tracking page view immediately');
      trackPageView();
    } else {
      console.log('Waiting for Google Analytics to be ready...');

      // Wait for gtag to be ready
      const checkGtag = setInterval(() => {
        if (typeof window.gtag === 'function' && window.gtagReady) {
          console.log('Google Analytics is now ready, tracking page view');
          clearInterval(checkGtag);
          trackPageView();
        }
      }, 100);

      // Clear interval after 10 seconds to prevent infinite checking
      setTimeout(() => {
        clearInterval(checkGtag);
        console.warn('Google Analytics readiness check timed out after 10 seconds');
      }, 10000);
    }
  }, [pathname, searchParams]);

  return null;
}
