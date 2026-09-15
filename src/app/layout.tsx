import type { Metadata } from "next";
import { Inter, Space_Grotesk, Fraunces, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { Cursor } from "@/components/ui/Cursor";
import { IntroLoader } from "@/components/ui/IntroLoader";
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
const TITLE = "Moinul Islam Bappi — IT Executive, E-commerce Automation & AI Systems";
const DESCRIPTION =
  "Moinul Islam Bappi is an IT Executive specializing in e-commerce operations, Shopify, automation, AI systems, SEO, business intelligence and custom digital platforms.";

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
    "IT Executive",
    "E-commerce Automation",
    "Shopify Automation",
    "AI Systems",
    "Digital Operations",
    "Business Intelligence",
    "Logistics Automation",
    "SEO Expert Bangladesh",
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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Moinul Islam Bappi — IT Executive, E-commerce Automation & AI Systems" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
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
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth antialiased">
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

        <IntroLoader />
        <Cursor />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
