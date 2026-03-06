import Link from "next/link";
import { Globe, Smartphone, Palette, RefreshCw, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "High-performance websites built with modern tech stacks. Fast, secure, and designed to convert visitors into customers.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
    tags: ["Next.js", "React", "SEO-Ready"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform apps that deliver seamless user experiences across iOS and Android devices.",
    color: "from-violet-500/20 to-violet-600/5",
    iconColor: "text-violet-400",
    tags: ["React Native", "Flutter", "iOS & Android"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Beautiful, intuitive interfaces crafted with user psychology in mind. Figma prototypes to pixel-perfect implementation.",
    color: "from-pink-500/20 to-pink-600/5",
    iconColor: "text-pink-400",
    tags: ["Figma", "Prototyping", "User Research"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    desc: "Transform your outdated website into a modern, high-converting digital asset without losing your existing SEO value.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
    tags: ["Migration", "Performance", "Branding"],
  },
];

export default function ServicesPreview() {
  return (
    <section className="section-pad relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            chip="What We Do"
            title="Services Built to"
            highlight="Scale Your Business"
            subtitle="From concept to launch, we deliver end-to-end digital solutions tailored to your unique goals."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimateOnScroll key={service.title} delay={i * 100}>
                <div className="group relative border-glow card-hover rounded-2xl p-6 bg-slate-900/40 backdrop-blur h-full flex flex-col">
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 transition-transform group-hover:scale-110`}
                  >
                    <Icon size={22} className={service.iconColor} />
                  </div>

                  <h3
                    className="text-white font-bold text-lg mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-white/5 rounded-full text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/services" className="btn-outline inline-flex">
            Explore All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
