import { Link } from 'react-router-dom';
import { Monitor, BookOpen, Heart, Linkedin } from 'lucide-react';
import Container from '../components/ui/Container';


const team = [
  {
    name: '[FIRST LAST]',
    initials: 'FL',
    role: 'Founder & Lead Accountant',
    bio: 'Over [Number] years of experience in personal and corporate tax across multiple industries.',
    linkedin: '#',
  },
  {
    name: '[FIRST LAST]',
    initials: 'AK',
    role: 'Accountant',
    bio: 'Specializes in small business accounting, bookkeeping, and CRA correspondence.',
    linkedin: '#',
  },
];

const differentiators = [
  {
    icon: Monitor,
    title: 'Professional Experience',
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
      {/* Hero */}
      <section
        className="pt-16 md:pt-20 lg:pt-24 pb-6 md:pb-8 lg:pb-10"
        style={{ backgroundImage: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 45%, #FFFFFF 100%)' }}
      >
        <Container>
          <div className="text-center mb-10">
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.08] text-[#112854] mb-3">
              About [FIRM_NAME]
            </h1>
            <p className="text-lg text-[#64748B] max-w-lg mx-auto leading-7">
              The people behind the work — a professional firm built on clarity, expertise, and genuine care.
            </p>
          </div>

          {/* Team cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_4px_16px_rgba(15,23,42,0.07)] overflow-visible">
                <div className="w-full h-28 rounded-t-2xl bg-gradient-to-br from-[#1A3C70] to-[#112854] relative">
                  <div className="absolute bottom-0 left-6 translate-y-1/2 w-16 h-16 rounded-full bg-[#1A3C70] border-4 border-white flex items-center justify-center shadow-[0_4px_16px_rgba(17,40,84,0.25)]">
                    <span className="font-heading text-lg font-extrabold text-white tracking-wide">{member.initials}</span>
                  </div>
                </div>
                <div className="pt-10 px-6 pb-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#112854] mb-0.5">{member.name}</h3>
                      <p className="text-xs font-semibold text-[#D4A843] uppercase tracking-wider mb-3">{member.role}</p>
                    </div>
                    <a
                      href={member.linkedin}
                      aria-label={`${member.name} on LinkedIn`}
                      className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center hover:bg-[#1A3C70] hover:text-white transition-colors duration-150"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-[#64748B] leading-6 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-16 lg:pb-20 bg-[#F8FAFC]">
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F9] text-[#1A3C70] ring-1 ring-[#C9D5EA] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]" />
                Our Story
              </span>
              <div className="border-l-4 border-[#D4A843] pl-6 space-y-5">
                <p className="text-[#334155] leading-7">
                  [FIRM_NAME] was built because we believe accounting doesn't have to feel complicated. Too many firms bury their clients in jargon, charge unpredictable fees, and communicate only when something goes wrong. We set out to do the opposite.
                </p>
                <p className="text-[#334155] leading-7">
                  We combine deep tax expertise with a clean, client-first experience. Our process is straightforward: you tell us what you need, we respond quickly with a clear plan, and we deliver results you can trust.
                </p>
                <p className="text-[#334155] leading-7">
                  Our clients range from individuals filing their annual return to growing businesses that need reliable, ongoing support. Whether it's a single personal tax filing or full-service corporate accounting, we bring the same level of precision and care to every engagement.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '[Number]+', label: 'Years of Experience' },
                { value: '[Number]+', label: 'Clients Served' },
                { value: '100%', label: 'CRA Compliant' },
                { value: '24h', label: 'Response Time' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white border border-[#E2E8F0] shadow-[0_2px_8px_rgba(15,23,42,0.05)] p-6 text-center">
                  <p className="font-heading text-3xl font-extrabold text-[#1A3C70] mb-1">{stat.value}</p>
                  <p className="text-xs text-[#64748B] font-medium leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF2F9] text-[#1A3C70] ring-1 ring-[#C9D5EA] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]" />
              Our Edge
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#112854] mt-3">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item) => (
              <div key={item.title} className="text-center rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] p-8 shadow-[0_2px_8px_rgba(15,23,42,0.04)]">
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#1E40AF] flex items-center justify-center ring-1 ring-[#DBEAFE] mx-auto mb-5 shadow-[0_2px_8px_rgba(30,64,175,0.10)]">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-[#112854] mb-2">{item.title}</h3>
                <p className="text-[#64748B] leading-7 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
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
          <p className="mt-4 text-sm text-[#CBD5E1]">No commitment. Free consultation.</p>
        </Container>
      </section>
    </>
  );
}
