import Link from "next/link";
import { Code2, Mail, Instagram, ArrowUpRight } from "lucide-react";

const footerLinks = {
  Pages: [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services", label: "Website Development" },
    { href: "/services", label: "Mobile App Dev" },
    { href: "/services", label: "UI/UX Design" },
    { href: "/services", label: "Website Redesign" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080E1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <Code2 size={18} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: "Syne, sans-serif" }}>
                Mogh<span className="text-primary-400">Dev</span>Studio
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              We help businesses grow online through modern websites and apps. Expert solutions, delivered on time.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="mailto:moghdevstudio@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-primary-400 text-sm transition-colors"
              >
                <Mail size={16} />
                <span>moghdevstudio@gmail.com</span>
              </a>
            </div>
            <div className="mt-3">
              <a
                href="https://instagram.com/MoghDevStudio"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-primary-400 text-sm transition-colors"
              >
                <Instagram size={16} />
                <span>@MoghDevStudio</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-5" style={{ fontFamily: "Syne, sans-serif" }}>
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} MoghDevStudio. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
