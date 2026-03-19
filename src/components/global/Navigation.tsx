import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MoveRight } from 'lucide-react';
import Container from '../ui/Container';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/get-started' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    closeMobile();
  }, [location.pathname, closeMobile]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };
    if (mobileOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg focus:text-[#1A3C70] focus:font-semibold"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
          scrolled
            ? 'bg-[#1A3C70] shadow-[0_8px_32px_rgba(15,23,42,0.35)] border-b border-white/10'
            : 'bg-[#1A3C70] shadow-[0_8px_32px_rgba(15,23,42,0.35)] border-b border-white/5'
        }`}
      >
        <Container>
          <div className="h-16 md:h-[72px] flex items-center justify-between">
            <Link
              to="/"
              className="font-heading font-extrabold text-xl text-white tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3C70] rounded-lg"
            >
              [FIRM_NAME]<span className="text-[#D4A843]">.</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`relative text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3C70] rounded-lg px-1 pb-1 group ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-white/75 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-[#D4A843] origin-left transition-transform duration-300 ease-out ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:flex lg:items-center">
              <Link
                to="/get-started"
                className="group inline-flex items-center gap-2 rounded-xl font-semibold font-heading px-5 py-2.5 text-[13px] text-[#112347] transition-all duration-200 hover:bg-white/90 active:scale-[0.98] shadow-[0_2px_12px_rgba(255,255,255,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3C70] bg-white"
              >
                Get Started
                <MoveRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </Container>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
            onClick={closeMobile}
          />
          <div className="animate-slideInRight absolute right-0 top-0 h-full w-[300px] flex flex-col" style={{ background: 'linear-gradient(160deg, #ffffff 0%, #EEF4FF 100%)' }}>
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
              <span className="font-heading font-extrabold text-lg text-[#1A3C70]">
                [FIRM_NAME]<span className="text-[#D4A843]">.</span>
              </span>
              <button
                onClick={closeMobile}
                className="p-2.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col px-4 gap-1 pt-4">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`group relative flex items-center gap-3 px-4 py-4 rounded-xl text-[17px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[#1A3C70] bg-blue-50 font-semibold'
                        : 'text-slate-700 hover:text-[#1A3C70] hover:bg-slate-100/80'
                    }`}
                  >
                    {/* Gold dot for active */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                        isActive ? 'bg-[#D4A843]' : 'bg-transparent group-hover:bg-slate-300'
                      }`}
                    />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="mx-6 mt-6 border-t border-slate-200" />

            {/* CTA */}
            <div className="p-6">
              <Link
                to="/get-started"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-heading px-6 py-4 min-h-[52px] text-[15px] text-white bg-[#1A3C70] transition-all duration-200 hover:bg-[#163264] active:scale-[0.98] shadow-[0_2px_16px_rgba(26,60,112,0.18)]"
              >
                Get Started
                <MoveRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom decoration */}
            <div className="mt-auto px-6 pb-8 text-center">
              <p className="text-slate-400 text-xs">Trusted financial advisors</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
