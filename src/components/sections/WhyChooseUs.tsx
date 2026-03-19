import { Shield, MessageSquare, Zap } from 'lucide-react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';

const features = [
  {
    icon: Shield,
    title: 'Precision & Compliance',
    description: 'Every return, every filing, done right. We stay current on CRA rules so your taxes are always compliant.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'No jargon, no runaround. You\'ll always know what\'s happening, what we need, and what to expect.',
  },
  {
    icon: Zap,
    title: 'Fast & Responsive',
    description: 'New inquiries get a response within 24 hours. During tax season, we move even faster.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Why [FIRM_NAME]"
          title="An Accounting Firm That Feels Different"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-12 h-12 rounded-xl bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center ring-1 ring-[#C9D5EA] mx-auto mb-5">
                <feature.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#112854] mb-2">{feature.title}</h3>
              <p className="text-[#64748B] leading-7">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
