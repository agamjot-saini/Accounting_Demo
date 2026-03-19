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
            ? 'bg-[#1A3C70] shadow-[0_4px_24px_rgba(15,23,42,0.22)] border-b border-white/5'
            : 'bg-[#1A3C70] backdrop-blur-md border-b border-white/10'
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
                className="group flex flex-col items-center gap-0 px-3 py-1 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3C70]"
              >
                <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-white/90 group-hover:text-white transition-colors duration-200">
                  Get Started
                </span>
                <MoveRight className="w-[18px] h-[18px] text-[#D4A843] transition-transform duration-300 ease-out group-hover:translate-x-2" />
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
          <div className="absolute right-0 top-0 h-full w-[300px] flex flex-col" style={{ background: 'linear-gradient(160deg, #1A3C70 0%, #0F1D3A 100%)' }}>
            {/* Header */}
            <div className="h-16 flex items-center justify-between px-6 border-b border-white/10">
              <span className="font-heading font-extrabold text-lg text-white">
                [FIRM_NAME]<span className="text-[#D4A843]">.</span>
              </span>
              <button
                onClick={closeMobile}
                className="p-2 rounded-lg text-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Tagline */}
            <p className="px-6 pt-6 pb-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#D4A843]/80">
              Navigation
            </p>

            {/* Nav Links */}
            <nav className="flex flex-col px-4 gap-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`group relative flex items-center gap-3 px-4 py-4 rounded-xl text-[17px] font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {/* Gold dot for active */}
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200 ${
                        isActive ? 'bg-[#D4A843]' : 'bg-transparent group-hover:bg-white/30'
                      }`}
                    />
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="mx-6 mt-6 border-t border-white/10" />

            {/* CTA */}
            <div className="p-6">
              <Link
                to="/get-started"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl font-semibold font-heading px-6 py-4 min-h-[52px] text-[15px] text-[#112347] transition-all duration-200 hover:brightness-110 active:scale-[0.98] shadow-[0_4px_20px_rgba(212,168,67,0.35)]"
                style={{ background: '#D4A843' }}
              >
                Get Started
                <MoveRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Bottom decoration */}
            <div className="mt-auto px-6 pb-8 text-center">
              <p className="text-white/20 text-xs">Trusted financial advisors</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
