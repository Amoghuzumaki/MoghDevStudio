import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Smartphone, Palette, RefreshCw, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our full range of digital services — website development, mobile app development, UI/UX design, and website redesign.",
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "We build fast, scalable, SEO-optimized websites that help businesses establish a powerful online presence. From landing pages to complex web platforms, we engineer solutions with modern frameworks that deliver exceptional performance and user experience.",
    iconColor: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
    benefits: [
      "Custom design tailored to your brand",
      "Built with Next.js for maximum speed",
      "SEO-optimized from the ground up",
      "Fully responsive across all devices",
      "CMS integration (Sanity, Contentful, Strapi)",
      "Analytics & performance monitoring",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "From idea to App Store, we develop polished mobile applications for iOS and Android. Our mobile-first approach ensures apps that feel native, perform flawlessly, and keep users engaged. We handle everything from architecture to launch.",
    iconColor: "text-violet-400",
    bg: "bg-violet-400/10",
    border: "border-violet-400/20",
    benefits: [
      "Cross-platform iOS & Android development",
      "Native performance & feel",
      "Push notifications & real-time features",
      "Offline capability & data sync",
      "App Store & Play Store submission",
      "Post-launch support & updates",
    ],
    tech: ["React Native", "Expo", "Flutter", "Firebase", "AWS"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Design is more than aesthetics — it's strategy. We create user-centered interfaces that guide visitors toward action. Our design process involves research, wireframing, prototyping, and pixel-perfect execution in Figma before a single line of code is written.",
    iconColor: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
    benefits: [
      "User research & persona development",
      "Information architecture planning",
      "Interactive Figma prototypes",
      "Design system & component library",
      "Usability testing & iteration",
      "Developer handoff with specs",
    ],
    tech: ["Figma", "Adobe XD", "Maze", "Hotjar", "Lottie"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Is your current website costing you customers? We audit, strategize, and rebuild websites to boost performance, engagement, and conversions — all while maintaining or improving your existing search rankings. No content is lost, only improved.",
    iconColor: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    benefits: [
      "Comprehensive site audit & analysis",
      "SEO preservation & improvement",
      "Content migration & optimization",
      "Performance & Core Web Vitals boost",
      "Modern design & brand refresh",
      "Conversion rate optimization",
    ],
    tech: ["Next.js", "WordPress", "Webflow", "Shopify", "Lighthouse"],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary-600/8 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="chip">Our Services</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Everything You Need to
            <br />
            <span className="gradient-text">Succeed Online</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Full-spectrum digital services designed to turn your vision into a high-performing
            digital product that drives real business results.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll key={service.title} delay={100}>
                <div
                  className={`rounded-3xl border ${service.border} bg-slate-900/40 backdrop-blur overflow-hidden`}
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                      i % 2 === 1 ? "lg:flex lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content */}
                    <div className="p-8 sm:p-12 flex flex-col justify-center">
                      <div
                        className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center mb-6`}
                      >
                        <Icon size={28} className={service.iconColor} />
                      </div>

                      <h2
                        className="text-2xl sm:text-3xl font-bold text-white mb-4"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {service.title}
                      </h2>
                      <p className="text-slate-400 leading-relaxed mb-8">{service.desc}</p>

                      <Link href="/contact" className="btn-primary self-start">
                        Get Started
                        <ArrowRight size={16} />
                      </Link>
                    </div>

                    {/* Benefits */}
                    <div className={`p-8 sm:p-12 bg-white/2 border-t lg:border-t-0 ${i % 2 === 1 ? "lg:border-r" : "lg:border-l"} border-white/5`}>
                      <h3
                        className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        What&apos;s Included
                      </h3>
                      <ul className="space-y-4 mb-8">
                        {service.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-start gap-3 text-slate-300 text-sm">
                            <CheckCircle2 size={16} className={`${service.iconColor} mt-0.5 flex-shrink-0`} />
                            {benefit}
                          </li>
                        ))}
                      </ul>

                      <div>
                        <p className="text-xs text-slate-500 uppercase tracking-widest mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {service.tech.map((t) => (
                            <span
                              key={t}
                              className="px-3 py-1.5 bg-white/5 border border-white/8 rounded-lg text-xs text-slate-400 font-medium"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </section>

      <CTA />
    </>
  );
}
