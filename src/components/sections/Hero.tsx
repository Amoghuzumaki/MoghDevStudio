import Link from "next/link";
import { ArrowRight, Sparkles, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-bg">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-600/10 blur-[120px] animate-pulse2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-indigo-600/8 blur-[100px]" />
        <div className="absolute top-20 left-0 w-[300px] h-[300px] rounded-full bg-blue-800/6 blur-[80px]" />

        {/* Floating code blocks */}
        <div className="hidden lg:block absolute top-32 right-[8%] animate-float" style={{ animationDelay: "0s" }}>
          <div className="bg-slate-800/60 backdrop-blur border border-white/5 rounded-xl p-4 text-xs font-mono text-slate-400 shadow-xl">
            <div className="text-primary-400">{"const"} <span className="text-emerald-400">project</span> = {"{"}</div>
            <div className="pl-3 text-slate-500">name: <span className="text-amber-300">'amazing'</span>,</div>
            <div className="pl-3 text-slate-500">status: <span className="text-emerald-400">'delivered'</span></div>
            <div>{"}"}</div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-40 left-[6%] animate-float" style={{ animationDelay: "2s" }}>
          <div className="bg-slate-800/60 backdrop-blur border border-white/5 rounded-xl p-4 text-xs font-mono text-slate-400 shadow-xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-xs">Build Successful</span>
            </div>
            <div className="text-slate-500">✓ 48 tests passed</div>
            <div className="text-slate-500">✓ Deployed to prod</div>
          </div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Chip */}
          <div className="flex justify-center mb-8">
            <span className="chip">
              <Sparkles size={12} />
              Modern Development Agency
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Build{" "}
            <span className="gradient-text glow-text">Powerful</span>
            <br />
            Websites & Apps
            <br />
            for{" "}
            <span className="relative">
              Modern Businesses
              <svg
                className="absolute -bottom-2 left-0 w-full"
                height="6"
                viewBox="0 0 400 6"
                fill="none"
              >
                <path
                  d="M0 3 Q100 0 200 3 Q300 6 400 3"
                  stroke="#2563EB"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.7"
                />
              </svg>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-slate-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            We craft high-performance digital experiences — from sleek websites to scalable mobile apps —
            helping businesses stand out and grow in the digital era.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base w-full sm:w-auto justify-center">
              Start Your Project
              <ArrowRight size={16} />
            </Link>
            <Link href="/portfolio" className="btn-outline text-base w-full sm:w-auto justify-center">
              <Play size={16} className="fill-white" />
              View Portfolio
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {[
              { value: "50+", label: "Projects Done" },
              { value: "100%", label: "Client Satisfaction" },
              { value: "3+", label: "Years Experience" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-white mb-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-500 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
    </section>
  );
}
