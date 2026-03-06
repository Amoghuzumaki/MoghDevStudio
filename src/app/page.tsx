import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "MoghDevStudio — Modern Web & App Development Agency",
  description:
    "We build powerful websites & apps for modern businesses. Expert web development, mobile apps, UI/UX design, and website redesign services.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <PortfolioPreview />
      <WhyChooseUs />
      <CTA />
    </>
  );
}
