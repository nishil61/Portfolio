import React from 'react';
import { GraduationCap, Calendar, MapPin, Trophy } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Engineering',
      institution: 'Sardar Vallabhbhai Patel Institute of Technology (SVIT)',
      location: 'Vasad, Gujarat',
      duration: '2022 - 2026',
      cgpa: '8.40',
      status: 'Final Year',
      description: 'Focused on Computer Science fundamentals, Data Structures & Algorithms, Machine Learning, Python for Data Science, Java, and Advanced Java. Active participant in technical events and coding competitions.',
      highlights: [
        'Consistent academic performance with 8.40 CGPA',
        'Active in coding competitions and hackathons',
        'Member of technical clubs and societies'
      ],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      field: 'Science Stream',
      institution: 'Rosary High School',
      location: 'Vadodara, Gujarat',
      duration: '2021 - 2022',
      cgpa: '56%',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on Physics, Chemistry, and Mathematics.',
      highlights: [
        'Strong foundation in Mathematics and Science',
        'Focus on analytical and problem-solving skills',
        'Active in science exhibitions'
      ],
      color: 'from-green-500 to-teal-500'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      field: 'General Education',
      institution: 'Rosary High School',
      location: 'Vadodara, Gujarat',
      duration: '2019 - 2020',
      cgpa: '84%',
      status: 'Completed',
      description: 'Completed secondary education with strong academic performance across all subjects.',
      highlights: [
        'Excellent academic performance with 84%',
        'Strong foundation in core subjects',
        'Active participation in school activities',
        'Leadership qualities development'
      ],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    {
      title: 'Academic Excellence',
      description: 'Maintained consistent academic performance throughout engineering',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Project Leadership',
      description: 'Led multiple successful projects including CampusEats',
      icon: GraduationCap,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Competition Participant',
      description: 'Active participant in coding competitions and hackathons',
      icon: Trophy,
      color: 'from-blue-500 to-indigo-500'
    }
  ];

  return (
    <section id="education" className="py-20 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic journey and achievements that have shaped my technical expertise and problem-solving abilities.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full hidden lg:block"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-blue-600 rounded-full shadow-lg z-10"></div>

                {/* Content card */}
                <div className="w-full lg:w-5/12">
                  <div className="group bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${edu.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <GraduationCap className="text-white" size={32} />
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">{edu.field}</h4>
                    
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600">
                        <GraduationCap size={16} className="mr-2" />
                        <span className="font-medium">{edu.institution}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin size={16} className="mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Calendar size={16} className="mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Trophy size={16} className="mr-2" />
                        <span className="font-semibold">
                          {edu.degree.includes('Bachelor') || edu.degree.includes('BE') ? 'CGPA' : 'Percentage'}: {edu.cgpa}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-6 leading-relaxed">{edu.description}</p>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3">Key Highlights:</h5>
                      <ul className="space-y-2">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Academic Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;