import { Link } from 'react-router-dom';
import { User, Building2, BookOpen, Receipt, Briefcase, DollarSign, LineChart, ArrowRight, type LucideIcon } from 'lucide-react';
import Container from '../components/ui/Container';

interface ServiceDetailProps {
  title: string;
  description: string[];
  includes: string[];
  icon: LucideIcon;
  slug: string;
  reversed?: boolean;
}

function ServiceDetail({ title, description, includes, icon: Icon, reversed = false }: ServiceDetailProps) {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-10 lg:gap-16 items-center`}>
      <div className="lg:w-1/2">
        <div className="w-12 h-12 rounded-xl bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center ring-1 ring-[#C9D5EA] mb-5">
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#112854] mb-4">
          {title}
        </h2>
        {description.map((para, i) => (
          <p key={i} className="text-[#334155] leading-7 mb-4">{para}</p>
        ))}
        <h3 className="font-heading font-bold text-sm text-[#112854] uppercase tracking-wider mb-3 mt-6">
          What's Included
        </h3>
        <ul className="space-y-2 mb-6">
          {includes.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[#334155]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1A3C70] mt-2.5 flex-shrink-0" />
              <span className="leading-7">{item}</span>
            </li>
          ))}
        </ul>
        <Link
          to="/get-started"
          className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_10px_24px_rgba(26,60,112,0.22)] hover:shadow-[0_14px_30px_rgba(26,60,112,0.30)] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2"
          style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
        >
          Get Started
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="lg:w-1/2">
        <div className="w-full aspect-[4/3] rounded-2xl bg-[#EEF2F9] border border-[#C9D5EA] flex items-center justify-center">
          <span className="text-sm text-[#64748B] font-medium">[SERVICE_IMAGE]</span>
        </div>
      </div>
    </div>
  );
}

const stats = [
  { value: '[Number]+', label: 'Returns Filed Annually' },
  { value: '[Years]+', label: 'Years of Experience' },
  { value: '[Number]', label: 'Services Offered' },
  { value: '100%', label: 'CRA Compliant' },
];

const serviceNavLabels: Record<string, string> = {
  'personal-income-tax': 'Personal Tax',
  'corporate-income-tax': 'Corporate Tax',
  'bookkeeping-accounting': 'Bookkeeping',
  'hst-gst-filing': 'HST/GST Filing',
  'business-incorporation': 'Incorporation',
  'payroll-services': 'Payroll',
  'tax-planning-advisory': 'Tax Planning',
};

const services: ServiceDetailProps[] = [
  {
    title: 'Personal Income Tax',
    slug: 'personal-income-tax',
    icon: User,
    description: [
      'We prepare and file T1 personal income tax returns for employed individuals, self-employed professionals, rental property owners, and those with investment income. Whether your situation is straightforward or complex, we review everything — T4 slips, T5 slips, RRSP deductions, work-from-home credits, medical expenses, and more.',
      'Our approach is thorough: we look at your full financial picture to ensure nothing is missed and every eligible deduction and credit is claimed. You get a complete, accurate return filed on time.',
    ],
    includes: [
      'T1 personal income tax return preparation and filing',
      'Review of T4, T5, RRSP, and other tax slips',
      'Work-from-home and employment expense deductions',
      'Rental income and investment income reporting',
      'CRA correspondence support',
    ],
  },
  {
    title: 'Corporate Income Tax',
    slug: 'corporate-income-tax',
    icon: Building2,
    reversed: true,
    description: [
      'We handle T2 corporate tax returns for small businesses, professional corporations, and holding companies. Beyond filing, we take the time to understand your business — its structure, revenue sources, and growth plans — so we can identify every deduction available under the Income Tax Act.',
      'From annual compliance to strategic planning, we help reduce your corporate tax liability while keeping you in good standing with the CRA.',
    ],
    includes: [
      'T2 corporate income tax return preparation and filing',
      'Small business deduction and tax credit optimization',
      'Professional corporation and holding company filings',
      'CRA compliance and correspondence',
      'Year-end tax planning and strategy',
    ],
  },
  {
    title: 'Bookkeeping & Accounting',
    slug: 'bookkeeping-accounting',
    icon: BookOpen,
    description: [
      'Clean books are the foundation of a healthy business. We provide monthly or quarterly bookkeeping services that keep your financial records accurate, organized, and CRA-ready. You focus on running your business — we handle accounts payable, accounts receivable, bank reconciliation, and financial reporting.',
      'Our bookkeeping service gives you clear visibility into your business finances at any time, making tax season simple and stress-free.',
    ],
    includes: [
      'Monthly or quarterly bookkeeping',
      'Accounts payable and receivable management',
      'Bank and credit card reconciliation',
      'Financial statement preparation',
      'Year-end file preparation for tax filing',
    ],
  },
  {
    title: 'HST/GST Filing',
    slug: 'hst-gst-filing',
    icon: Receipt,
    reversed: true,
    description: [
      'Staying on top of HST and GST obligations is essential to avoiding penalties and interest. We prepare and file your HST/GST returns on time, ensure you claim all eligible input tax credits, and help you determine the right filing frequency for your business.',
      'Whether you file monthly, quarterly, or annually, we handle the entire process so you can focus on what you do best.',
    ],
    includes: [
      'HST/GST return preparation and filing',
      'Input tax credit optimization',
      'Filing frequency assessment and setup',
      'CRA remittance handling',
      'Penalty and interest avoidance guidance',
    ],
  },
  {
    title: 'Business Incorporation',
    slug: 'business-incorporation',
    icon: Briefcase,
    description: [
      'Starting a business in Ontario? We handle the full incorporation process from start to finish — articles of incorporation, CRA business number registration, HST registration, and payroll account setup. No guesswork, no missed steps.',
      'We walk you through the process, explain what each step means, and set you up with a proper structure from day one.',
    ],
    includes: [
      'Articles of incorporation filing',
      'CRA business number registration',
      'HST/GST account registration',
      'Payroll account setup',
      'Initial corporate structure guidance',
    ],
  },
  {
    title: 'Payroll Services',
    slug: 'payroll-services',
    icon: DollarSign,
    reversed: true,
    description: [
      'Payroll needs to be accurate and on time — every time. We process payroll for your employees, prepare T4 and T4A slips, handle CRA source deduction remittances, and issue Records of Employment when needed.',
      'Our payroll service ensures your team gets paid correctly and the CRA receives everything it requires, so you never have to worry about compliance.',
    ],
    includes: [
      'Monthly payroll processing',
      'T4 and T4A slip preparation',
      'CRA source deduction remittances',
      'Record of Employment (ROE) issuance',
      'Year-end payroll reporting',
    ],
  },
  {
    title: 'Tax Planning & Advisory',
    slug: 'tax-planning-advisory',
    icon: LineChart,
    description: [
      'Filing your taxes is one thing — planning to reduce your burden year over year is another. We provide strategic tax advice that goes beyond annual returns: salary vs. dividend optimization, RRSP and TFSA planning, corporate structure advice, and long-term strategies to keep more of what you earn.',
      "We don't just file — we help you plan. Whether you're a growing business or an individual looking ahead, our advisory services are designed to save you money.",
    ],
    includes: [
      'Year-round tax planning and strategy',
      'Salary vs. dividend optimization',
      'RRSP and TFSA contribution planning',
      'Corporate structure and reorganization advice',
      'Multi-year tax reduction strategies',
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section
        className="pt-16 md:pt-20 lg:pt-24 pb-10 md:pb-12"
        style={{ backgroundImage: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 45%, #FFFFFF 100%)' }}
      >
        <Container className="text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-[#112854] mb-5">
            Our Services
          </h1>
          <p className="text-lg text-[#334155] leading-7 max-w-2xl mx-auto mb-8">
            Everything you need to stay compliant, organized, and confident — whether you're filing personal taxes or running a corporation.
          </p>
          {/* Quick-nav pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold font-heading bg-white text-[#1A3C70] border border-[#C9D5EA] shadow-sm hover:bg-[#EEF2F9] hover:border-[#1A3C70] transition-all duration-150"
              >
                <s.icon className="w-3.5 h-3.5" />
                {serviceNavLabels[s.slug] ?? s.title}
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats bar */}
      <section className="py-8 border-y border-[#E2E8F0] bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-[#E2E8F0]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center px-4">
                <span className="font-heading text-3xl font-extrabold text-[#1A3C70]">{stat.value}</span>
                <span className="text-sm text-[#64748B] mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Service sections */}
      {services.map((service, index) => (
        <section
          key={service.title}
          id={service.slug}
          className={`py-16 md:py-20 lg:py-24 scroll-mt-[72px] ${index % 2 === 0 ? 'bg-[#F8FAFC]' : 'bg-white'}`}
        >
          <Container>
            <ServiceDetail {...service} />
          </Container>
        </section>
      ))}

      {/* Bottom CTA */}
      <section
        className="py-16 md:py-20 lg:py-28"
        style={{ backgroundImage: 'linear-gradient(135deg, #0D1B3E 0%, #1A3C70 100%)' }}
      >
        <Container className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-4">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-[#94A3B8] max-w-xl mx-auto mb-8">
            Tell us about your situation and we'll point you in the right direction. No commitment required.
          </p>
          <Link
            to="/get-started"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-[#112854] font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_10px_24px_rgba(0,0,0,0.20)] hover:bg-[#F8FAFC] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#93C5FD] focus-visible:ring-offset-2"
          >
            Get Started
          </Link>
        </Container>
      </section>
    </>
  );
}
