import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Target, Users, Award } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: '2015',
      title: 'The Beginning',
      description: 'M Kings Group was founded with a vision to transform the technology landscape.'
    },
    {
      year: '2017',
      title: 'Global Expansion',
      description: 'Expanded operations to multiple countries, serving clients worldwide.'
    },
    {
      year: '2019',
      title: 'Innovation Hub',
      description: 'Launched our innovation hub focusing on AI and emerging technologies.'
    },
    {
      year: '2021',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards for excellence in service delivery.'
    },
    {
      year: '2023',
      title: 'Digital Transformation',
      description: 'Helped 100+ enterprises in their digital transformation journey.'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence Awards',
      description: 'Recognized for outstanding service quality'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Project Success',
      description: '98% project success rate'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Global Team',
      description: 'Diverse team across 15+ countries'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link 
          to="/about"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to About
        </Link>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From humble beginnings to industry leadership, discover the journey that shaped M Kings Group into the innovative technology company it is today.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-400/20"></div>

            {/* Timeline Items */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className="relative mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
                      <div className="text-blue-400 font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Timeline Point */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full">
                    <div className="absolute w-8 h-8 bg-blue-400/20 rounded-full -left-2 -top-2"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-300 mb-12">Milestones that mark our journey of excellence</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Be Part of Our Story</h2>
          <p className="text-gray-200 mb-6">Join us in shaping the future of technology and innovation.</p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStory; 