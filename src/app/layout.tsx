import type { Metadata } from "next";
import { Playfair_Display, Lato, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { NewsletterCTA } from "@/components/home/newsletter-cta";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { GoogleAnalytics } from "@next/third-parties/google";


const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Udream | Travel & Adventure",
  description: "A modern travel blog showcasing adventures around the world.",
  keywords: ["travel", "adventure", "blog", "exploring", "destinations"],
  authors: [{ name: "Udream" }],
  creator: "Udream",
  publisher: "Udream",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://udreamtravels.com", 
    siteName: "Udream",
    title: "Udream | Travel & Adventure",
    description: "A modern travel blog showcasing adventures around the world.",
    images: [
      {
        url: "/awu-travel-ogimage.png",
        width: 1200,
        height: 630,
        alt: "Udream Travel & Adventure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Udream | Travel & Adventure",
    description: "A modern travel blog showcasing adventures around the world.",
    images: ["/awu-travel-ogimage.png"],
    creator: "@udream",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico", // Or a specific apple-touch-icon if available
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="f7ac65b4-74cf-4391-b260-db19cd441e77"
          type="text/javascript"
          strategy="beforeInteractive"
          async
        />
      </head>
      <body
        className={`${playfairDisplay.variable} ${lato.variable} ${dancingScript.variable} antialiased`}
      >
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <NewsletterCTA />
          <Footer />
        </LenisProvider>
      </body>
      <GoogleAnalytics gaId="G-8D3H8C0J53" />
    </html>
  );
}
