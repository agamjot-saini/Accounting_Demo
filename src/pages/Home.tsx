import HeroSection from '../components/sections/HeroSection';
import TrustBar from '../components/sections/TrustBar';
import ServicesOverview from '../components/sections/ServicesOverview';
import HowItWorks from '../components/sections/HowItWorks';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import ReviewsSection from '../components/sections/ReviewsSection';
import FAQSection from '../components/sections/FAQSection';
import FinalCTA from '../components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <ReviewsSection />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
