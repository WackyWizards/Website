'use client';

import { useEffect, useState } from 'react';
import { GTag } from '@/constants';

export default function CookieConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('analytics_enabled');
        if (consent === null) {
            setShowBanner(true);
        } else if (consent === 'true') {
            loadGoogleAnalytics();
        }
    }, []);

    const loadGoogleAnalytics = () => {
        if (window.gtagReady) return;

        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GTag}`;
        script.async = true;
        script.onload = () => {
            const inlineScript = document.createElement('script');
            inlineScript.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTag}');
            window.gtagReady = true;
        `;
            document.head.appendChild(inlineScript);
            console.log('Google Analytics loaded and initialized');
        };
        document.head.appendChild(script);
    };

    const handleAccept = () => {
        localStorage.setItem('analytics_enabled', 'true');
        loadGoogleAnalytics();
        setShowBanner(false);
    };

    const handleDecline = () => {
        localStorage.setItem('analytics_enabled', 'false');
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white px-4 py-3 z-50">
            <div className="mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <p className="text-sm sm:mr-4">
                    We use cookies to improve your experience. Read our{' '}
                    <a href="/privacy" className="underline text-blue-400 hover:text-blue-300">
                        privacy policy
                    </a>.
                </p>
                <div className="flex flex-wrap gap-2 justify-end">
                    <button
                        onClick={handleDecline}
                        className="bg-gray-600 text-white px-4 py-2 text-sm rounded hover:bg-gray-500 hover:shadow-lg transition duration-200 cursor-pointer"
                    >
                        Decline
                    </button>
                    <button
                        onClick={handleAccept}
                        className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-500 hover:shadow-lg transition duration-200 cursor-pointer"
                    >
                        Accept
                    </button>
                </div>
            </div>
        </div>
    );

}
