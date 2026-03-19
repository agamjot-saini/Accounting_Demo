import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Container from '../ui/Container';

export default function FinalCTA() {
  return (
    <section
      className="py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: 'linear-gradient(135deg, #0D1B3E 0%, #1A3C70 100%)' }}
    >
      <Container className="text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
          Ready to Get Started?
        </h2>
        <div className="w-16 h-[3px] bg-[#D4A843] rounded-full mx-auto mb-6" />
        <p className="text-lg text-white/65 max-w-xl mx-auto mb-8">
          Whether it's personal tax, corporate filing, or bookkeeping — we'll make it clear and simple.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#112854] font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_10px_24px_rgba(0,0,0,0.20)] hover:bg-[#F8FAFC] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
          <a
            href="tel:[BUSINESS_PHONE]"
            className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] border border-[#D4A843] hover:bg-[#D4A843]/10 active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A843]/40 focus-visible:ring-offset-2"
          >
            <Phone className="w-4 h-4" />
            Call [BUSINESS_PHONE]
          </a>
        </div>
      </Container>
    </section>
  );
}
