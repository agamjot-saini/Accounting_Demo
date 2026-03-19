import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import ReviewCard from '../ui/ReviewCard';

const reviews = [
  {
    quote: '[REVIEW_QUOTE_1]',
    author: '[CLIENT_NAME]',
    role: 'Personal Tax Client',
  },
  {
    quote: '[REVIEW_QUOTE_2]',
    author: '[CLIENT_NAME]',
    role: 'Small Business Owner',
  },
  {
    quote: '[REVIEW_QUOTE_3]',
    author: '[CLIENT_NAME]',
    role: 'Corporate Client',
  },
  {
    quote: '[REVIEW_QUOTE_4]',
    author: '[CLIENT_NAME]',
    role: 'Startup Founder',
  },
  {
    quote: '[REVIEW_QUOTE_5]',
    author: '[CLIENT_NAME]',
    role: 'Real Estate Investor',
  },
  {
    quote: '[REVIEW_QUOTE_6]',
    author: '[CLIENT_NAME]',
    role: 'Freelance Consultant',
  },
];

const MOBILE_BREAKPOINT = 768;
const SCROLL_SPEED = 0.6; // px per frame

export default function ReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const rafRef = useRef<number>();

  useEffect(() => {
    const container = containerRef.current;
    if (!container || window.innerWidth >= MOBILE_BREAKPOINT) return;

    // Start mid-track so a partial card is already visible on the left
    container.scrollLeft = container.scrollWidth / 4;

    function step() {
      if (container && !isPaused.current) {
        container.scrollLeft += SCROLL_SPEED;
        // Seamless loop: jump back when we've scrolled through the first copy
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function handleTouchStart() {
    isPaused.current = true;
  }

  function handleTouchEnd() {
    isPaused.current = false;
  }

  return (
    <section className="pt-16 pb-10 md:pt-20 md:pb-14 lg:pt-28 lg:pb-16 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Client Reviews"
          title="What Our Clients Say"
        />

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm">
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              ))}
            </div>
            <span className="text-[#112854] font-semibold whitespace-nowrap">5.0 on Google</span>
          </div>
          <span className="w-px h-4 bg-[#CBD5E1] hidden sm:block" />
          <span className="text-[#64748B] whitespace-nowrap">[X] reviews</span>
          <span className="w-px h-4 bg-[#CBD5E1] hidden sm:block" />
          <a
            href="[GOOGLE_REVIEW_LINK]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A3C70] hover:text-[#153160] font-medium transition-colors whitespace-nowrap"
          >
            Read all reviews
          </a>
        </div>
      </Container>

      {/* Scrolling marquee - full width, no container constraint */}
      <div
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="mt-10 relative overflow-x-auto md:overflow-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex md:animate-marquee md:hover:[animation-play-state:paused] w-max">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="w-[300px] md:w-[380px] flex-shrink-0 px-2.5">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
