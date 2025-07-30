import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/nishil61', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nishil-pathak-05b2111b0/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:pathaknishil3642@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Nishil Pathak
            </h3>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              AI/ML and Data Science Enthusiast | Cloud Computing | Computer Vision | NLP | Reinforcement Learning | Deep Learning | Final Year B.Tech Student.
              Passionate about creating innovative solutions that bridge technology and real-world problems.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                <span className="font-medium">Email:</span><br />
                pathaknishil3642@gmail.com
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Location:</span><br />
                Vadodara, Gujarat, India
              </p>
              <p className="text-gray-300">
                <span className="font-medium">Status:</span><br />
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  Available for opportunities
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-300 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 animate-pulse" />
              <span>by Nishil Pathak</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <p className="text-gray-300">
                © {currentYear} Nishil Pathak. All rights reserved.
              </p>
              <button
                onClick={scrollToTop}
                className="group w-8 h-8 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
              >
                <ArrowUp size={16} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-8 pt-8 border-t border-white/10">
          <p className="text-gray-400 italic">
            "The best way to predict the future is to create it." - Peter Drucker
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;