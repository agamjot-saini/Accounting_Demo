import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/global/Navigation';
import Footer from './components/global/Footer';
import FloatingCTA from './components/global/FloatingCTA';
import Home from './pages/Home';
import Services from './pages/Services';
import About from './pages/About';
import GetStarted from './pages/GetStarted';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main id="main" className="pt-16 md:pt-[72px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<GetStarted />} />
        </Routes>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
