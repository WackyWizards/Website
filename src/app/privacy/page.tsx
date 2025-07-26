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
            <main className="min-h-screen bg-white py-16">
                <div className="mx-auto px-6 md:px-10 pt-6 md:pt-10 text-black">
                    <header className="mb-8 border-b border-gray-200 pb-6">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">
                            Privacy Policy
                        </h1>
                        <p className="mt-2 text-gray-600">Last Updated: July 25th, 2025</p>
                    </header>

                    <div className="prose prose-gray max-w-none">
                        <p className="mb-6 text-lg">
                            We are committed to protecting your privacy and being transparent about how we handle your data. 
                            This policy explains what information we collect, why we collect it, how we use it, and your rights 
                            regarding your personal data when you use our services.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Information We Collect</h2>
                        
                        <h3 className="text-xl font-medium mt-6 mb-3">Discord Account Registration</h3>
                        <p className="mb-2">When you register through Discord with our backend services, we collect and store:</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Your Discord User ID (required for service functionality)</li>
                            <li>Your Discord username and any associated legacy identifiers</li>
                            <li>User statistics including XP, level, and unlocked perks</li>
                            <li>Server interaction data and timestamps</li>
                        </ul>

                        <h3 className="text-xl font-medium mt-6 mb-3">Steam Account Registration</h3>
                        <p className="mb-2">When you register through Steam with our backend services, we collect and store:</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Your Steam ID (required for service functionality)</li>
                            <li>Your Steam profile name</li>
                            <li>In-game statistics including XP, level, and unlocked perks</li>
                            <li>Game session data and timestamps</li>
                        </ul>

                        <h3 className="text-xl font-medium mt-6 mb-3">Optional Linked Accounts</h3>
                        <p className="mb-2">If you choose to link third-party accounts, we may collect:</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Third-party platform identifiers</li>
                            <li>Cross-platform metadata necessary for linked features</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Legal Basis for Processing</h2>
                        <p className="mb-4">We process your data based on the following legal grounds:</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li><strong>Contractual Necessity:</strong> Processing required to provide our gaming services</li>
                            <li><strong>Legitimate Interest:</strong> Improving service quality, security, and user experience</li>
                            <li><strong>Consent:</strong> Optional features like account linking and non-essential cookies (you can withdraw consent anytime)</li>
                            <li><strong>Legal Obligation:</strong> Compliance with applicable laws and regulations</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">How We Use Your Information</h2>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Enable core gameplay features including leveling, XP tracking, and progression systems</li>
                            <li>Associate statistics and achievements with your account across platforms</li>
                            <li>Provide customer support and respond to your inquiries</li>
                            <li>Prevent fraud, abuse, and maintain service security</li>
                            <li>Analyze website usage patterns to improve our services and user experience</li>
                            <li>Monitor website performance and identify technical issues</li>
                            <li>Send important service updates and notifications</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Data Storage and Security</h2>
                        <p className="mb-4">
                            Your registered user data is stored securely in a private database with restricted access controls.
                        </p>
                        <p className="mb-4">
                            <strong>Data Location:</strong> Our primary data server is located in Helsinki, Finland. 
                            We use reputable hosting providers including Hetzner who maintain appropriate data protection standards.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">International Data Transfers</h2>
                        <p className="mb-4">
                            If you are located outside our primary server region, your data may be transferred internationally. 
                            We ensure adequate protection through:
                        </p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Standard Contractual Clauses (SCCs) with service providers</li>
                            <li>Adequacy decisions where applicable</li>
                            <li>Additional safeguards as required by local data protection laws</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Data Sharing</h2>
                        <p className="mb-4">We do not sell your personal data. We may share data only in these limited circumstances:</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li><strong>Service Providers:</strong> Trusted partners who help operate our services (hosting, analytics)</li>
                            <li><strong>Analytics Services:</strong> Website usage data may be shared with analytics providers based on your cookie preferences</li>
                            <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our rights</li>
                            <li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale (with notice)</li>
                            <li><strong>Consent:</strong> When you explicitly agree to sharing for specific purposes</li>
                        </ul>
                        <p className="mb-4">
                            <strong>Third-Party Services:</strong> When you use our website, some data may be automatically shared with third-party services we use, based on your cookie preferences:
                        </p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li><strong>Analytics Providers:</strong> If you consent to analytics cookies, usage data is shared for website performance measurement</li>
                            <li><strong>Hosting Providers:</strong> Technical data necessary for website operation (always required)</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Data Retention</h2>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li><strong>Active Accounts:</strong> Data retained while your account is active and for 2 years after last activity</li>
                            <li><strong>Inactive Accounts:</strong> Automatically deleted after 3 years of inactivity</li>
                            <li><strong>Deleted Accounts:</strong> Permanently removed within 30 days of deletion request</li>
                            <li><strong>Cookie Preferences:</strong> Stored until you change them or clear your browser data</li>
                            <li><strong>Legal Hold:</strong> Some data may be retained longer if required by law or for legitimate business purposes</li>
                            <li><strong>Backup Systems:</strong> Data in backups is deleted according to our backup retention schedule (maximum 1 year)</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Linked Accounts</h2>
                        <p className="mb-4">
                            Account linking is entirely optional and requires your explicit consent. When you link accounts, we can:
                        </p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Synchronize progress and statistics across platforms</li>
                            <li>Display unified cross-platform profiles</li>
                            <li>Enable cross-platform rewards and achievements</li>
                            <li>Provide enhanced social features</li>
                        </ul>
                        <p className="mb-4">
                            You can unlink accounts and request deletion of linked data at any time by contacting us.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Cookies and Tracking Technologies</h2>
                        <p className="mb-4">
                            We use different types of cookies and tracking technologies to provide and improve our services. 
                            You have control over which cookies we use through our cookie consent banner.
                        </p>

                        <h3 className="text-lg font-medium mt-4 mb-2">Cookie Categories</h3>
                        
                        <h4 className="text-base font-medium mt-3 mb-2">Necessary Cookies</h4>
                        <p className="mb-2">These cookies are essential for the website to function properly and cannot be disabled:</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Session management and authentication</li>
                            <li>Security features and fraud prevention</li>
                            <li>Basic website functionality</li>
                            <li>Your cookie preferences</li>
                        </ul>

                        <h4 className="text-base font-medium mt-3 mb-2">Analytics Cookies</h4>
                        <p className="mb-2">These cookies help us understand how visitors interact with our website (requires your consent):</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Pages visited and time spent on each page</li>
                            <li>How you arrived at our website (referral sources)</li>
                            <li>Your approximate geographic location (country/city level)</li>
                            <li>Device and browser information</li>
                            <li>User interactions and navigation patterns</li>
                        </ul>

                        <h3 className="text-lg font-medium mt-4 mb-2">Managing Your Cookie Preferences</h3>
                        <p className="mb-4">
                            You can control your cookie preferences through:
                        </p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li><strong>Cookie Banner:</strong> When you first visit our website, you can accept all, reject all, or customize your preferences</li>
                            <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                            <li><strong>Opt-out Tools:</strong> Some third-party services provide their own opt-out mechanisms</li>
                        </ul>
                        <p className="mb-4">
                            <strong>Note:</strong> Disabling certain cookies may limit website functionality and affect your user experience. 
                            Necessary cookies cannot be disabled as they are essential for the website to function.
                        </p>

                        <h3 className="text-lg font-medium mt-4 mb-2">Third-Party Services</h3>
                        <p className="mb-4">
                            When you consent to analytics or marketing cookies, we may use the following third-party services:
                        </p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li><strong>Google Analytics:</strong> For website analytics and user behavior insights</li>
                        </ul>
                        <p className="mb-4">
                            Each service has its own privacy policy governing how they handle your data. We encourage you to review their policies:
                        </p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Google Analytics: <a href="https://policies.google.com/privacy/partners" className="text-blue-600 underline">https://policies.google.com/privacy/partners</a></li>
                        </ul>

                        <h3 className="text-lg font-medium mt-4 mb-2">Do Not Track</h3>
                        <p className="mb-4">
                            Our website respects your cookie choices made through our consent banner. However, we do not respond to 
                            Do Not Track (DNT) signals from browsers as there is no universal standard for how to interpret these signals.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Children&apos;s Privacy</h2>
                        <p className="mb-4">
                            Our services are not intended for children under 13 years of age. We do not knowingly collect 
                            personal information from children under 13. If we become aware that we have collected personal 
                            information from a child under 13, we will take steps to delete such information promptly.
                        </p>
                        <p className="mb-4">
                            We comply with the Children&apos;s Online Privacy Protection Act (COPPA) and do not knowingly collect data from children under 13 in the United States.
                        </p>
                        <p className="mb-4">
                            If you are a parent or guardian and believe your child has provided us with personal information, 
                            please contact us immediately.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Your Privacy Rights</h2>
                        <p className="mb-4">Depending on your location, you may have the following rights:</p>
                        
                        <h3 className="text-lg font-medium mt-4 mb-2">All Users</h3>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Request access to your personal data</li>
                            <li>Request correction of inaccurate data</li>
                            <li>Request deletion of your data</li>
                            <li>Withdraw consent for optional processing (including cookie preferences)</li>
                            <li>Change your cookie preferences at any time</li>
                        </ul>

                        <h3 className="text-lg font-medium mt-4 mb-2">EU/UK Users (GDPR)</h3>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Right to data portability</li>
                            <li>Right to restrict processing</li>
                            <li>Right to object to processing</li>
                            <li>Right to lodge complaints with supervisory authorities</li>
                        </ul>

                        <h3 className="text-lg font-medium mt-4 mb-2">California Users (CCPA)</h3>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Right to know what personal information is collected</li>
                            <li>Right to delete personal information</li>
                            <li>Right to opt-out of the sale of personal information</li>
                            <li>Right to non-discrimination for exercising privacy rights</li>
                        </ul>

                        <p className="mb-4">
                            <strong>Response Time:</strong> We will respond to privacy requests within 30 days (or as required by applicable law).
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Data Deletion</h2>
                        <p className="mb-4">You can request data deletion through:</p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Your account settings (self-service deletion)</li>
                            <li>Emailing us at the contact address below</li>
                            <li>Contacting us through Discord</li>
                        </ul>
                        <p className="mb-4">
                            <strong>Processing Time:</strong> Deletion requests are processed within 14 days. Some data may be 
                            retained longer if required by law or for legitimate business purposes (e.g., fraud prevention).
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Policy Updates</h2>
                        <p className="mb-4">
                            We may update this privacy policy from time to time. When we make material changes, we will:
                        </p>
                        <ul className="list-disc list-inside mb-4 ml-4">
                            <li>Update the &quot;Last Updated&quot; date at the top of this policy</li>
                            <li>Notify users via our official discord server and in-service notifications.</li>
                            <li>Obtain new consent where required by law</li>
                        </ul>
                        <p className="mb-4">
                            Continued use of our services after policy updates constitutes acceptance of the revised policy.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">Contact Information</h2>
                        <p className="mb-4">
                            For questions, concerns, or requests regarding this privacy policy or your personal data, please contact us:
                        </p>
                        
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <p className="mb-2"><strong>📧 Email:</strong> contact.kuo.team@gmail.com</p>
                            <p className="mb-2"><strong>💬 Discord (support server):</strong> <a href="https://www.kuo-team.com/discord">https://www.kuo-team.com/discord</a></p>
                            <p className="mb-2"><strong>⏱️ Response Time:</strong> We aim to respond within 48 hours for general inquiries and within 30 days for formal privacy requests.</p>
                            <p className="text-sm text-gray-600">
                                Note: For privacy-related requests, we recommend using email for verification and documentation purposes.
                            </p>
                        </div>

                        <div className="border-t border-gray-200 pt-4">
                            <p className="text-sm text-gray-600">
                                By using our services, you agree to the terms outlined in this privacy policy. If you do not agree, please discontinue use of our services immediately.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}