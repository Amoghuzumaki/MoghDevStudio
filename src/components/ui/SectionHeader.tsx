interface SectionHeaderProps {
  chip?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({
  chip,
  title,
  highlight,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? "text-center" : ""}`}>
      {chip && (
        <div className={`flex ${centered ? "justify-center" : ""} mb-4`}>
          <span className="chip">{chip}</span>
        </div>
      )}
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
        style={{ fontFamily: "Syne, sans-serif" }}
      >
        {title}{" "}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-slate-400 text-lg max-w-2xl leading-relaxed ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
