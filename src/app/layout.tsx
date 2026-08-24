import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data";

const display = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display-src",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body-src",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Full Stack Developer",
    "AI Automation Specialist",
    "Web Development",
    "Workflow Automation",
    "Webrayz IT Solutions",
    site.name,
  ],
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    images: [{ url: "/portrait.jpg", width: 4096, height: 2308 }],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#F7F7F4",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: "Webrayz IT Solutions" },
  knowsAbout: ["Full Stack Web Development", "AI Automation", "E-Commerce", "Web Applications"],
  url: site.url,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
