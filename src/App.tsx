import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LikeButton from './components/LikeButton';

type AppRoute = '/home' | '/about' | '/projects' | '/education' | '/certificates' | '/contact';

const routeToTitle: Record<AppRoute, string> = {
  '/home': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/education': 'Education',
  '/certificates': 'Certificates',
  '/contact': 'Contact',
};

const normalizePath = (pathname: string): AppRoute => {
  const path = pathname.toLowerCase();

  if (path === '/' || path === '/index.html' || path === '/home') {
    return '/home';
  }

  if (path === '/about') return '/about';
  if (path === '/projects') return '/projects';
  if (path === '/education') return '/education';
  if (path === '/certificates') return '/certificates';
  if (path === '/contact' || path === '/contacts') return '/contact';

  return '/home';
};

function App() {
  const [currentPath, setCurrentPath] = useState<AppRoute>(() => normalizePath(window.location.pathname));

  const currentTitle = useMemo(() => routeToTitle[currentPath], [currentPath]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.title = `Nishil Pathak | ${currentTitle}`;
  }, [currentTitle]);

  const navigateTo = (path: AppRoute) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPath) {
      case '/about':
        return <About />;
      case '/projects':
        return <Projects />;
      case '/education':
        return <Education />;
      case '/certificates':
        return <Certificates />;
      case '/contact':
        return <Contact />;
      case '/home':
      default:
        return <Hero onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Header activePath={currentPath} onNavigate={navigateTo} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={navigateTo} />
      
      {/* Like Button */}
      <LikeButton />
    </div>
  );
}

export default App;