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
    desc: "A full-featured restaurant website featuring an interactive menu, online reservation system, and stunning food photography gallery. Built for maximum engagement and customer conversions.",
    emoji: "🍽️",
    mockColor: "from-amber-900/50 to-orange-800/30",
    tags: ["Next.js", "Tailwind CSS", "Reservations", "CMS"],
    year: "2024",
    color: "border-amber-500/20",
  },
  {
    title: "IronEdge Gym",
    category: "Fitness Platform",
    desc: "A dynamic fitness brand website with class scheduling, trainer profiles, real-time availability, and membership signup flows. Designed to energize and convert.",
    emoji: "💪",
    mockColor: "from-zinc-800/50 to-slate-700/30",
    tags: ["React", "Node.js", "Booking System", "Stripe"],
    year: "2024",
    color: "border-red-500/20",
  },
  {
    title: "Lumière Fashion Store",
    category: "Fashion E-Commerce",
    desc: "A luxury e-commerce experience for a fashion brand, featuring smooth product browsing, wishlist management, size guides, and a streamlined multi-step checkout.",
    emoji: "👗",
    mockColor: "from-rose-900/50 to-pink-800/30",
    tags: ["Next.js", "Shopify API", "Stripe", "Tailwind"],
    year: "2024",
    color: "border-rose-500/20",
  },
  {
    title: "NomadStay Apartments",
    category: "Real Estate Platform",
    desc: "A property rental platform with advanced search filters, interactive maps, virtual tour galleries, and an integrated booking and payment flow.",
    emoji: "🏠",
    mockColor: "from-teal-900/50 to-cyan-800/30",
    tags: ["Next.js", "Maps API", "Prisma", "PostgreSQL"],
    year: "2023",
    color: "border-teal-500/20",
  },
  {
    title: "MindFlow Meditation App",
    category: "Wellness App",
    desc: "A mobile-first wellness application with guided meditation sessions, progress tracking, daily streaks, and personalized content recommendations.",
    emoji: "🧘",
    mockColor: "from-violet-900/50 to-purple-800/30",
    tags: ["React Native", "Expo", "Firebase", "Audio API"],
    year: "2023",
    color: "border-violet-500/20",
  },
  {
    title: "CloudDesk SaaS Dashboard",
    category: "SaaS Dashboard",
    desc: "A comprehensive project management SaaS application with real-time collaboration, drag-and-drop kanban boards, reporting dashboards, and team analytics.",
    emoji: "📊",
    mockColor: "from-blue-900/50 to-indigo-800/30",
    tags: ["React", "TypeScript", "WebSockets", "D3.js"],
    year: "2023",
    color: "border-blue-500/20",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary-600/8 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="chip">Portfolio</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Projects That Drive
            <br />
            <span className="gradient-text">Real Results</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A showcase of our best work — spanning industries, platforms, and design styles.
            Each project is a story of a business challenge solved.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <AnimateOnScroll key={project.title} delay={i * 80}>
                <div
                  className={`group relative overflow-hidden rounded-2xl border ${project.color} bg-slate-900/40 backdrop-blur card-hover hover:shadow-2xl hover:shadow-primary-600/10 transition-all duration-300 flex flex-col`}
                >
                  {/* Project visual */}
                  <div
                    className={`relative h-52 bg-gradient-to-br ${project.mockColor} flex items-center justify-center overflow-hidden`}
                  >
                    {/* Browser chrome */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/60 backdrop-blur flex items-center px-3 gap-1.5 border-b border-white/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
                    </div>

                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    <div className="text-6xl group-hover:scale-110 transition-transform duration-500 mt-6">
                      {project.emoji}
                    </div>

                    {/* Year badge */}
                    <div className="absolute top-10 right-3 px-2.5 py-1 bg-black/40 backdrop-blur border border-white/10 rounded-lg text-xs text-slate-400">
                      {project.year}
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/15 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink
                        size={32}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3
                        className="text-white font-bold text-lg leading-snug"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-1.5 mb-3">
                      <Tag size={12} className="text-primary-400" />
                      <span className="text-primary-400 text-xs font-medium">{project.category}</span>
                    </div>

                    <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">{project.desc}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-xs text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
