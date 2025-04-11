import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Target, Users, Clock, ChartBar, Lightbulb, Shield, TrendingUp } from 'lucide-react';

const AboutCardDetail = () => {
  const { id } = useParams();

  const coreValues = {
    'innovation': {
      title: 'Innovation',
      description: 'We constantly push boundaries and explore new possibilities.',
      fullDescription: 'At M Kings Group, innovation is at the heart of everything we do. We believe in challenging the status quo and finding creative solutions to complex problems. Our team is dedicated to staying ahead of industry trends and implementing cutting-edge technologies.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      keyPoints: [
        'Continuous research and development',
        'Embracing emerging technologies',
        'Creative problem-solving',
        'Forward-thinking approach',
        'Adaptability to change'
      ],
      stats: [
        { label: 'R&D Investment', value: '15%', icon: <Lightbulb size={24} /> },
        { label: 'Innovation Projects', value: '50+', icon: <Target size={24} /> },
        { label: 'Patents Filed', value: '12', icon: <Shield size={24} /> }
      ],
      caseStudies: [
        {
          title: 'Digital Transformation',
          description: 'Successfully implemented AI-driven solutions for a Fortune 500 company',
          impact: 'Increased efficiency by 40%'
        },
        {
          title: 'Blockchain Integration',
          description: 'Developed secure blockchain solutions for financial services',
          impact: 'Reduced transaction costs by 30%'
        }
      ]
    },
    'excellence': {
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
      fullDescription: 'Excellence is not just a goal but a way of life at M Kings Group. We are committed to delivering exceptional quality in every project, service, and interaction. Our team maintains rigorous standards and continuously improves our processes.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
      keyPoints: [
        'Quality assurance',
        'Attention to detail',
        'Professional development',
        'Best practices',
        'Continuous improvement'
      ],
      stats: [
        { label: 'Client Satisfaction', value: '98%', icon: <Users size={24} /> },
        { label: 'Project Success', value: '95%', icon: <Target size={24} /> },
        { label: 'Team Certifications', value: '100+', icon: <Shield size={24} /> }
      ],
      caseStudies: [
        {
          title: 'Quality Management',
          description: 'Implemented ISO 9001 standards across all operations',
          impact: 'Achieved 99.9% quality rate'
        },
        {
          title: 'Process Optimization',
          description: 'Streamlined operational processes for manufacturing client',
          impact: 'Reduced waste by 25%'
        }
      ]
    },
    'integrity': {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical standards.',
      fullDescription: 'Integrity forms the foundation of our business relationships. We believe in doing what is right, even when no one is watching. Our commitment to ethical practices and transparent operations has earned us the trust of our clients and partners.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
      keyPoints: [
        'Ethical decision-making',
        'Transparent operations',
        'Accountability',
        'Trust-building',
        'Professional ethics'
      ],
      stats: [
        { label: 'Ethical Compliance', value: '100%', icon: <Shield size={24} /> },
        { label: 'Client Trust', value: '99%', icon: <Users size={24} /> },
        { label: 'Transparency Index', value: 'A+', icon: <ChartBar size={24} /> }
      ],
      caseStudies: [
        {
          title: 'Corporate Governance',
          description: 'Established comprehensive governance framework',
          impact: 'Achieved highest compliance rating'
        },
        {
          title: 'Ethical Sourcing',
          description: 'Implemented sustainable supply chain practices',
          impact: 'Reduced carbon footprint by 35%'
        }
      ]
    },
    'impact': {
      title: 'Impact',
      description: 'Creating meaningful and lasting change.',
      fullDescription: 'At M Kings Group, we measure our success by the positive impact we create. Every project we undertake is focused on delivering tangible results and creating lasting value for our clients, communities, and the environment.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
      keyPoints: [
        'Sustainable solutions',
        'Community engagement',
        'Environmental responsibility',
        'Social impact',
        'Long-term value creation'
      ],
      stats: [
        { label: 'Community Projects', value: '25+', icon: <Users size={24} /> },
        { label: 'Environmental Impact', value: '-40%', icon: <TrendingUp size={24} /> },
        { label: 'Social Initiatives', value: '15', icon: <Target size={24} /> }
      ],
      caseStudies: [
        {
          title: 'Green Technology',
          description: 'Developed eco-friendly solutions for industrial clients',
          impact: 'Reduced energy consumption by 45%'
        },
        {
          title: 'Community Development',
          description: 'Implemented education and training programs',
          impact: 'Created 500+ job opportunities'
        }
      ]
    }
  };

  const value = coreValues[id];

  if (!value) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">Value Not Found</h2>
          <Link to="/about" className="text-blue-400 hover:text-blue-300">
            Return to About
          </Link>
        </div>
      </div>
    );
  }

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
          className="relative rounded-2xl overflow-hidden mb-12"
        >
          <div className="aspect-[21/9] w-full">
            <img 
              src={value.image} 
              alt={value.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent">
            <div className="absolute bottom-0 left-0 p-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{value.title}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">{value.description}</p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Overview */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
              <p className="text-gray-300 text-lg leading-relaxed">{value.fullDescription}</p>
            </div>

            {/* Key Points */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Key Points</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {value.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <span className="text-blue-400 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300 text-lg">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Case Studies</h2>
              <div className="space-y-6">
                {value.caseStudies.map((study, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-3">{study.description}</p>
                    <div className="flex items-center text-blue-400">
                      <TrendingUp className="mr-2" size={20} />
                      <span className="font-medium">Impact: {study.impact}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Key Statistics</h2>
              <div className="space-y-4">
                {value.stats.map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-blue-400">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-gray-300">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Want to Learn More?</h3>
              <p className="text-gray-200 mb-6">Discover how we implement these values in our work.</p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutCardDetail; 