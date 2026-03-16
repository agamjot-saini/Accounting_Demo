import { Link } from 'react-router-dom';
import { ArrowRight, Video as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export default function ServiceCard({ title, description, icon: Icon, to }: ServiceCardProps) {
  return (
    <Link to={to} className="group block">
      <div className="rounded-2xl bg-white border border-[#E2E8F0] p-7 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_40px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 ease-out h-full">
        <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center ring-1 ring-[#DBEAFE] mb-5">
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="font-heading font-bold text-lg text-[#0F172A] mb-2">{title}</h3>
        <p className="text-[#64748B] text-sm leading-6 mb-5">{description}</p>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2563EB] group-hover:text-[#1D4ED8]">
          Learn more
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  );
}
