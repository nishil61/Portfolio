import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, Award, Mail } from 'lucide-react';

type HeaderProps = {
  activePath: string;
  onNavigate: (path: '/' | '/about' | '/projects' | '/education' | '/certificates' | '/contact') => void;
};

const Header = ({ activePath, onNavigate }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: '/', label: 'Home', icon: Home },
    { id: '/about', label: 'About', icon: User },
    { id: '/projects', label: 'Projects', icon: Briefcase },
    { id: '/education', label: 'Education', icon: GraduationCap },
    { id: '/certificates', label: 'Certificates', icon: Award },
    { id: '/contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    setIsOpen(false);
  }, [activePath]);

  const navigate = (sectionId: '/' | '/about' | '/projects' | '/education' | '/certificates' | '/contact') => {
    onNavigate(sectionId);
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-white/20 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Nishil Pathak
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id as '/' | '/about' | '/projects' | '/education' | '/certificates' | '/contact')}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1 transition-all duration-300 ${
                      activePath === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md rounded-lg mt-2 border border-white/20">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => navigate(item.id as '/' | '/about' | '/projects' | '/education' | '/certificates' | '/contact')}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 transition-all duration-300 ${
                      activePath === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;