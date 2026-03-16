import Container from '../ui/Container';

const badges = [
  '[CPA_ONTARIO_BADGE]',
  '[QUICKBOOKS_PARTNER]',
  '[GOOGLE_REVIEWS_BADGE]',
  '[THREE_BEST_RATED_BADGE]',
];

export default function TrustBar() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <Container>
        <p className="text-sm text-[#64748B] uppercase tracking-wider font-medium mb-6 text-center">
          Trusted & Certified
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {badges.map((badge) => (
            <div
              key={badge}
              className="h-16 px-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="text-xs text-[#64748B] font-medium whitespace-nowrap">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
