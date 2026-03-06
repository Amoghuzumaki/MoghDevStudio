import Link from "next/link";
import { ArrowRight, MessageSquare } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function CTA() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-indigo-800" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-400/20 blur-[80px]" />

            {/* Content */}
            <div className="relative py-20 px-8 sm:px-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white/90 text-xs font-medium">Currently Accepting New Projects</span>
                </div>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
                style={{ fontFamily: "Syne, sans-serif" }}
              >
                Let&apos;s Build Something
                <br />
                <span className="text-primary-200">Amazing Together</span>
              </h2>

              <p className="text-blue-100 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Have a project in mind? We&apos;d love to hear about it. Tell us what you need and
                we&apos;ll craft the perfect solution for your business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl text-base hover:bg-blue-50 transition-all duration-200 hover:shadow-2xl hover:-translate-y-1 w-full sm:w-auto justify-center"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  <MessageSquare size={18} />
                  Start Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="flex items-center gap-2 px-8 py-4 bg-transparent text-white font-bold rounded-xl text-base border-2 border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-200 w-full sm:w-auto justify-center"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  View Our Work
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
