import { personal } from "@/data";

const SITE_URL = "https://moinulislam.pro";

/**
 * Structured data (JSON-LD) for SEO / GEO / AEO / LLMO.
 * Provides rich, machine-readable context for Google, answer engines,
 * and LLM crawlers (Person, local business, website, profile, FAQ).
 */
export function JsonLd() {
  const faqs = [
    {
      q: "Who is Moinul Islam Bappi?",
      a: "Moinul Islam Bappi is an IT Executive, SEO Specialist, Digital Marketing Strategist and AI Automation Engineer based in Dhaka, Bangladesh. He is the founder of MiBrand Agency and helps businesses rank on Google, scale e-commerce, and automate operations.",
    },
    {
      q: "What services does Moinul Islam offer?",
      a: "He offers SEO and local SEO, paid advertising on Meta, Google and TikTok, Shopify e-commerce growth and conversion optimization, AI automation systems, custom web apps, POS and admin panels, and API, webhook and CRM integrations.",
    },
    {
      q: "Where is Moinul Islam based and who does he work with?",
      a: "Moinul Islam is based in Dhaka, Bangladesh and works with both local and international clients, having expanded operations across 5+ global markets.",
    },
    {
      q: "How can I hire Moinul Islam?",
      a: "You can hire Moinul Islam directly through WhatsApp at +8801605956421, by email at mib.bappi360@gmail.com, or via the contact section of this website. He typically replies within minutes.",
    },
    {
      q: "What results has Moinul Islam delivered?",
      a: "He has completed 100+ client projects with an 85%+ retention rate, generated 10+ lakh BDT monthly revenue with under 1 lakh BDT ad spend, ranked multiple businesses on Google's first page, and built SaaS-level automation handling 1,000+ processes per second.",
    },
  ];

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: "Moinul Islam Bappi",
        alternateName: "Moinul Islam",
        url: SITE_URL,
        image: `${SITE_URL}/moinul.png`,
        email: `mailto:${personal.email}`,
        telephone: personal.phone,
        jobTitle: [
          "IT Executive",
          "SEO Specialist",
          "Digital Marketing Strategist",
          "AI Automation Engineer",
        ],
        description:
          "IT Executive, SEO Specialist, Digital Marketing Strategist and AI Automation Engineer in Dhaka, Bangladesh. Founder of MiBrand Agency.",
        worksFor: { "@id": `${SITE_URL}/#agency` },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        nationality: "Bangladeshi",
        knowsAbout: [
          "Search Engine Optimization",
          "Local SEO",
          "Generative Engine Optimization",
          "Answer Engine Optimization",
          "Google Ads",
          "Meta Ads",
          "TikTok Ads",
          "AI Automation",
          "Shopify",
          "E-commerce Growth",
          "CRM Systems",
          "API Integration",
          "Prompt Engineering",
          "Amazon Web Services (AWS)",
          "Python",
          "JavaScript",
          "Linux Server Administration",
          "Cybersecurity",
        ],
        knowsLanguage: ["Bengali", "English", "Hindi"],
        hasCredential: [
          {
            "@type": "EducationalOccupationalCredential",
            name: "Foundations of Prompt Engineering",
            credentialCategory: "Certificate",
            recognizedBy: {
              "@type": "Organization",
              name: "AWS Training & Certification",
              url: "https://aws.amazon.com/training/",
            },
            url: `${SITE_URL}/AWS-Foundations-of-Prompt-Engineering-Certificate.pdf`,
          },
          {
            "@type": "EducationalOccupationalCredential",
            name: "SEO Certification",
            credentialCategory: "Certificate",
            recognizedBy: {
              "@type": "Organization",
              name: "HubSpot Academy",
              url: "https://academy.hubspot.com/",
            },
            url: "https://app-na2.hubspot.com/academy/achievements/9z7yxlhm/en/1/moinul-islam/seo",
          },
        ],
        sameAs: [personal.linkedin, personal.agencyUrl, personal.website],
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${SITE_URL}/#agency`,
        name: "MiBrand Agency",
        url: personal.agencyUrl,
        image: `${SITE_URL}/og-image.png`,
        logo: `${SITE_URL}/icon.png`,
        email: `mailto:${personal.email}`,
        telephone: personal.phone,
        priceRange: "$$",
        founder: { "@id": `${SITE_URL}/#person` },
        description:
          "Digital marketing and AI automation agency delivering SEO, paid advertising, e-commerce growth and automation systems for local and international clients.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Dhaka",
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 23.8103,
          longitude: 90.4125,
        },
        areaServed: [
          { "@type": "Country", name: "Bangladesh" },
          { "@type": "Place", name: "Worldwide" },
        ],
        serviceType: [
          "Search Engine Optimization",
          "Digital Marketing",
          "Paid Advertising",
          "AI Automation",
          "E-commerce Development",
          "Web Development",
        ],
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "21:00",
        },
        sameAs: [personal.linkedin, personal.website],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Moinul Islam Bappi",
        description:
          "Portfolio of Moinul Islam Bappi — IT Executive, SEO Specialist & AI Automation Engineer.",
        publisher: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en",
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: "Moinul Islam Bappi — Portfolio",
        about: { "@id": `${SITE_URL}/#person` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: "en",
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
