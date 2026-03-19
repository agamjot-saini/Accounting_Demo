import { Video as LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  iconColor: string;
  iconBg: string;
  title: string;
  value: string;
  subtitle: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function StatCard({
  icon: Icon,
  iconColor,
  iconBg,
  title,
  value,
  subtitle,
  className = '',
  style,
}: StatCardProps) {
  return (
    <div
      className={`rounded-xl bg-white p-4 shadow-[0_6px_20px_rgba(15,23,42,0.10)] ${className}`}
      style={{
        border: '1px solid #E2E8F0',
        borderLeft: '4px solid #D4A843',
        ...style,
      }}
    >
      <div className="flex items-center gap-3 mb-2.5">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <p className="text-[11px] font-semibold text-[#64748B] uppercase tracking-widest leading-tight">{title}</p>
      </div>
      <p className="font-heading text-[26px] font-extrabold text-[#112854] leading-none mb-1">{value}</p>
      <p className="text-[11px] text-[#94A3B8]">{subtitle}</p>
    </div>
  );
}
