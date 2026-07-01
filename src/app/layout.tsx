import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fraunces, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { JsonLd } from "@/components/seo/JsonLd";

const GTM_ID = "GTM-TM256VS8";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

// Editorial display serif for headings
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://moinulislam.pro";
const TITLE = "Moinul Islam Bappi — IT Executive, SEO Specialist & AI Automation Engineer";
const DESCRIPTION =
  "Moinul Islam Bappi is an IT Executive, SEO Specialist, Digital Marketing Strategist and AI Automation Engineer in Dhaka, Bangladesh. Founder of MiBrand Agency — ranking businesses on Google's first page, scaling Shopify e-commerce, and building AI automation systems for clients worldwide.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Moinul Islam Bappi",
  },
  description: DESCRIPTION,
  applicationName: "Moinul Islam Bappi Portfolio",
  keywords: [
    "Moinul Islam",
    "Moinul Islam Bappi",
    "IT Executive Bangladesh",
    "SEO Specialist Dhaka",
    "SEO Expert Bangladesh",
    "Digital Marketing Strategist Bangladesh",
    "AI Automation Engineer",
    "Shopify Expert Bangladesh",
    "Local SEO Dhaka",
    "Google Ads expert Bangladesh",
    "Meta Ads expert",
    "hire SEO expert Dhaka",
    "AI automation services",
    "AWS Certified Prompt Engineering",
    "Prompt Engineering certification",
    "MiBrand Agency",
    "e-commerce growth specialist",
    "full stack developer Bangladesh",
  ],
  authors: [{ name: "Moinul Islam Bappi", url: SITE_URL }],
  creator: "Moinul Islam Bappi",
  publisher: "Moinul Islam Bappi",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    firstName: "Moinul",
    lastName: "Islam Bappi",
    username: "moinulislam",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Moinul Islam Bappi",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Moinul Islam Bappi — IT Executive, SEO & AI Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "IT Executive, SEO Specialist & AI Automation Engineer in Dhaka, Bangladesh. Founder of MiBrand Agency.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "BD-13",
    "geo.placename": "Dhaka, Bangladesh",
    "geo.position": "23.8103;90.4125",
    ICBM: "23.8103, 90.4125",
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
        {/* Google Tag Manager */}
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
        <JsonLd />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${fraunces.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="gtm"
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
