import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certificates = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const certificates = [
    {
      title: 'AI for Manufacturing Training + Internship',
      issuer: 'Intel Corporation',
      date: '2025',
      category: 'cloud',
      description: '16-week comprehensive training program covering AI applications in manufacturing, computer vision, predictive maintenance, and robotic process automation.',
      skills: ['AI Programming', 'Computer Vision', 'Predictive Maintenance', 'Edge AI'],
      credentialId: 'INTEL-AI-MFG-2025',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-orange-500 to-yellow-500',
      verified: true
    },
    {
      title: 'AICTE Internship on AI: Transformative Learning',
      issuer: 'Microsoft & SAP TechSaksham',
      date: '2025',
      category: 'ml',
      description: 'Joint CSR initiative focusing on AI transformative learning with practical project implementation and real-world applications.',
      skills: ['Machine Learning', 'Disease Prediction', 'Streamlit', 'Data Analysis'],
      credentialId: 'AICTE-AI-2025',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-blue-500 to-indigo-500',
      verified: true
    },
    {
      title: 'Generative AI Internship',
      issuer: 'Flaunch Innovation Pvt. Ltd.',
      date: '2024',
      category: 'ml',
      description: 'AICTE approved internship focusing on generative AI, chatbot development, and natural language processing applications.',
      skills: ['Generative AI', 'LLaMA Model', 'NLP', 'Chatbot Development'],
      credentialId: 'FLAUNCH-GAI-2024',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-purple-500 to-pink-500',
      verified: true
    },
    {
      title: 'AI/Cloud Internship',
      issuer: 'Edunet Foundation',
      date: '2024',
      category: 'data',
      description: 'AICTE approved internship through IBM Skills Build platform focusing on AI and Cloud technologies with practical project implementation.',
      skills: ['AI Technologies', 'Cloud Services', 'Sentiment Analysis', 'BERT Model'],
      credentialId: 'EDUNET-AI-2024',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-green-500 to-teal-500',
      verified: true
    },
    {
      title: 'IEEE Mentor-Mentee Program',
      issuer: 'IEEE',
      date: '2024',
      category: 'professional',
      description: 'Successfully completed IEEE Mentor-Mentee Program focusing on professional development and technical skill enhancement.',
      skills: ['Professional Development', 'Technical Mentoring', 'Leadership', 'Networking'],
      credentialId: 'IEEE-MM-2024',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-red-500 to-orange-500',
      verified: true
    },
    {
      title: 'Python Programming Certification',
      issuer: 'Various Platforms',
      date: '2024',
      category: 'programming',
      description: 'Advanced Python programming certification covering data science libraries, machine learning frameworks, and application development.',
      skills: ['Python', 'Data Science Libraries', 'Pandas', 'NumPy'],
      credentialId: 'PYTHON-ADV-2024',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=500',
      color: 'from-indigo-500 to-purple-500',
      verified: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Certificates', count: certificates.length },
    { id: 'cloud', label: 'Cloud', count: certificates.filter(c => c.category === 'cloud').length },
    { id: 'ml', label: 'Machine Learning', count: certificates.filter(c => c.category === 'ml').length },
    { id: 'data', label: 'Data Science', count: certificates.filter(c => c.category === 'data').length },
    { id: 'professional', label: 'Professional', count: certificates.filter(c => c.category === 'professional').length },
    { id: 'programming', label: 'Programming', count: certificates.filter(c => c.category === 'programming').length }
  ];

  const filteredCertificates = activeCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === activeCategory);

  return (
    <section id="certificates" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Certificates</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional certifications and achievements that validate my expertise across various technologies and domains.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/70 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md'
              }`}
            >
              <span>{category.label}</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                activeCategory === category.id 
                  ? 'bg-white/20 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <div
              key={index}
              className="group bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Certificate Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Verified Badge */}
                {cert.verified && (
                  <div className="absolute top-4 right-4 flex items-center space-x-1 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                    <CheckCircle size={12} />
                    <span>Verified</span>
                  </div>
                )}

                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${cert.color}`}>
                  {cert.category.toUpperCase()}
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${cert.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {cert.title}
                </h3>
                
                <p className="text-blue-600 font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Credential ID */}
                <div className="text-xs text-gray-500 mb-4">
                  ID: {cert.credentialId}
                </div>

                {/* Action Button */}
                <button className="group/btn w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-700 text-white rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105">
                  <ExternalLink size={16} />
                  <span>View Certificate</span>
                  <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { label: 'Total Certificates', value: certificates.length, color: 'from-blue-500 to-indigo-500' },
            { label: 'Verified Credentials', value: certificates.filter(c => c.verified).length, color: 'from-green-500 to-teal-500' },
            { label: 'Skill Categories', value: categories.length - 1, color: 'from-purple-500 to-pink-500' },
            { label: 'Years Experience', value: '2+', color: 'from-orange-500 to-red-500' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                <span className="text-2xl font-bold text-white">{stat.value}</span>
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;