import { Link } from 'react-router-dom';
import Container from '../ui/Container';

const serviceLinks = [
  { label: 'Personal Income Tax', to: '/services' },
  { label: 'Corporate Income Tax', to: '/services' },
  { label: 'Bookkeeping', to: '/services' },
  { label: 'HST/GST Filing', to: '/services' },
  { label: 'Business Incorporation', to: '/services' },
  { label: 'Payroll Services', to: '/services' },
  { label: 'Tax Planning', to: '/services' },
];

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Get Started', to: '/get-started' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-[#E2E8F0]">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="font-heading font-extrabold text-xl text-[#112854] tracking-tight"
            >
              [FIRM_NAME]<span className="text-[#D4A843]">.</span>
            </Link>
            <p className="mt-3 text-sm text-[#64748B] leading-6">
              Professional tax and accounting services for individuals and businesses across Ontario.
            </p>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="font-heading font-bold text-sm text-[#112854] mb-4">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#64748B] hover:text-[#112854] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-[#112854] mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-[#64748B] hover:text-[#112854] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-[#112854] mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-[#64748B]">
              <li>
                <a
                  href="tel:[BUSINESS_PHONE]"
                  className="hover:text-[#112854] transition-colors"
                >
                  [BUSINESS_PHONE]
                </a>
              </li>
              <li>
                <a
                  href="mailto:[BUSINESS_EMAIL]"
                  className="hover:text-[#112854] transition-colors"
                >
                  [BUSINESS_EMAIL]
                </a>
              </li>
              <li>[BUSINESS_ADDRESS]</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="border-t border-[#E2E8F0]">
        <Container className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[#64748B]">
            &copy; {year} [FIRM_NAME]. All rights reserved.
          </p>
          <a
            href="[GOOGLE_BUSINESS_PROFILE_LINK]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#64748B] hover:text-[#112854] transition-colors"
          >
            Google Business Profile
          </a>
        </Container>
      </div>
    </footer>
  );
}
