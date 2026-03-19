import { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Phone, Clock, CheckCircle, ArrowRight, Loader2 } from 'lucide-react';
import Container from '../components/ui/Container';

const serviceOptions = [
  'Personal Income Tax',
  'Corporate Income Tax',
  'Bookkeeping & Accounting',
  'HST/GST Filing',
  'Business Incorporation',
  'Payroll Services',
  'Tax Planning & Advisory',
  'Other / Not Sure',
];

const taxYearOptions = [
  '2025',
  '2024',
  '2023',
  'Multiple Years',
  'Not Applicable',
];

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  taxYear: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  serviceNeeded?: string;
}

const inputClasses = 'w-full rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-[#112854] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#93C5FD] focus:border-transparent transition-all font-body';
const inputErrorClasses = 'w-full rounded-xl border border-[#FCA5A5] bg-white px-4 py-3 text-[#112854] placeholder:text-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#FCA5A5] focus:border-transparent transition-all font-body';
const labelClasses = 'block text-sm font-medium text-[#112854] mb-1.5 font-heading';

export default function GetStarted() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    serviceNeeded: '',
    taxYear: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.serviceNeeded) newErrors.serviceNeeded = 'Please select a service';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    if (!validate()) return;

    setLoading(true);
    // TODO: Replace with EmailJS
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
    }, 500);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section
      className="py-16 md:py-20 lg:py-28"
      style={{ backgroundImage: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 45%, #FFFFFF 100%)' }}
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 md:p-10 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
                <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mb-5">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-[#112854] mb-4">
                  Thank you! Here's what happens next.
                </h2>
                <div className="space-y-4 mb-8">
                  <div className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center flex-shrink-0 text-sm font-bold font-heading">1</span>
                    <p className="text-[#334155] leading-7">We'll review your request and respond within 24 hours.</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center flex-shrink-0 text-sm font-bold font-heading">2</span>
                    <p className="text-[#334155] leading-7">We'll let you know exactly which documents to email to [BUSINESS_EMAIL].</p>
                  </div>
                  <div className="flex gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center flex-shrink-0 text-sm font-bold font-heading">3</span>
                    <p className="text-[#334155] leading-7">Once we have everything, we'll begin the work and keep you informed.</p>
                  </div>
                </div>
                <p className="text-sm text-[#64748B] mb-6">
                  For faster service, call us directly at <a href="tel:[BUSINESS_PHONE]" className="text-[#1A3C70] font-medium hover:text-[#153160]">[BUSINESS_PHONE]</a>.
                </p>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_8px_24px_rgba(26,60,112,0.22)] hover:shadow-[0_12px_32px_rgba(26,60,112,0.30)] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3C70]/40 focus-visible:ring-offset-2"
                  style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
                >
                  Back to Home
                </Link>
              </div>
            ) : (
              <div className="rounded-2xl bg-white border border-[#E2E8F0] p-8 md:p-10 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
                <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-[#112854] mb-2">
                  Get Started
                </h1>
                <p className="text-[#64748B] leading-7 mb-8">
                  Tell us what you need and we'll follow up within 24 hours with a clear plan.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <label htmlFor="fullName" className={labelClasses}>Full Name</label>
                    <input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => updateField('fullName', e.target.value)}
                      className={errors.fullName ? inputErrorClasses : inputClasses}
                      placeholder="John Smith"
                    />
                    {errors.fullName && <p className="text-[#DC2626] text-sm mt-1">{errors.fullName}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={errors.email ? inputErrorClasses : inputClasses}
                      placeholder="john@example.com"
                    />
                    {errors.email && <p className="text-[#DC2626] text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={errors.phone ? inputErrorClasses : inputClasses}
                      placeholder="(416) 555-0123"
                    />
                    {errors.phone && <p className="text-[#DC2626] text-sm mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <label htmlFor="serviceNeeded" className={labelClasses}>Service Needed</label>
                    <select
                      id="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={(e) => updateField('serviceNeeded', e.target.value)}
                      className={errors.serviceNeeded ? inputErrorClasses : inputClasses}
                    >
                      <option value="">Select a service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.serviceNeeded && <p className="text-[#DC2626] text-sm mt-1">{errors.serviceNeeded}</p>}
                  </div>

                  <div>
                    <label htmlFor="taxYear" className={labelClasses}>Tax Year <span className="text-[#94A3B8] font-normal">(optional)</span></label>
                    <select
                      id="taxYear"
                      value={formData.taxYear}
                      onChange={(e) => updateField('taxYear', e.target.value)}
                      className={inputClasses}
                    >
                      <option value="">Select a year...</option>
                      {taxYearOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>Message / Additional Details <span className="text-[#94A3B8] font-normal">(optional)</span></label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      className={inputClasses}
                      placeholder="Tell us a bit about your situation..."
                    />
                  </div>

                  {submitError && (
                    <p className="text-[#DC2626] text-sm bg-[#FEF2F2] rounded-xl p-3">{submitError}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl text-white font-semibold font-heading px-6 py-3.5 min-h-[48px] text-[15px] shadow-[0_8px_24px_rgba(26,60,112,0.22)] hover:shadow-[0_12px_32px_rgba(26,60,112,0.30)] active:translate-y-[1px] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1A3C70]/40 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ backgroundImage: 'linear-gradient(180deg, #1E4A8C 0%, #153160 100%)' }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Request
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className="lg:col-span-2 space-y-5">
            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
              <h3 className="font-heading font-bold text-[#112854] mb-4">Why [FIRM_NAME]?</h3>
              <ul className="space-y-3">
                {[
                  'Response within 24 hours',
                  'Clear, transparent pricing',
                  'Secure document handling via email',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#334155]">
                    <ShieldCheck className="w-5 h-5 text-[#0EA5A4] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-[#112854]">Prefer to Call?</h3>
              </div>
              <a
                href="tel:[BUSINESS_PHONE]"
                className="text-[#1A3C70] font-semibold hover:text-[#153160] transition-colors"
              >
                [BUSINESS_PHONE]
              </a>
              <p className="text-sm text-[#64748B] mt-1">
                We're happy to discuss your situation over the phone.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-[#E2E8F0] p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-[#EEF2F9] text-[#1A3C70] flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="font-heading font-bold text-[#112854]">Office Hours</h3>
              </div>
              <p className="text-sm text-[#334155]">[BUSINESS_HOURS]</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
