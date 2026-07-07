import type { Metadata } from "next";
import { Poppins, Manrope, Dancing_Script } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { NewsletterCTA } from "@/components/home/newsletter-cta";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { GoogleAnalytics } from "@next/third-parties/google";


// Display face in the spirit of Trend Sans One ~ bold, geometric, confident.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

// Body face in the spirit of Agrandir ~ modern geometric grotesque.
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

// Google AdSense publisher ID, e.g. "ca-pub-1234567890123456".
// Set NEXT_PUBLIC_ADSENSE_CLIENT in the deployment environment to enable
// Auto Ads + ads.txt (see src/app/ads.txt/route.ts).
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

export const metadata: Metadata = {
  metadataBase: new URL("https://udreamtravels.com"),
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
    <html
      lang="en"
      className={`${poppins.variable} ${manrope.variable} ${dancingScript.variable}`}
    >
      <head>
        <meta
          name="google-site-verification"
          content="MmIFsmxGN8Jxsj08chlEiUC9Vyco9_ZFfOkFMerqod0"
        />
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="f7ac65b4-74cf-4391-b260-db19cd441e77"
          type="text/javascript"
          strategy="beforeInteractive"
          async
        />
        {ADSENSE_CLIENT && (
          <Script
            id="adsense"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="antialiased">
        <LenisProvider>
          <ScrollProgress />
          <Navbar />
          <main>{children}</main>
          <NewsletterCTA />
          <Footer />
          <BackToTop />
        </LenisProvider>
      </body>
      <GoogleAnalytics gaId="G-8D3H8C0J53" />
    </html>
  );
}
