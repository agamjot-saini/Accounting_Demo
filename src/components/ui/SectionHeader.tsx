interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  goldDot?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  centered = true,
  goldDot = true,
}: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F9] text-[#1A3C70] ring-1 ring-[#C9D5EA] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] mb-4">
          {goldDot && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]" />
          )}
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#112854] mt-3">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-[#64748B] mt-4 max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
}
