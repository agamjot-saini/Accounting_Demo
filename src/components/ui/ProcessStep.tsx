interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ number, title, description, isLast = false }: ProcessStepProps) {
  return (
    <div className="relative flex gap-5">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-sm text-white flex-shrink-0"
          style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
        >
          {number}
        </div>
        {!isLast && (
          <div className="w-[2px] flex-1 bg-[#E2E8F0] mt-3" />
        )}
      </div>
      <div className={`pb-10 ${isLast ? 'pb-0' : ''}`}>
        <h3 className="font-heading font-bold text-lg text-[#0F172A] mb-2">{title}</h3>
        <p className="text-[#64748B] leading-7">{description}</p>
      </div>
    </div>
  );
}
