import type { Metadata } from "next";
import { Target, Heart, Zap, Users, Code2, Globe } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about MoghDevStudio's mission to help businesses grow online through modern websites and apps.",
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    desc: "Every project we take on is guided by one goal: helping your business grow online. We measure success by your results.",
    color: "text-primary-400",
    bg: "bg-primary-400/10",
  },
  {
    icon: Heart,
    title: "Client-Obsessed",
    desc: "We treat every client relationship like a long-term partnership. Your success is our success, and we go the extra mile every time.",
    color: "text-rose-400",
    bg: "bg-rose-400/10",
  },
  {
    icon: Zap,
    title: "Quality-First",
    desc: "We don't do mediocre. Every line of code, every design choice, every interaction is crafted with intention and precision.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

const stats = [
  { value: "50+", label: "Projects Completed", icon: Code2 },
  { value: "30+", label: "Happy Clients", icon: Users },
  { value: "5+", label: "Countries Served", icon: Globe },
  { value: "3+", label: "Years of Excellence", icon: Target },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary-600/8 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="chip">About Us</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            We Help Businesses
            <br />
            <span className="gradient-text">Grow Online</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            MoghDevStudio is a modern software development agency dedicated to building
            digital experiences that deliver measurable impact.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimateOnScroll>
              <div>
                <span className="chip mb-6 inline-flex">Our Story</span>
                <h2
                  className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  Built by Developers,
                  <br />
                  <span className="gradient-text">For Businesses</span>
                </h2>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <p>
                    MoghDevStudio was founded with a clear mission: to bridge the gap between
                    world-class software craftsmanship and businesses that need it most. Too many
                    great businesses were being left behind digitally — and we set out to change that.
                  </p>
                  <p>
                    We believe that a great website or app isn&apos;t just a digital business card —
                    it&apos;s your hardest-working team member. It should attract customers,
                    communicate your value, and convert visitors 24/7.
                  </p>
                  <p>
                    From small local businesses to scaling startups, we partner with founders and
                    teams to deliver digital products that they&apos;re genuinely proud of —
                    on time, on budget, and beyond expectations.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            {/* Visual card */}
            <AnimateOnScroll delay={150}>
              <div className="relative">
                <div className="rounded-3xl border border-primary-600/20 bg-slate-900/60 p-8 backdrop-blur">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                      <Code2 size={20} className="text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold" style={{ fontFamily: "Syne, sans-serif" }}>
                        MoghDevStudio
                      </div>
                      <div className="text-slate-400 text-sm">Software Development Agency</div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="p-5 rounded-2xl bg-white/3 border border-white/5 text-center"
                        >
                          <Icon size={20} className="text-primary-400 mx-auto mb-2" />
                          <div
                            className="text-2xl font-extrabold text-white mb-1"
                            style={{ fontFamily: "Syne, sans-serif" }}
                          >
                            {stat.value}
                          </div>
                          <div className="text-slate-400 text-xs">{stat.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Floating glow */}
                <div className="absolute -inset-4 -z-10 rounded-3xl bg-primary-600/5 blur-2xl" />
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="text-center mb-14">
              <span className="chip mb-4 inline-flex">What We Stand For</span>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Our Core <span className="gradient-text">Values</span>
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimateOnScroll key={value.title} delay={i * 100}>
                  <div className="border-glow card-hover rounded-2xl p-7 bg-slate-900/40 backdrop-blur text-center">
                    <div
                      className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center mx-auto mb-5`}
                    >
                      <Icon size={26} className={value.color} />
                    </div>
                    <h3
                      className="text-xl font-bold text-white mb-3"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
