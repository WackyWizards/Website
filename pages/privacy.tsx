import React from "react";
import "../src/app/globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

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
                        <p className="mt-2 text-gray-600">Effective Date: June 21st, 2025</p>
                    </header>

                    <p className="mb-4">
                    We value your privacy. This policy outlines what data we collect, how we use it,
                    and your rights regarding your personal information when you use our related services.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">📌 What We Collect</h2>
                <p className="mb-2">
                    When you register an account with our backend services through Discord,
                    we collect and store:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Your Discord User ID</li>
                    <li>User Statistics (e.g., XP, level, perks)</li>
                </ul>
                <p className="mb-2">
                    When you register an account with our backend services through Steam,
                    we collect and store:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Your Steam ID</li>
                    <li>In-game statistics (e.g., XP, level, perks)</li>
                </ul>
                <p className="mb-2">If you optionally link a third-party account (such as Steam), we may also collect:</p>
                <ul className="list-disc list-inside mb-4">
                    <li>Your equivalent third-party identifier</li>
                    <li>Metadata needed to enable cross-service features</li>
                </ul>
                <p className="mb-4">
                    We do not collect any other personal or personally identifiable information.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">🔧 Why We Collect It</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Enable core gameplay features such as leveling and XP</li>
                    <li>Associate in-server statistics with your Discord account</li>
                </ul>

                <h2 className="text-2xl font-semibold mt-8 mb-2">🔐 How Your Data Is Stored</h2>
                <p className="mb-4">
                    Your data is stored securely in a private, access-restricted database.
                    We do not sell, share, or expose your data to third parties.
                    Our hosting providers and development tools may process data as part of normal operation,
                    but they do not access or retain your personal data for any independent purpose.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">🔗 Linked Accounts</h2>
                <p className="mb-2">
                    Users may optionally link their Discord account to a third-party service (e.g., Steam).
                    If you choose to do so, we may collect and store identifiers from both platforms to enable features such as:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Syncing data</li>
                    <li>Displaying cross-platform profiles</li>
                    <li>Unlocking rewards</li>
                </ul>
                <p className="mb-4">
                    Linking accounts is entirely optional and requires your explicit consent.
                    You can request to unlink and delete linked data at any time by contacting server administration.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">⚖️ Your Rights</h2>
                <p className="mb-4">
                    If you are located in the European Union or other regions with data protection laws, you have the right to:
                </p>
                <ul className="list-disc list-inside mb-4">
                    <li>Access the data we hold about you</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Withdraw consent for optional linked accounts</li>
                    <li>Lodge a complaint with a data protection authority</li>
                </ul>
                <p className="mb-4">We will respond to any data request within 30 days.</p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">🗑️ Data Deletion</h2>
                <p className="mb-4">
                    To delete your data, you may email us at the address below.
                    Deletion includes all stored identifiers and associated statistics.
                    Requests are processed within 14 days.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-2">💬 Contact</h2>
                <p className="mb-4">
                    For questions or concerns about this policy or your data, please contact the development team via Discord
                    or by email at:
                </p>
                <p className="font-semibold">📧 contact.kuo.team@gmail.com</p>
                </div>
            </main>
            <Footer />
        </>
    );
}
