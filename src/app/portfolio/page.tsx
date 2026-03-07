import type { Metadata } from "next";
import { ExternalLink, Tag } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore MoghDevStudio's portfolio — restaurant websites, gym platforms, fashion e-commerce stores, and more.",
};

const projects = [
  {
    title: "Bella Vista Restaurant",
    category: "Restaurant Website",
    demo: "https://bella-vista-restaurant-one.vercel.app/",
    desc: "A full-featured restaurant website featuring an interactive menu, online reservation system, and food gallery.",
    emoji: "🍽️",
    mockColor: "from-amber-900/50 to-orange-800/30",
    tags: ["Next.js", "Tailwind", "Reservations", "CMS"],
    year: "2024",
    color: "border-amber-500/20",
  },
  {
    title: "IronEdge Gym",
    category: "Fitness Platform",
    demo: "https://ironedge-gym.vercel.app",
    desc: "A modern gym website with class scheduling, trainer profiles, and membership signup.",
    emoji: "💪",
    mockColor: "from-zinc-800/50 to-slate-700/30",
    tags: ["React", "Booking", "Stripe", "Animations"],
    year: "2024",
    color: "border-red-500/20",
  },
  {
    title: "Lumière Fashion Store",
    category: "Fashion E-Commerce",
    demo: "https://lumiere-fashion.vercel.app",
    desc: "Luxury fashion e-commerce store with product browsing, wishlist, and checkout flow.",
    emoji: "👗",
    mockColor: "from-rose-900/50 to-pink-800/30",
    tags: ["Next.js", "Stripe", "Cart", "Tailwind"],
    year: "2024",
    color: "border-rose-500/20",
  },
  {
    title: "NomadStay Apartments",
    category: "Real Estate Platform",
    demo: "https://nomadstay-apartments.vercel.app",
    desc: "Apartment booking platform with search filters, property listings, and booking flow.",
    emoji: "🏠",
    mockColor: "from-teal-900/50 to-cyan-800/30",
    tags: ["Next.js", "Maps API", "Prisma", "PostgreSQL"],
    year: "2023",
    color: "border-teal-500/20",
  },
  {
    title: "MindFlow Meditation App",
    category: "Wellness App",
    demo: "https://mindflow-meditation.vercel.app",
    desc: "Meditation platform with guided sessions, progress tracking, and daily streaks.",
    emoji: "🧘",
    mockColor: "from-violet-900/50 to-purple-800/30",
    tags: ["React Native", "Firebase", "Audio API"],
    year: "2023",
    color: "border-violet-500/20",
  },
  {
    title: "CloudDesk SaaS Dashboard",
    category: "SaaS Dashboard",
    demo: "https://clouddesk-saas1.vercel.app",
    desc: "Project management SaaS dashboard with analytics, kanban boards, and collaboration tools.",
    emoji: "📊",
    mockColor: "from-blue-900/50 to-indigo-800/30",
    tags: ["React", "TypeScript", "WebSockets", "Charts"],
    year: "2023",
    color: "border-blue-500/20",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 to-transparent pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="chip mb-4 inline-block">Portfolio</span>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Projects That Drive
            <br />
            <span className="gradient-text">Real Results</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A showcase of our best work across industries and platforms.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} delay={i * 80}>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div
                    className={`group relative overflow-hidden rounded-2xl border ${project.color} bg-slate-900/40 backdrop-blur hover:shadow-2xl hover:shadow-primary-600/10 transition-all duration-300 flex flex-col`}
                  >
                    {/* VISUAL */}
                    <div
                      className={`relative h-52 bg-gradient-to-br ${project.mockColor} flex items-center justify-center`}
                    >
                      <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/60 flex items-center px-3 gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                      </div>

                      <div className="text-6xl mt-6 group-hover:scale-110 transition-transform duration-300">
                        {project.emoji}
                      </div>

                      <div className="absolute top-10 right-3 px-2 py-1 bg-black/40 text-xs text-slate-400 rounded">
                        {project.year}
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center bg-primary-600/0 group-hover:bg-primary-600/15 transition">
                        <ExternalLink
                          size={28}
                          className="text-white opacity-0 group-hover:opacity-100 transition"
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 flex flex-col flex-1">

                      <h3 className="text-white font-bold text-lg mb-2">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-1.5 mb-3">
                        <Tag size={12} className="text-primary-400" />
                        <span className="text-primary-400 text-xs">
                          {project.category}
                        </span>
                      </div>

                      <p className="text-slate-400 text-sm flex-1 mb-4">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-white/5 rounded-full text-slate-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </a>

              </AnimateOnScroll>
            ))}

          </div>

        </div>
      </section>

      <CTA />
    </>
  );
}