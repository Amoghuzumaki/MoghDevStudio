"use client";

import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const projects = [
  {
    title: "Bella Vista Restaurant",
    category: "Restaurant Website",
    demo: "https://bella-vista-restaurant-one.vercel.app/",
    desc: "Elegant dining experience with online reservations, menu showcase, and ambient photography.",
    emoji: "🍽️",
    tags: ["Next.js", "Tailwind", "Reservations"],
    mockColor: "bg-gradient-to-br from-amber-900/30 to-orange-800/20",
  },
  {
    title: "IronEdge Gym",
    category: "Fitness Website",
    demo: "https://ironedge-gym.vercel.app",
    desc: "High-energy fitness brand website with class scheduling, trainer profiles, and membership plans.",
    emoji: "💪",
    tags: ["React", "Animations", "Booking"],
    mockColor: "bg-gradient-to-br from-slate-800/50 to-zinc-900/30",
  },
  {
    title: "Lumière Fashion",
    category: "E-Commerce Store",
    demo: "https://lumiere-fashion.vercel.app",
    desc: "Luxury fashion e-commerce with smooth product browsing, cart system, and checkout flow.",
    emoji: "👗",
    tags: ["Next.js", "E-Commerce", "Stripe"],
    mockColor: "bg-gradient-to-br from-rose-900/30 to-pink-800/20",
  },
];

export default function PortfolioPreview() {
  return (
    <section className="section-pad relative">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimateOnScroll>
          <SectionHeader
            chip="Portfolio"
            title="Work That"
            highlight="Speaks for Itself"
            subtitle="A curated selection of projects that showcase our design philosophy and technical craft."
          />
        </AnimateOnScroll>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {projects.map((project, i) => (
            <AnimateOnScroll key={project.title} delay={i * 120}>

              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >

                <div className="group relative overflow-hidden rounded-2xl border border-white/5 hover:border-primary-600/40 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-600/10 card-hover">

                  {/* Mock browser window */}
                  <div
                    className={`relative h-52 ${project.mockColor} flex items-center justify-center overflow-hidden`}
                  >

                    {/* Browser bar */}
                    <div className="absolute top-0 left-0 right-0 h-8 bg-slate-900/60 backdrop-blur flex items-center px-3 gap-1.5 border-b border-white/5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />

                      <div className="flex-1 mx-3 h-4 bg-white/5 rounded flex items-center px-2">
                        <span className="text-slate-500 text-[9px]">
                          moghdevstudio.com/
                          {project.title
                            .toLowerCase()
                            .replace(/\s/g, "-")}
                        </span>
                      </div>
                    </div>

                    {/* Emoji preview */}
                    <div className="text-6xl mt-6 group-hover:scale-110 transition-transform duration-300">
                      {project.emoji}
                    </div>

                    {/* Grid overlay */}
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-10 right-3 pointer-events-none">
                      <span className="px-2.5 py-1 bg-black/40 backdrop-blur border border-white/10 rounded-lg text-xs text-slate-300 font-medium">
                        {project.category}
                      </span>
                    </div>

                  </div>

                  {/* Card body */}
                  <div className="p-5 bg-slate-900/60">

                    <h3
                      className="text-white font-bold text-lg mb-2"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                      {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 bg-white/5 rounded-full text-xs text-slate-400"
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

        {/* View full portfolio button */}
        <div className="text-center mt-10">
          <Link href="/portfolio" className="btn-primary inline-flex items-center gap-2">
            View Full Portfolio
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}