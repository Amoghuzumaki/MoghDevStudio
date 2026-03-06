import { Lightbulb, DollarSign, Clock, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const features = [
  {
    icon: Lightbulb,
    title: "Expert Solutions",
    desc: "Our team brings deep expertise across modern tech stacks — Next.js, React Native, Figma, and more. We architect solutions that scale with your business.",
    points: ["Senior developers & designers", "Modern technology stack", "Best practices & clean code"],
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    border: "border-amber-400/20",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Premium quality without the agency markup. We offer transparent, competitive pricing tailored for startups, SMBs, and growing businesses.",
    points: ["No hidden fees", "Flexible payment plans", "ROI-focused approach"],
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We treat deadlines as commitments. Structured project management and clear milestones ensure your product launches when promised.",
    points: ["Agile sprint methodology", "Regular progress updates", "No deadline surprises"],
    color: "text-primary-400",
    bg: "bg-primary-400/10",
    border: "border-primary-400/20",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-pad relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary-600/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll>
          <SectionHeader
            chip="Why Us"
            title="The MoghDev"
            highlight="Difference"
            subtitle="Three pillars that define how we work — and why clients keep coming back."
          />
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <AnimateOnScroll key={f.title} delay={i * 120}>
                <div className={`relative rounded-2xl p-7 border ${f.border} bg-slate-900/40 backdrop-blur card-hover group h-full flex flex-col`}>
                  {/* Icon */}
                  <div className={`w-13 h-13 w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                    <Icon size={24} className={f.color} />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{f.desc}</p>

                  {/* Points */}
                  <ul className="space-y-2.5">
                    {f.points.map((point) => (
                      <li key={point} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 size={14} className={f.color} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
