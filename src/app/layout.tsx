import { OrgName, GTag } from "@/constants";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Analytics from "@/app/analytics";
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
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GTag}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GTag}');
                `}
            </Script>

            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Analytics />
                {children}
            </body>
        </html>
    );
}
