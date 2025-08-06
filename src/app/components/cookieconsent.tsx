'use client';

import { useEffect, useState } from 'react';
import { GTag } from '@/constants';

interface CookiePreferences {
    necessary: boolean;
    analytics: boolean;
}

const defaultPreferences: CookiePreferences = {
    necessary: true, // Always true, can't be disabled
    analytics: false
};

export default function CookieConsentBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

    useEffect(() => {
        const storedPreferences = localStorage.getItem('cookie_preferences');
        if (storedPreferences === null) {
            setShowBanner(true);
        } else {
            const parsed = JSON.parse(storedPreferences);
            setPreferences(parsed);
            if (parsed.analytics) {
                loadGoogleAnalytics();
            }
        }
    }, []);

    const loadGoogleAnalytics = () => {
        if (window.gtagReady) {
            return;
        }
        
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

    const handleToggle = (category: keyof CookiePreferences) => {
        // Can't disable necessary cookies
        if (category === 'necessary') {
            return;
        }
        
        setPreferences(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true
        };
        setPreferences(allAccepted);
        localStorage.setItem('cookie_preferences', JSON.stringify(allAccepted));
        loadGoogleAnalytics();
        setShowBanner(false);
    };

    const handleAcceptSelected = () => {
        localStorage.setItem('cookie_preferences', JSON.stringify(preferences));
        if (preferences.analytics) {
            loadGoogleAnalytics();
        }
        setShowBanner(false);
    };

    const handleRejectAll = () => {
        const onlyNecessary: CookiePreferences = {
            necessary: true,
            analytics: false
        };
        
        setPreferences(onlyNecessary);
        localStorage.setItem('cookie_preferences', JSON.stringify(onlyNecessary));
        setShowBanner(false);
    };

    if (!showBanner) {
        return null;
    }

    return (
        <div className="fixed bottom-0 inset-x-0 bg-gray-900 text-white px-4 py-4 z-50 shadow-2xl">
            <div className="max-w-4xl mx-auto">
                {!showDetails ? (
                    // Simple view
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex-1">
                            <p className="text-sm">
                                We use cookies to improve your experience and analyze site usage. 
                                <a href="/privacy" className="underline text-blue-400 hover:text-blue-300 ml-1 cursor-pointer">
                                    Learn more
                                </a>
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 justify-end">
                            <button
                                onClick={() => setShowDetails(true)}
                                className="bg-gray-600 text-white px-4 py-2 text-sm rounded hover:bg-gray-500 transition duration-200 cursor-pointer"
                            >
                                Customize
                            </button>
                            <button
                                onClick={handleRejectAll}
                                className="bg-gray-600 text-white px-4 py-2 text-sm rounded hover:bg-gray-500 transition duration-200 cursor-pointer"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                ) : (
                    // Detailed view
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Cookie Preferences</h3>
                            <button
                                onClick={() => setShowDetails(false)}
                                className="text-gray-400 hover:text-white text-xl cursor-pointer"
                            >
                                ×
                            </button>
                        </div>
                        
                        <div className="space-y-3">
                            {/* Necessary Cookies */}
                            <div className="flex items-start justify-between p-3 bg-gray-800 rounded">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-medium">Necessary Cookies</h4>
                                        <span className="text-xs bg-green-600 px-2 py-1 rounded">Always Active</span>
                                    </div>
                                    <p className="text-xs text-gray-300 mt-1">
                                        Essential for the website to function properly. Cannot be disabled.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <div className="w-10 h-6 bg-green-600 rounded-full flex items-center justify-end px-1">
                                        <div className="w-4 h-4 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="flex items-start justify-between p-3 bg-gray-800 rounded">
                                <div className="flex-1">
                                    <h4 className="font-medium">Analytics Cookies</h4>
                                    <p className="text-xs text-gray-300 mt-1">
                                        Help us understand how visitors interact with our website.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <button
                                        onClick={() => handleToggle('analytics')}
                                        className={`w-10 h-6 rounded-full flex items-center transition-colors duration-200 ${
                                            preferences.analytics 
                                                ? 'bg-blue-600 justify-end' 
                                                : 'bg-gray-600 justify-start'
                                        } px-1 cursor-pointer`}
                                    >
                                        <div className="w-4 h-4 bg-white rounded-full"></div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-end pt-2">
                            <button
                                onClick={handleRejectAll}
                                className="bg-gray-600 text-white px-4 py-2 text-sm rounded hover:bg-gray-500 transition duration-200 cursor-pointer"
                            >
                                Reject All
                            </button>
                            <button
                                onClick={handleAcceptSelected}
                                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
                            >
                                Accept Selected
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-500 transition duration-200 cursor-pointer"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}