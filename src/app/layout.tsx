import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bondi — Split bills, share chores & manage subscriptions fairly",
  description: "Bondi is a friendly blockchain-backed app for roommates and groups. Track expenses, chores, and recurring payments with transparent, tamper-evident records. Try the demo or start a free group.",
  keywords: [
    "bill splitting app",
    "roommate expenses", 
    "shared living",
    "chore tracking",
    "subscription manager", 
    "blockchain transparency",
    "fair settlements",
    "group expenses",
    "student housing",
    "co-living"
  ],
  authors: [{ name: "Bondi Team" }],
  openGraph: {
    title: "Bondi — Split bills, share chores & manage subscriptions fairly",
    description: "Simplify group life. One shared ledger for bills, chores, and subscriptions.",
    type: "website",
    locale: "en_US",
    siteName: "Bondi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bondi — Split bills, share chores & manage subscriptions fairly", 
    description: "Simplify group life. One shared ledger for bills, chores, and subscriptions.",
    creator: "@BondiApp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://bondi.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}