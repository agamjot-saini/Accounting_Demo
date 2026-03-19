import { Phone } from 'lucide-react';

export default function FloatingCTA() {
  return (
    <a
      href="tel:[BUSINESS_PHONE]"
      className="fixed bottom-5 right-5 z-50 md:hidden inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-white font-semibold font-heading text-sm shadow-[0_8px_24px_rgba(26,60,112,0.22)] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2"
      style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
      aria-label="Call us"
    >
      <Phone className="w-5 h-5" />
      <span>Call Us</span>
    </a>
  );
}
