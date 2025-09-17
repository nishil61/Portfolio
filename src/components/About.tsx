import React from 'react';
import { Code, Database, Brain, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Cloud Computing',
      icon: Globe,
      skills: ['AWS Cloud', 'GCP', 'Cloud Architecture', 'Docker', 'Kubernetes', 'Serverless'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Programming & Development',
      icon: Code,
      skills: ['Python', 'Java', 'Advanced Java', 'C', 'HTML Basics', 'Flutter'],
      color: 'from-green-500 to-teal-500'
    },
    {
      category: 'Data Science & ML',
      icon: Brain,
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Data Visualization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Database & Tools',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Git', 'Docker', 'AWS', 'Apache NetBeans'],
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              I'm a passionate Computer Engineering student at SVIT, Vasad, with a strong focus on
              <span className="font-semibold text-blue-600"> Cloud Computing, NLP, Deep Learning, Natural Language Processing, Computer Vision, Reinforcement Learning, ANNs, CNNs, AI/ML, and Data Science</span>.
              Currently maintaining a CGPA of 8.40, I'm dedicated to building innovative solutions that bridge
              the gap between technology and real-world problems.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              My journey spans from developing mobile applications with Flutter to implementing machine learning 
              algorithms and cloud solutions. I believe in continuous learning and contributing to open-source 
              projects that make a difference in the tech community.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Available for opportunities</span>
              </div>
              <div className="flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-700">Open to collaboration</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Location:</span>
                    <span className="text-gray-800">Vadodara, Gujarat, India</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Education:</span>
                    <span className="text-gray-800">B.Tech Computer Eng.</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">CGPA:</span>
                    <span className="text-gray-800">8.40</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Year:</span>
                    <span className="text-gray-800">Final Year (2022-2026)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-600">Focus:</span>
                    <span className="text-gray-800">AI/ML & Cloud Computing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.category}
                className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.skills.map((item) => (
                    <span
                      key={item}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;