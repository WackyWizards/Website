'use client';

import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { GTag } from '@/constants';

export default function CookieConsentBanner() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const loadGoogleAnalytics = () => {
        const analyticsScript = document.createElement('script');
        analyticsScript.src = `https://www.googletagmanager.com/gtag/js?id=${GTag}`;
        analyticsScript.async = true;
        
        analyticsScript.onload = () => {
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
                
                // Log successful initialization
                console.log('Google Analytics initialized successfully');
            `;
            document.head.appendChild(script2);
        };
        
        // Handle script load error
        analyticsScript.onerror = () => {
            console.error('Failed to load Google Analytics script');
        };
        
        document.head.appendChild(analyticsScript);
    };

    const handleAccept = () => {
        console.log("User accepted cookies");
        // Set a flag to indicate analytics is enabled
        localStorage.setItem('analytics_enabled', 'true');
        loadGoogleAnalytics();
    };

    const handleDecline = () => {
        console.log("User declined cookies");
        localStorage.setItem('analytics_enabled', 'false');
        
        if (window.gtag) {
            console.log('Disabling Google Analytics...');
            window.gtag('config', GTag, {
                send_page_view: false
            });
        }
    };

    if (!mounted) {
        return null;
    }

    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            declineButtonText="Decline"
            enableDeclineButton
            onAccept={handleAccept}
            onDecline={handleDecline}
            cookieName="my_site_cookie_consent"
        >
            We use cookies to improve your experience. By continuing, you agree to our use of cookies. You can read more about our cookie policy in our <a href="/privacy" style={{ color: '#fff', textDecoration: 'underline' }}>Privacy Policy</a>.
        </CookieConsent>
    );
}