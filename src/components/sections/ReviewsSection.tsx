import { Star } from 'lucide-react';
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
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Client Reviews"
          title="What Our Clients Say"
        />

        <div className="mt-8 flex items-center justify-center gap-2 text-sm">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
            ))}
          </div>
          <span className="text-[#112854] font-semibold">5.0 on Google</span>
          <span className="text-[#64748B]">&middot;</span>
          <span className="text-[#64748B]">[X] reviews</span>
          <span className="text-[#64748B]">&middot;</span>
          <a
            href="[GOOGLE_REVIEW_LINK]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1A3C70] hover:text-[#153160] font-medium transition-colors"
          >
            Read all reviews
          </a>
        </div>
      </Container>

      {/* Scrolling marquee - full width, no container constraint */}
      <div className="mt-10 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee hover:[animation-play-state:paused] w-max">
          {/* Render reviews twice for seamless loop */}
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="w-[340px] md:w-[380px] flex-shrink-0 px-2.5">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
