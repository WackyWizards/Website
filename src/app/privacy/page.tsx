import React from 'react';
import Navbar from '@/app/components/navbar';
import Footer from '@/app/components/footer';

export const metadata = {
    title: 'Privacy Policy',
    description: 'Our privacy policy explains what data we collect, how we use it, and how you can control it across our services.'
};

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16">
                <div className="relative mx-auto max-w-4xl px-6 md:px-10 pt-6 md:pt-10">
                    <header className="mb-12 text-center border-b border-white/10 pb-8">
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-gray-400">Last Updated: August 6th, 2025</p>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-8">
                            <p className="text-xl leading-relaxed text-gray-200 mb-0">
                                We are committed to protecting your privacy and being transparent about how we handle your data. 
                                This policy explains what information we collect, why we collect it, how we use it, and your rights 
                                regarding your personal data when you use our services.
                            </p>
                        </div>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-blue-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Information We Collect
                            </h2>
                            
                            <div className="space-y-8">
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Discord Account Registration</h3>
                                    <p className="mb-4">When you register through Discord with our backend services, we collect and store:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Your Discord User ID (required for service functionality)
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Your Discord username and any associated legacy identifiers
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            User statistics including XP, level, and unlocked perks
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Server interaction data and timestamps
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Steam Account Registration</h3>
                                    <p className="mb-4">When you register through Steam with our backend services, we collect and store:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Your Steam ID (required for service functionality)
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Your Steam profile name
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            In-game statistics including XP, level, and unlocked perks
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Game session data and timestamps
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                    <h3 className="text-xl font-semibold text-white mb-4">Optional Linked Accounts</h3>
                                    <p className="mb-4">If you choose to link third-party accounts, we may collect:</p>
                                    <ul className="space-y-2 text-gray-300">
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Third-party platform identifiers
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-blue-400 mr-2">•</span>
                                            Cross-platform metadata necessary for linked features
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-emerald-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                    </svg>
                                </div>
                                Legal Basis for Processing
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <p className="mb-4">We process your data based on the following legal grounds:</p>
                                <div className="grid gap-4">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Contractual Necessity:</span>
                                            <span className="text-gray-300"> Processing required to provide our gaming services</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Legitimate Interest:</span>
                                            <span className="text-gray-300"> Improving service quality, security, and user experience</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Consent:</span>
                                            <span className="text-gray-300"> Optional features like account linking and non-essential cookies (you can withdraw consent anytime)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Legal Obligation:</span>
                                            <span className="text-gray-300"> Compliance with applicable laws and regulations</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-purple-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                How We Use Your Information
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <div className="grid gap-3">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Enable core gameplay features including leveling, XP tracking, and progression systems</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Associate statistics and achievements with your account across platforms</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Provide customer support and respond to your inquiries</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Prevent fraud, abuse, and maintain service security</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Analyze website usage patterns to improve our services and user experience</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Monitor website performance and identify technical issues</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Send important service updates and notifications</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                Data Storage and Security
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                                <p>
                                    Your registered user data is stored securely in a private database with restricted access controls.
                                </p>
                                <p>
                                    <span className="font-semibold text-white">Data Location:</span> Our primary data server is located in Helsinki, Finland. 
                                    We use reputable hosting providers including Hetzner who maintain appropriate data protection standards.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-cyan-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                International Data Transfers
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <p className="mb-4">
                                    If you are located outside our primary server region, your data may be transferred internationally. 
                                    We ensure adequate protection through:
                                </p>
                                <div className="grid gap-3">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Standard Contractual Clauses (SCCs) with service providers</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Adequacy decisions where applicable</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Additional safeguards as required by local data protection laws</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-pink-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                    </svg>
                                </div>
                                Data Sharing
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
                                <p>We do not sell your personal data. We may share data only in these limited circumstances:</p>
                                
                                <div className="grid gap-4">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Service Providers:</span>
                                            <span className="text-gray-300"> Trusted partners who help operate our services (hosting, analytics)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Analytics Services:</span>
                                            <span className="text-gray-300"> Website usage data may be shared with analytics providers based on your cookie preferences</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Legal Requirements:</span>
                                            <span className="text-gray-300"> When required by law, court order, or to protect our rights</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Business Transfers:</span>
                                            <span className="text-gray-300"> In case of merger, acquisition, or asset sale (with notice)</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Consent:</span>
                                            <span className="text-gray-300"> When you explicitly agree to sharing for specific purposes</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="border-t border-white/10 pt-4">
                                    <p className="mb-4">
                                        <span className="font-semibold text-white">Third-Party Services:</span> When you use our website, some data may be automatically shared with third-party services we use, based on your cookie preferences:
                                    </p>
                                    <div className="grid gap-3">
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3 font-bold">•</span>
                                            <div>
                                                <span className="font-semibold text-white">Analytics Providers:</span>
                                                <span className="text-gray-300"> If you consent to analytics cookies, usage data is shared for website performance measurement</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3 font-bold">•</span>
                                            <div>
                                                <span className="font-semibold text-white">Hosting Providers:</span>
                                                <span className="text-gray-300"> Technical data necessary for website operation (always required)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-yellow-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                Data Retention
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <div className="grid gap-4">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Active Accounts:</span>
                                            <span className="text-gray-300"> Data retained while your account is active and for 2 years after last activity</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Inactive Accounts:</span>
                                            <span className="text-gray-300"> Automatically deleted after 3 years of inactivity</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Deleted Accounts:</span>
                                            <span className="text-gray-300"> Permanently removed within 30 days of deletion request</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Cookie Preferences:</span>
                                            <span className="text-gray-300"> Stored until you change them or clear your browser data</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Legal Hold:</span>
                                            <span className="text-gray-300"> Some data may be retained longer if required by law or for legitimate business purposes</span>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3 font-bold">•</span>
                                        <div>
                                            <span className="font-semibold text-white">Backup Systems:</span>
                                            <span className="text-gray-300"> Data in backups is deleted according to our backup retention schedule (maximum 1 year)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-indigo-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                    </svg>
                                </div>
                                Linked Accounts
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                                <p>
                                    Account linking is entirely optional and requires your explicit consent. When you link accounts, we can:
                                </p>
                                <div className="grid gap-3">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Synchronize progress and statistics across platforms</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Display unified cross-platform profiles</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Enable cross-platform rewards and achievements</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Provide enhanced social features</span>
                                    </div>
                                </div>
                                <p>
                                    You can unlink accounts and request deletion of linked data at any time by contacting us.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-red-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                Cookies and Tracking Technologies
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
                                <p>
                                    We use different types of cookies and tracking technologies to provide and improve our services. 
                                    You have control over which cookies we use through our cookie consent banner. Only necessary cookies are enabled by default; optional cookies are only set if you provide explicit consent. You can change your preferences at any time using the banner or your browser settings.
                                </p>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Cookie Categories</h3>
                                    
                                    <div className="space-y-6">
                                        <div className="border border-white/10 rounded-lg p-4">
                                            <h4 className="text-lg font-medium text-white mb-3">Necessary Cookies</h4>
                                            <p className="mb-3">These cookies are essential for the website to function properly and cannot be disabled:</p>
                                            <div className="grid gap-2">
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>Session management and authentication</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>Security features and fraud prevention</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>Basic website functionality</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>Your cookie preferences</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border border-white/10 rounded-lg p-4">
                                            <h4 className="text-lg font-medium text-white mb-3">Analytics Cookies</h4>
                                            <p className="mb-3">These cookies help us understand how visitors interact with our website (requires your consent):</p>
                                            <div className="grid gap-2">
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>Pages visited and time spent on each page</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>How you arrived at our website (referral sources)</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>Your approximate geographic location (country/city level)</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>Device and browser information</span>
                                                </div>
                                                <div className="flex items-start">
                                                    <span className="text-blue-400 mr-3">•</span>
                                                    <span>User interactions and navigation patterns</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Managing Your Cookie Preferences</h3>
                                    <p className="mb-4">You can control your cookie preferences through:</p>
                                    <div className="grid gap-3">
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3 font-bold">•</span>
                                            <div>
                                                <span className="font-semibold text-white">Cookie Banner:</span>
                                                <span className="text-gray-300"> When you first visit our website, you can accept all, reject all, or customize your preferences</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3 font-bold">•</span>
                                            <div>
                                                <span className="font-semibold text-white">Browser Settings:</span>
                                                <span className="text-gray-300"> Most browsers allow you to control cookies through their settings</span>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3 font-bold">•</span>
                                            <div>
                                                <span className="font-semibold text-white">Opt-out Tools:</span>
                                                <span className="text-gray-300"> Some third-party services provide their own opt-out mechanisms</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mt-4">
                                        <p className="text-yellow-200">
                                            <span className="font-semibold">Note:</span> Disabling certain cookies may limit website functionality and affect your user experience. 
                                            Necessary cookies cannot be disabled as they are essential for the website to function.
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Third-Party Services</h3>
                                    <p className="mb-4">When you consent to analytics or marketing cookies, we may use the following third-party services:</p>
                                    <div className="grid gap-3">
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3 font-bold">•</span>
                                            <div>
                                                <span className="font-semibold text-white">Google Analytics:</span>
                                                <span className="text-gray-300"> For website analytics and user behavior insights</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-4 mb-2">Each service has its own privacy policy governing how they handle your data. We encourage you to review their policies:</p>
                                    <div className="grid gap-2">
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Google Analytics: <a href="https://policies.google.com/privacy/partners" className="text-blue-400 hover:text-blue-300 underline transition-colors">https://policies.google.com/privacy/partners</a></span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">Do Not Track</h3>
                                    <p>
                                        Our website respects your cookie choices made through our consent banner. However, we do not respond to 
                                        Do Not Track (DNT) signals from browsers as there is no universal standard for how to interpret these signals.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-green-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </div>
                                Children&apos;s Privacy
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                                <p>
                                    Our services are not intended for children under 13 years of age. We do not knowingly collect 
                                    personal information from children under 13. If we become aware that we have collected personal 
                                    information from a child under 13, we will take steps to delete such information promptly.
                                </p>
                                <p>
                                    We comply with the Children&apos;s Online Privacy Protection Act (COPPA) and do not knowingly collect data from children under 13 in the United States.
                                </p>
                                <p>
                                    If you are a parent or guardian and believe your child has provided us with personal information, 
                                    please contact us immediately.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-violet-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                Your Privacy Rights
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-6">
                                <p>Depending on your location, you may have the following rights:</p>
                                
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">All Users</h3>
                                    <div className="grid gap-3">
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Request access to your personal data</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Request correction of inaccurate data</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Request deletion of your data</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Withdraw consent for optional processing (including cookie preferences)</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Change your cookie preferences at any time</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">EU/UK Users (GDPR)</h3>
                                    <div className="grid gap-3">
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to data portability</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to restrict processing</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to object to processing</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to lodge complaints with supervisory authorities</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-4">California Users (CCPA)</h3>
                                    <div className="grid gap-3">
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to know what personal information is collected</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to delete personal information</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to opt-out of the sale of personal information</span>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="text-blue-400 mr-3">•</span>
                                            <span>Right to non-discrimination for exercising privacy rights</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                                    <p className="text-blue-200">
                                        <span className="font-semibold">Response Time:</span> We will respond to privacy requests within 30 days (or as required by applicable law).
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-red-600 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </div>
                                Data Deletion
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                                <p>You can request data deletion through:</p>
                                <div className="grid gap-3">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Your account settings (self-service deletion)</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Emailing us at the contact address below</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Contacting us through Discord</span>
                                    </div>
                                </div>
                                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                                    <p className="text-green-200">
                                        <span className="font-semibold">Processing Time:</span> Deletion requests are processed within 14 days. Some data may be 
                                        retained longer if required by law or for legitimate business purposes (e.g., fraud prevention).
                                    </p>
                                </div>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <div className="w-8 h-8 bg-amber-500 rounded-lg mr-3 flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                </div>
                                Policy Updates
                            </h2>
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 space-y-4">
                                <p>We may update this privacy policy from time to time. When we make material changes, we will:</p>
                                <div className="grid gap-3">
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Update the &quot;Last Updated&quot; date at the top of this policy</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Notify users via our official discord server and in-service notifications.</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-blue-400 mr-3">•</span>
                                        <span>Obtain new consent where required by law</span>
                                    </div>
                                </div>
                                <p>
                                    Continued use of our services after policy updates constitutes acceptance of the revised policy.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                            <div className="bg-gradient-to-r from-blue-500/10 to-emerald-500/10 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                                <p className="mb-6 text-lg">
                                    For questions, concerns, or requests regarding this privacy policy or your personal data, please contact us:
                                </p>
                                
                                <div className="space-y-4">
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-blue-500 rounded-lg mr-4 flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-white">Email:</span>
                                            <span className="text-gray-300 ml-2">contact.kuo.team@gmail.com</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-indigo-500 rounded-lg mr-4 flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-white">Discord:</span>
                                            <a href="https://www.kuo-team.com/discord" className="text-blue-400 hover:text-blue-300 ml-2 underline transition-colors">
                                                Support Server
                                            </a>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-8 h-8 bg-emerald-500 rounded-lg mr-4 flex items-center justify-center shrink-0">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <span className="font-semibold text-white">Response Time:</span>
                                            <span className="text-gray-300 ml-2">We aim to respond within 48 hours for general inquiries and within 30 days for formal privacy requests.</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-6 p-4 bg-white/5 border border-white/10 rounded-lg">
                                    <p className="text-sm text-gray-400">
                                        Note: For privacy-related requests, we recommend using email for verification and documentation purposes.
                                    </p>
                                </div>
                            </div>
                        </section>

                        <div className="border-t border-white/10 pt-8">
                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                                <p className="text-sm text-gray-400 text-center">
                                    By using our services, you agree to the terms outlined in this privacy policy. If you do not agree, please discontinue use of our services immediately.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};