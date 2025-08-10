import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bondi — Shared Finance, Reimagined.",
  description: "From chaotic group chats and messy spreadsheets to a transparent, automated ledger on the blockchain. This is how modern groups manage money.",
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
    title: "Bondi — Shared Finance, Reimagined.",
    description: "The blockchain-powered solution for transparent expense sharing, chore management, and fair settlements.",
    type: "website",
    locale: "en_US",
    siteName: "Bondi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bondi — Shared Finance, Reimagined.", 
    description: "The blockchain-powered solution for transparent expense sharing, chore management, and fair settlements.",
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
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,500,400&f[]=clash-display@600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}