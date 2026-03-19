import { Link } from 'react-router-dom';
import { Monitor, BookOpen, Heart } from 'lucide-react';
import Container from '../components/ui/Container';

const differentiators = [
  {
    icon: Monitor,
    title: 'Modern Experience',
    description: 'From our intake process to how we communicate, everything is designed to be clear and efficient. No unnecessary meetings. No piles of paperwork.',
  },
  {
    icon: BookOpen,
    title: 'Deep Expertise',
    description: 'Our team stays current on CRA regulations, provincial tax rules, and the latest strategies to protect your bottom line.',
  },
  {
    icon: Heart,
    title: 'Client-First Approach',
    description: 'We treat your finances like they matter — because they do. You\'ll always get honest advice and responsive communication.',
  },
];

export default function About() {
  return (
    <>
      <section
        className="py-16 md:py-20 lg:py-28"
        style={{ backgroundImage: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 45%, #FFFFFF 100%)' }}
      >
        <Container className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#112854] mb-6">
            About [FIRM_NAME]
          </h1>
          <p className="text-lg text-[#334155] leading-7 max-w-2xl mx-auto">
            A modern approach to tax and accounting.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F9] text-[#1A3C70] ring-1 ring-[#C9D5EA] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]" />
              Our Story
            </span>
            <p className="text-[#334155] leading-7 mb-5">
              [FIRM_NAME] was built because we believe accounting doesn't have to feel complicated. Too many firms bury their clients in jargon, charge unpredictable fees, and communicate only when something goes wrong. We set out to do the opposite.
            </p>
            <p className="text-[#334155] leading-7 mb-5">
              We combine deep tax expertise with a clean, client-first experience — the kind you'd expect from a modern tech company, not a traditional firm. Our process is straightforward: you tell us what you need, we respond quickly with a clear plan, and we deliver results you can trust.
            </p>
            <p className="text-[#334155] leading-7">
              Our clients range from individuals filing their annual return to growing businesses that need reliable, ongoing support. Whether it's a single personal tax filing or full-service corporate accounting, we bring the same level of precision and care to every engagement.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 lg:py-28 bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F9] text-[#1A3C70] ring-1 ring-[#C9D5EA] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]" />
              What Sets Us Apart
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#112854] mt-3">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center ring-1 ring-[#DBEAFE] mx-auto mb-5">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#112854] mb-2">{item.title}</h3>
                <p className="text-[#64748B] leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20 lg:py-28">
        <Container>
          <div className="max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F9] text-[#1A3C70] ring-1 ring-[#C9D5EA] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] mb-6">
              Our Team
            </span>
            <div className="rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-10 text-center">
              <p className="text-[#64748B] font-medium">
                [TEAM_SECTION — Add team member bios and photos here]
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section
        className="py-16 md:py-20 lg:py-28"
        style={{ backgroundImage: 'linear-gradient(135deg, #0D1B3E 0%, #1A3C70 100%)' }}
      >
        <Container className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-8">
            Get in touch and we'll respond within 24 hours with a clear plan for your situation.
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#112854] font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_10px_24px_rgba(0,0,0,0.20)] hover:bg-[#F8FAFC] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
        </Container>
      </section>
    </>
  );
}
