import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Moinul Islam Bappi — Portfolio",
    short_name: "Moinul Islam",
    description:
      "IT Executive, SEO Specialist & AI Automation Engineer in Dhaka, Bangladesh. Founder of MiBrand Agency.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F1EA",
    theme_color: "#177D63",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
