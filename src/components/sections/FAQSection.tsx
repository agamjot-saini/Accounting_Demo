import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import FAQAccordion from '../ui/FAQAccordion';

const faqItems = [
  {
    question: 'What documents do I need to file my personal tax return?',
    answer: 'Typically you\'ll need your T4 slips, T5 slips (investment income), RRSP contribution receipts, any rental income records, and government-issued ID. After you submit our intake form, we\'ll send you a personalized checklist based on your situation.',
  },
  {
    question: 'How much does it cost?',
    answer: 'Pricing depends on the complexity of your situation. We offer transparent, flat-rate pricing for most services — no surprise fees. Get in touch and we\'ll provide a clear quote before any work begins.',
  },
  {
    question: 'Can I file my taxes remotely?',
    answer: 'Absolutely. Most of our clients work with us entirely online — submit your documents by email, we handle everything, and you receive your completed return digitally. No in-person meetings required.',
  },
  {
    question: 'When is the deadline for personal income tax in Canada?',
    answer: 'For most individuals, the deadline is April 30. Self-employed individuals have until June 15 to file, though any balance owing is still due April 30. We recommend filing early to avoid delays.',
  },
  {
    question: 'Do you help with CRA notices or audits?',
    answer: 'Yes. If you\'ve received a letter from the CRA, we can review it, respond on your behalf, and guide you through the process. Reach out as soon as you receive a notice — timing matters.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve clients across Ontario, with a focus on the Greater Toronto Area. Since most of our work is done remotely, we can work with clients anywhere in Canada.',
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <FAQAccordion items={faqItems} />
        </div>
      </Container>
    </section>
  );
}
