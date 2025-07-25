import { OrgName } from "@/constants";
import { Suspense } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Analytics from "@/app/analytics";
import CookieConsent from "@/app/components/cookieconsent";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: OrgName,
    description: `${OrgName}'s Website`,
    icons: ["/logo.ico"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Suspense fallback={null}>
                    <Analytics />
                </Suspense>
                {children}
                <CookieConsent />
            </body>
        </html>
    );
}