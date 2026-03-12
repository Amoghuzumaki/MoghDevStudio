import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | MoghDevStudio",
    default: "MoghDevStudio — Modern Web & App Development Agency",
  },
  description:
    "MoghDevStudio helps businesses grow online through modern websites, mobile apps, and UI/UX design. Expert solutions, affordable pricing, on-time delivery.",
  keywords: [
    "web development agency",
    "app development",
    "UI UX design services",
    "website redesign",
    "software development agency"
  ],
  authors: [{ name: "MoghDevStudio" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://moghdevstudio.com",
    siteName: "MoghDevStudio",
    title: "MoghDevStudio — Modern Web & App Development Agency",
    description: "Build powerful websites & apps for modern businesses.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoghDevStudio",
    description: "Build powerful websites & apps for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MoghDevStudio",
    url: "https://mogh-dev-studio.vercel.app/",
    logo: "https://mogh-dev-studio.vercel.app/logo.png",
    sameAs: [
      "https://www.instagram.com/moghdevstudio",
      "https://www.linkedin.com/company/moghdevstudio"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}