import { Link } from 'react-router-dom';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import ProcessStep from '../ui/ProcessStep';

const steps = [
  {
    title: 'Tell Us What You Need',
    description: 'Fill out our quick form or give us a call. Let us know if it\'s personal tax, corporate, bookkeeping, or something else.',
  },
  {
    title: 'We Review & Respond Within 24 Hours',
    description: 'You\'ll hear back with a clear outline of what we need from you — documents, timelines, and next steps. No surprises.',
  },
  {
    title: 'We Handle the Work, You Stay Informed',
    description: 'We complete your filing or setup, keep you updated throughout, and deliver organized results you can trust.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeader
          eyebrow="Simple Process"
          title="Getting Started Takes 3 Steps"
          description="No complicated onboarding. No guesswork."
        />

        <div className="mt-12 max-w-xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_8px_24px_rgba(26,60,112,0.22)] hover:shadow-[0_12px_32px_rgba(26,60,112,0.30)] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3C70]/40 focus-visible:ring-offset-2"
            style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
          >
            Get Started
          </Link>
        </div>
      </Container>
    </section>
  );
}
