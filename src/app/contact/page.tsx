"use client";

import { useState } from "react";
import { Mail, Instagram, Send, CheckCircle2, ArrowRight, MessageSquare } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const contactMethods = [
  {
    icon: Mail,
    label: "Email Us",
    value: "moghdevstudio@gmail.com",
    href: "mailto:moghdevstudio@gmail.com",
    desc: "We reply within 24 hours",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/20",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@MoghDevStudio",
    href: "https://instagram.com/MoghDevStudio",
    desc: "Follow us for updates & work",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    border: "border-pink-400/20",
  },
  {
    icon: MessageSquare,
    label: "Start a Project",
    value: "Use the form below",
    href: "#contact-form",
    desc: "Tell us about your vision",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/5 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary-600/8 blur-[100px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <span className="chip">Contact Us</span>
          </div>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Let&apos;s Start Your
            <br />
            <span className="gradient-text">Next Project</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
            Have an idea, a question, or a project in mind? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {contactMethods.map((method, i) => {
              const Icon = method.icon;
              return (
                <AnimateOnScroll key={method.label} delay={i * 80}>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={`flex items-start gap-4 p-6 rounded-2xl border ${method.border} bg-slate-900/40 backdrop-blur card-hover group transition-all`}
                  >
                    <div className={`w-12 h-12 ${method.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon size={22} className={method.color} />
                    </div>
                    <div>
                      <div className="text-slate-400 text-xs uppercase tracking-widest mb-1" style={{ fontFamily: "Syne, sans-serif" }}>
                        {method.label}
                      </div>
                      <div className="text-white font-semibold mb-1">{method.value}</div>
                      <div className="text-slate-500 text-sm">{method.desc}</div>
                    </div>
                    <ArrowRight size={16} className={`${method.color} ml-auto mt-1 opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </a>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Contact Form */}
          <AnimateOnScroll>
            <div id="contact-form" className="max-w-2xl mx-auto">
              <div className="rounded-3xl border border-primary-600/20 bg-slate-900/60 backdrop-blur p-8 sm:p-12">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-emerald-400/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} className="text-emerald-400" />
                    </div>
                    <h3
                      className="text-2xl font-bold text-white mb-3"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      Message Sent!
                    </h3>
                    <p className="text-slate-400">
                      Thanks for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2
                      className="text-2xl font-bold text-white mb-2"
                      style={{ fontFamily: "Syne, sans-serif" }}
                    >
                      Send Us a Message
                    </h2>
                    <p className="text-slate-400 text-sm mb-8">
                      Fill out the form below and we&apos;ll be in touch shortly.
                    </p>

                    <form action="https://formspree.io/f/maqpyvkk" method="POST" className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="John Smith"
                          className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500 focus:bg-slate-800/80 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="you@company.com"
                          className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500 focus:bg-slate-800/80 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2" style={{ fontFamily: "Syne, sans-serif" }}>
                          Message *
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={6}
                          placeholder="Tell us about your project — what you need, your timeline, and budget range..."
                          className="w-full bg-slate-800/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-500 focus:outline-none focus:border-primary-500 focus:bg-slate-800/80 transition-all text-sm resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2.5 px-8 py-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-70 text-white font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-primary-600/30 hover:-translate-y-0.5 text-base"
                        style={{ fontFamily: "Syne, sans-serif" }}
                      >
                        {loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={17} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      <div className="pb-8" />
    </>
  );
}
