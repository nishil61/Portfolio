import React, { useEffect, useState } from 'react';
import { ChevronDown, Download } from 'lucide-react';
import ResumeDownload from './ResumeDownload';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'AI/ML Developer',
    'Cloud Enthusiast', 
    'Data Science Enthusiast',
    'Open Source Contributor'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-400">NP</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 animate-ping opacity-20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                Nishil Pathak
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-600 min-h-[2rem]">
              <span className="inline-block">I'm a&nbsp;</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold typewriter">
                {roles[currentRole]}
              </span>
            </div>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              AI/ML and Data Science Enthusiast | Cloud Computing | Final Year B.Tech Student
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>View My Work</span>
              <ChevronDown className="group-hover:translate-y-1 transition-transform duration-300" size={20} />
            </button>
            
            <ResumeDownload />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="text-gray-400 hover:text-blue-600 transition-colors duration-300" size={32} />
      </button>
    </section>
  );
};

export default Hero;