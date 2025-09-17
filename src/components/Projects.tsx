import React, { useState } from 'react';
import { ExternalLink, Github, Calendar, Users } from 'lucide-react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: 'Kisaan Mitra',
      description: 'A comprehensive weather forecasting application with advanced detection capabilities and soil condition monitoring. Features real-time weather data, predictive analytics, and user-friendly mobile interface.',
      longDescription: 'This advanced weather detection app provides accurate weather forecasts and soil condition monitoring for agricultural and general use. The application uses multiple weather APIs to provide comprehensive data including temperature, humidity, precipitation, and soil moisture levels with predictive analytics.',
      technologies: ['Flutter', 'Weather APIs', 'Machine Learning', 'Firebase', 'Dart', 'Real-time Analytics'],
      organization: 'Hackathon Project',
      year: '2024',
      status: 'Completed',
      github: 'https://github.com/nishil61/Kisaan-Mitra',
      demo: 'https://indian-kisaan-mitra.vercel.app/',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'CampusEats',
      description: 'A comprehensive canteen food ordering application with Flutter frontend and Node.js backend. Features include real-time menu updates, Razorpay UPI integration, admin-client login system, and today\'s special recommendations.',
      longDescription: 'CampusEats revolutionizes campus dining by providing a seamless food ordering experience. Students can browse the daily menu, place orders, and make payments using UPI through Razorpay integration. The admin panel allows canteen staff to manage menu items, track orders, and update daily specials in real-time.',
      technologies: ['Flutter', 'Node.js', 'MongoDB', 'Razorpay API', 'Express.js', 'JWT Authentication'],
      organization: 'SVIT – Design Engineering Project',
      year: '2024',
      status: 'Completed',
      github: 'https://github.com/nishil61/CampusEats',
      demo: 'https://campuseats.streamlit.app/',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'Crypto Pairwise Alpha Strategy',
      description: 'An algorithmic trading strategy developed for the Lunor AI Quest competition. Achieved high performance scores in return optimization, drawdown minimization, and Sharpe ratio improvement.',
      longDescription: 'This sophisticated trading algorithm analyzes cryptocurrency pair correlations to identify arbitrage opportunities. The strategy uses statistical methods and machine learning to predict price movements and execute profitable trades while maintaining risk management protocols.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Backtesting.py', 'Matplotlib', 'Scikit-learn'],
      organization: 'Lunor AI Quest Competition',
      year: '2024',
      status: 'Competition Entry',
      github: 'https://github.com/nishil61',
      demo: 'https://github.com/nishil61',
      image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Parts Identification System',
      description: 'Advanced computer vision system for automated parts identification in manufacturing environments. Uses deep learning algorithms for accurate classification and quality control.',
      longDescription: 'This sophisticated parts identification system leverages computer vision and machine learning to automatically identify and classify manufacturing components. The system provides real-time analysis, quality control metrics, and integration with existing manufacturing workflows for enhanced productivity.',
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'Flask'],
      organization: 'Gujarat Apollo Private Ltd',
      year: '2024',
      status: 'Completed',
      github: 'https://github.com/nishil61/Gujarat-Apollo-Parts-Identifier',
      demo: 'https://apollo-parts-identifier.vercel.app/',
      image: 'https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore my journey through various projects that showcase my skills in full-stack development, 
            machine learning, and problem-solving capabilities.
          </p>
        </div>

        {/* Project Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setActiveProject(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeProject === index
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white/70 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Active Project Display */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Project Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
              <img
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <h3 className="text-3xl font-bold text-gray-800">
                  {projects[activeProject].title}
                </h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${projects[activeProject].color}`}>
                  {projects[activeProject].status}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center space-x-1">
                  <Users size={16} />
                  <span>{projects[activeProject].organization}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar size={16} />
                  <span>{projects[activeProject].year}</span>
                </div>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed">
              {projects[activeProject].longDescription}
            </p>

            {/* Technologies */}
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeProject].technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <a
                href={projects[activeProject].github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
              >
                <Github size={20} />
                <span>View Code</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href={projects[activeProject].demo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink size={20} />
                <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">All Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setActiveProject(index)}
              >
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{project.year}</span>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;