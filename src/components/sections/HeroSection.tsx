import { Link } from 'react-router-dom';
import { TrendingUp, FileCheck, Clock, Award, Star, ChevronDown } from 'lucide-react';
import Container from '../ui/Container';
import StatCard from '../ui/StatCard';

export default function HeroSection() {
  return (
    <section
      className="relative py-20 md:py-24 lg:py-32 overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle, rgba(148,186,232,0.28) 1px, transparent 1px), linear-gradient(160deg, #E8F0FB 0%, #EEF4FF 45%, #F4F8FF 75%, #F8FAFC 100%)',
        backgroundSize: '28px 28px, 100% 100%',
      }}
    >
      {/* Edge fades to anchor floating cards visually */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 hidden lg:block" style={{ background: 'linear-gradient(to right, #E8F0FB 0%, transparent 100%)' }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 hidden lg:block" style={{ background: 'linear-gradient(to left, #F4F8FF 0%, transparent 100%)' }} />
      {/* Warm centre glow to ground the headline */}
      <div className="pointer-events-none absolute inset-0" style={{ background: 'radial-gradient(ellipse 55% 50% at 50% 48%, rgba(212,168,67,0.07) 0%, transparent 70%)' }} />

      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-2">

          {/* Left floating cards */}
          <div className="hidden lg:block relative flex-shrink-0" style={{ width: '208px', height: '440px' }}>
            <div className="absolute top-[30px] left-0 animate-float" style={{ animationDelay: '0.3s' }}>
              <StatCard
                icon={Award}
                iconColor="#9A6B0F"
                iconBg="#FDF6E3"
                title="Years in Practice"
                value="[X]+"
                subtitle="Trusted accounting expertise"
                className="w-[200px]"
              />
            </div>
            <div className="absolute top-[230px] left-0 animate-float" style={{ animationDelay: '0.8s' }}>
              <StatCard
                icon={FileCheck}
                iconColor="#1A3C70"
                iconBg="#EFF6FF"
                title="Returns Filed"
                value="[X]+"
                subtitle="Personal & corporate"
                className="w-[200px]"
              />
            </div>
          </div>

          {/* Centre text */}
          <div className="flex-1 text-center px-2">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] text-[#1A3C70] ring-1 ring-[#DBEAFE] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.1em] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4A843]" />
              Proudly Serving the GTA Since [X]
            </span>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-[#0F172A] mb-4">
              Trusted Tax & Accounting
              <br />
              for Individuals & Businesses
            </h1>
            <div className="w-16 h-[3px] bg-[#D4A843] rounded-full mx-auto mb-6" />

            <p className="text-base md:text-lg text-[#334155] leading-7 mb-10 max-w-lg mx-auto font-[450]">
              Personal returns, corporate filings, bookkeeping, and advisory — handled with accuracy, care, and full transparency.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                to="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-7 py-3.5 min-h-[48px] text-[15px] shadow-[0_8px_24px_rgba(26,60,112,0.22)] hover:shadow-[0_12px_32px_rgba(26,60,112,0.30)] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3C70]/40 focus-visible:ring-offset-2"
                style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
              >
                Get Started &rarr;
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#1A3C70] font-semibold font-heading px-7 py-3.5 min-h-[48px] text-[15px] border border-[#D4A843]/60 shadow-[0_2px_8px_rgba(15,23,42,0.06)] hover:bg-[#FFFBF0] hover:border-[#D4A843] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843]/40 focus-visible:ring-offset-2"
              >
                Our Services
              </Link>
            </div>

            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                {[['#1A3C70','JM'],['#1E6B5E','SR'],['#B8962E','AP'],['#475569','TK']].map(([bg, initials]) => (
                  <span
                    key={initials}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: bg, fontSize: '10px' }}
                  >
                    {initials}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4A843] text-[#D4A843]" />
                  ))}
                  <span className="ml-1 text-sm font-bold text-[#0F172A]">5.0</span>
                </div>
                <p className="text-sm text-[#64748B]">Trusted by individuals and businesses across the GTA</p>
              </div>
            </div>
          </div>

          {/* Right floating cards */}
          <div className="hidden lg:block relative flex-shrink-0" style={{ width: '208px', height: '440px' }}>
            <div className="absolute top-[30px] right-0 animate-float" style={{ animationDelay: '0s' }}>
              <StatCard
                icon={TrendingUp}
                iconColor="#1E6B5E"
                iconBg="#ECFDF5"
                title="Client Satisfaction"
                value="5.0"
                subtitle="Average Google rating"
                className="w-[200px]"
              />
            </div>
            <div className="absolute top-[230px] right-0 animate-float" style={{ animationDelay: '1s' }}>
              <StatCard
                icon={Clock}
                iconColor="#B8962E"
                iconBg="#FEFCE8"
                title="Response Time"
                value="<24h"
                subtitle="For all new inquiries"
                className="w-[200px]"
              />
            </div>
          </div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#1A3C70]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-[#D4A843] animate-bounce" />
      </div>
    </section>
  );
}
