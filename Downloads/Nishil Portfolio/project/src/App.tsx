import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LikeButton from './components/LikeButton';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      
      {/* Like Button */}
      <LikeButton />
      
      {/* Scroll to top button */}
    </div>
  );
}

export default App;