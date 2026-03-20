import { Star } from 'lucide-react';
import { useState } from 'react';
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

export default function ReviewsSection() {
  const [paused, setPaused] = useState(false);

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
        className="mt-10 relative overflow-hidden"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div
          className="flex animate-marquee hover:[animation-play-state:paused] w-max [will-change:transform]"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        >
          {[...reviews, ...reviews, ...reviews, ...reviews].map((review, index) => (
            <div key={index} className="w-[300px] md:w-[380px] flex-shrink-0 px-2.5">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
