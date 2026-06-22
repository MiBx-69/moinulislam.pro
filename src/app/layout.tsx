import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moinul Islam Bappi — IT Executive & Digital Marketing Strategist",
  description:
    "IT Executive, SEO Specialist, and AI Automation Engineer. Building AI-driven systems, automation pipelines, and e-commerce growth strategies that generate real business results.",
  metadataBase: new URL("https://moinulislam.pro"),
  keywords: [
    "Moinul Islam Bappi",
    "IT Executive",
    "Digital Marketing",
    "SEO Specialist",
    "AI Automation",
    "Shopify Expert",
    "Full Stack Developer",
    "Bangladesh",
  ],
  authors: [{ name: "Moinul Islam Bappi" }],
  openGraph: {
    type: "website",
    url: "https://moinulislam.pro",
    title: "Moinul Islam Bappi — IT Executive & Digital Marketing Strategist",
    description:
      "Building AI-driven systems, automation pipelines, and e-commerce growth strategies that generate real business results.",
    siteName: "Moinul Islam Bappi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moinul Islam Bappi — IT Executive & Digital Marketing Strategist",
    description:
      "Building AI-driven systems, automation pipelines, and e-commerce growth strategies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-text-primary`}
      >
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
