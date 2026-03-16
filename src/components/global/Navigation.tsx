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
            className="absolute inset-0 bg-[#0F172A]/30 backdrop-blur-sm"
            onClick={closeMobile}
          />
          <div className="absolute right-0 top-0 h-full w-[280px] bg-white shadow-2xl flex flex-col">
            <div className="h-16 flex items-center justify-between px-5 border-b border-[#F1F5F9]">
              <span className="font-heading font-extrabold text-lg text-[#1A3C70]">
                [FIRM_NAME]<span className="text-[#D4A843]">.</span>
              </span>
              <button
                onClick={closeMobile}
                className="p-2 rounded-lg text-[#475569] hover:text-[#1A3C70] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3C70]/30"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col p-5 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    location.pathname === link.to
                      ? 'bg-[#EFF6FF] text-[#1A3C70] font-semibold border-l-2 border-[#D4A843]'
                      : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#1A3C70] border-l-2 border-transparent'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto p-5 border-t border-[#F1F5F9]">
              <Link
                to="/get-started"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_4px_14px_rgba(26,60,112,0.22)] transition-all duration-200 ease-out"
                style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
