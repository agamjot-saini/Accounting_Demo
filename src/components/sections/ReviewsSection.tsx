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
          <span className="text-[#0F172A] font-semibold">5.0 on Google</span>
          <span className="text-[#64748B]">&middot;</span>
          <span className="text-[#64748B]">[X] reviews</span>
          <span className="text-[#64748B]">&middot;</span>
          <a
            href="[GOOGLE_REVIEW_LINK]"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] hover:text-[#1D4ED8] font-medium transition-colors"
          >
            Read all reviews
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
