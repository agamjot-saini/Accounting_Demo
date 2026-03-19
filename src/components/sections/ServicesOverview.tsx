import { Link } from 'react-router-dom';
import {
  User,
  Building2,
  BookOpen,
  Receipt,
  Briefcase,
  DollarSign,
  LineChart,
} from 'lucide-react';
import Container from '../ui/Container';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from '../ui/ServiceCard';

const services = [
  {
    title: 'Personal Income Tax',
    description: 'Individual tax returns filed accurately and on time. We review your full situation to maximize deductions and credits.',
    icon: User,
    to: '/services#personal-income-tax',
  },
  {
    title: 'Corporate Income Tax',
    description: 'Corporate tax filing, compliance, and planning. We learn your business to minimize what you owe the CRA.',
    icon: Building2,
    to: '/services#corporate-income-tax',
  },
  {
    title: 'Bookkeeping & Accounting',
    description: 'Clean, organized monthly books so you always know where your business stands. Accounts payable, receivable, and reconciliation.',
    icon: BookOpen,
    to: '/services#bookkeeping-accounting',
  },
  {
    title: 'HST/GST Filing',
    description: 'Timely HST and GST remittance so you stay compliant and avoid penalties.',
    icon: Receipt,
    to: '/services#hst-gst-filing',
  },
  {
    title: 'Business Incorporation',
    description: 'Ontario business incorporation handled from start to finish — articles, CRA registration, and setup.',
    icon: Briefcase,
    to: '/services#business-incorporation',
  },
  {
    title: 'Payroll Services',
    description: 'Payroll processing, T4 preparation, and CRA remittances handled monthly so you don\'t have to.',
    icon: DollarSign,
    to: '/services#payroll-services',
  },
  {
    title: 'Tax Planning & Advisory',
    description: 'Strategic tax advice to reduce your burden year over year. We help you plan, not just file.',
    icon: LineChart,
    to: '/services#tax-planning-advisory',
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="Tax & Accounting Services That Actually Make Sense"
          description="We handle the complexity so you can focus on what matters. Choose the service that fits your situation."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_8px_24px_rgba(26,60,112,0.22)] hover:shadow-[0_12px_32px_rgba(26,60,112,0.30)] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3C70]/40 focus-visible:ring-offset-2"
            style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
          >
            Get Started with [FIRM_NAME]
          </Link>
        </div>
      </Container>
    </section>
  );
}
