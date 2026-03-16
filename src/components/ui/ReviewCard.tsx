import { Star } from 'lucide-react';

interface ReviewCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
}

export default function ReviewCard({ quote, author, role, rating = 5 }: ReviewCardProps) {
  return (
    <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)] h-full flex flex-col">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i <= rating ? 'text-[#F59E0B] fill-[#F59E0B]' : 'text-[#E2E8F0]'}`}
          />
        ))}
      </div>
      <p className="text-[#334155] leading-7 mb-4 flex-1">
        <span className="text-[#2563EB] font-heading text-xl font-bold mr-1">&ldquo;</span>
        {quote}
      </p>
      <div>
        <p className="font-heading font-semibold text-[#0F172A]">{author}</p>
        <p className="text-sm text-[#64748B]">{role}</p>
      </div>
    </div>
  );
}
