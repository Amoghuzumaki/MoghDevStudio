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
  keywords: ["web development", "app development", "UI/UX design", "website redesign", "software agency"],
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="noise">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
