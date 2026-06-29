import type { MetadataRoute } from "next";

const SITE_URL = "https://moinulislam.pro";

/**
 * sitemap.xml — single-page portfolio. Lists the homepage (with image
 * entries) plus the on-page section anchors so crawlers discover the
 * full content structure. The CV is included as a downloadable asset.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const sections = [
    "about",
    "services",
    "competencies",
    "achievements",
    "experience",
    "projects",
    "skills",
    "education",
    "faq",
    "contact",
  ];

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    ...sections.map((id) => ({
      url: `${SITE_URL}/#${id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${SITE_URL}/Moinul-Islam-Bappi-CV.pdf`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
