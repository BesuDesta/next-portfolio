import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

//Please replace placeholders with your content for SEO
export const metadata: Metadata = {
  title: "Next.js portfolio template",
  description: "description",
  icons: {
    //icon displayed in the browser tab and bookmarks
    icon: "favicon.ico",
  },
  //openGraph is used by platforms like Facebook, LinkedIn, and others to generate link previews when sharing a page.
  openGraph: {
    title: "Next.js portfolio template",
    description: "description",
    url: "link to deployed portfolio",
    siteName: "sitename",
    images: [
      {
        url: "/metadata/<image>",
        width: 1200,
        height: 630,
        alt: "portfolio-image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Next.js portfolio template",
    description: "description",
    images: ["/metadata/<image>"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="flex justify-center">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
