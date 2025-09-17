import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, ExternalLink, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prevent double submission
    if (isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Send email to you (original functionality - working)
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply confirmation email to the sender
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
          {
            email: formData.email,    // This should match your template's "To Email" field
            name: formData.name,
            subject: formData.subject,
            message: formData.message,
            original_message: formData.message, // Added for {{original_message}} in template
            time: new Date().toLocaleString(),
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        console.log('Auto-reply sent successfully');
      } catch (autoReplyError) {
        console.error('Auto-reply failed:', autoReplyError);
        // Don't fail the whole process if auto-reply fails
      }

      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`There was an error sending your message: ${errorMessage}. Please check console for details.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'pathaknishil3642@gmail.com',
      href: 'mailto:pathaknishil3642@gmail.com',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9033039930',
      href: 'tel:+919033039930',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Vadodara, Gujarat, India',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      username: '@nishil61',
      href: 'https://github.com/nishil61',
      color: 'from-gray-700 to-gray-900',
      description: 'Check out my code repositories'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      username: '/in/nishil-pathak',
      href: 'https://www.linkedin.com/in/nishil-pathak-05b2111b0/',
      color: 'from-blue-600 to-blue-800',
      description: 'Connect with me professionally'
    },
    {
      icon: MessageCircle,
      label: 'LeetCode',
      username: '@nishil3642',
      href: 'https://leetcode.com/u/nishil3642/',
      color: 'from-orange-500 to-yellow-500',
      description: 'View my coding solutions'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together to create something amazing!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Your name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="your.email@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="What's this about?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Tell me about your project or opportunity..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="group w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </>
                )}
              </button>
            </form>
          </div>
          {/* Right: Contact Info, Social, CTA */}
          <div className="flex flex-col gap-8">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a key={index} href={info.href} className="group flex items-center space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-all duration-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{info.label}</p>
                        <p className="text-gray-600">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect with me</h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="text-white" size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{social.label}</p>
                          <p className="text-sm text-gray-500">{social.username}</p>
                        </div>
                      </div>
                      <ExternalLink size={16} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to collaborate?</h3>
              <p className="mb-6 opacity-90">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="mailto:pathaknishil3642@gmail.com" className="flex items-center justify-center space-x-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                  <Mail size={20} />
                  <span>Email Me</span>
                </a>
                <a href="https://calendly.com/pathaknishil3642/30min" className="flex items-center justify-center space-x-2 px-6 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} />
                  <span>Schedule a Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;