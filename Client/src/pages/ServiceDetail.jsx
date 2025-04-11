import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Check, 
  Target, 
  Users, 
  Clock, 
  ChartBar, 
  Lightbulb, 
  Shield, 
  TrendingUp, 
  Code, 
  Brain, 
  Globe, 
  Plane, 
  Briefcase, 
  Award, 
  Zap, 
  BarChart,
  Cloud,
  Server,
  MessageSquare,
  Eye,
  Smartphone,
  Calendar,
  Bell
} from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();

  const services = {
    'technology-solutions': {
      title: 'Technology Solutions',
      description: 'Cutting-edge technology solutions for your business needs.',
      fullDescription: 'Our technology solutions are designed to transform your business operations and drive innovation. We leverage the latest technologies to create custom solutions that address your specific challenges and opportunities. Our team of experts combines technical expertise with business acumen to deliver solutions that drive growth and efficiency.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
      benefits: [
        'Improved operational efficiency',
        'Enhanced data security',
        'Scalable infrastructure',
        'Reduced IT costs',
        'Increased productivity',
        'Better decision-making',
        'Competitive advantage',
        'Future-proof solutions'
      ],
      features: [
        {
          title: 'Cloud Computing',
          description: 'Secure and scalable cloud solutions for your business',
          icon: <Cloud size={24} />
        },
        {
          title: 'Cybersecurity',
          description: 'Advanced security measures to protect your digital assets',
          icon: <Shield size={24} />
        },
        {
          title: 'IT Infrastructure',
          description: 'Robust infrastructure design and implementation',
          icon: <Server size={24} />
        },
        {
          title: 'Digital Transformation',
          description: 'Complete digital transformation strategies and execution',
          icon: <TrendingUp size={24} />
        }
      ],
      process: [
        'Initial Assessment',
        'Strategy Development',
        'Implementation',
        'Testing & Quality Assurance',
        'Deployment & Support'
      ],
      stats: [
        { label: 'Client Satisfaction', value: '98%', icon: <Users size={24} /> },
        { label: 'Project Success', value: '95%', icon: <Target size={24} /> },
        { label: 'Cost Reduction', value: '30%', icon: <ChartBar size={24} /> }
      ],
      caseStudies: [
        {
          title: 'Enterprise Cloud Migration',
          description: 'Successfully migrated a Fortune 500 company to cloud infrastructure',
          impact: 'Reduced operational costs by 40%',
          technologies: ['AWS', 'Azure', 'Kubernetes']
        },
        {
          title: 'Cybersecurity Implementation',
          description: 'Implemented comprehensive security framework for financial institution',
          impact: 'Zero security breaches in 2 years',
          technologies: ['SIEM', 'EDR', 'Zero Trust']
        }
      ],
      technologies: [
        'Cloud Platforms (AWS, Azure, GCP)',
        'Containerization (Docker, Kubernetes)',
        'DevOps Tools',
        'Security Solutions',
        'Monitoring Systems',
        'Automation Tools'
      ]
    },
    'ai-machine-learning': {
      title: 'AI & Machine Learning',
      description: 'Harness the power of artificial intelligence to drive innovation.',
      fullDescription: 'Our AI and machine learning solutions help businesses automate processes, gain valuable insights, and make data-driven decisions. We develop custom AI solutions that adapt and grow with your business needs. Our team of data scientists and AI experts create intelligent systems that transform your operations.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop',
      benefits: [
        'Automated decision making',
        'Predictive analytics',
        'Pattern recognition',
        'Process optimization',
        'Intelligent automation',
        'Enhanced customer experience',
        'Risk reduction',
        'Competitive insights'
      ],
      features: [
        {
          title: 'Machine Learning Models',
          description: 'Custom ML models for your specific use cases',
          icon: <Brain size={24} />
        },
        {
          title: 'Natural Language Processing',
          description: 'Advanced text and speech processing solutions',
          icon: <MessageSquare size={24} />
        },
        {
          title: 'Computer Vision',
          description: 'Image and video analysis capabilities',
          icon: <Eye size={24} />
        },
        {
          title: 'Predictive Analytics',
          description: 'Data-driven forecasting and insights',
          icon: <TrendingUp size={24} />
        }
      ],
      process: [
        'Data Collection & Analysis',
        'Model Development',
        'Training & Validation',
        'Integration & Deployment',
        'Monitoring & Optimization'
      ],
      stats: [
        { label: 'Accuracy Rate', value: '95%', icon: <Target size={24} /> },
        { label: 'Process Automation', value: '70%', icon: <Zap size={24} /> },
        { label: 'Cost Savings', value: '45%', icon: <ChartBar size={24} /> }
      ],
      caseStudies: [
        {
          title: 'Predictive Maintenance',
          description: 'Implemented AI-driven maintenance system for manufacturing',
          impact: 'Reduced downtime by 60%',
          technologies: ['TensorFlow', 'PyTorch', 'Time Series Analysis']
        },
        {
          title: 'Customer Service AI',
          description: 'Developed intelligent chatbot for customer support',
          impact: 'Increased response rate by 300%',
          technologies: ['NLP', 'BERT', 'Dialogflow']
        }
      ],
      technologies: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Natural Language Processing',
        'Computer Vision',
        'Reinforcement Learning'
      ]
    },
    'software-development': {
      title: 'Software Development',
      description: 'Custom software solutions tailored to your requirements.',
      fullDescription: 'We create custom software solutions that perfectly align with your business objectives. Our development team uses cutting-edge technologies and best practices to deliver high-quality, scalable applications. We follow agile methodologies to ensure timely delivery and continuous improvement.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop',
      benefits: [
        'Custom-built solutions',
        'Seamless integration',
        'Scalable architecture',
        'Enhanced user experience',
        'Ongoing support',
        'Regular updates',
        'Security compliance',
        'Performance optimization'
      ],
      features: [
        {
          title: 'Web Applications',
          description: 'Modern and responsive web applications',
          icon: <Globe size={24} />
        },
        {
          title: 'Mobile Apps',
          description: 'Native and cross-platform mobile applications',
          icon: <Smartphone size={24} />
        },
        {
          title: 'API Development',
          description: 'Robust and secure API solutions',
          icon: <Code size={24} />
        },
        {
          title: 'Enterprise Software',
          description: 'Large-scale enterprise applications',
          icon: <Briefcase size={24} />
        }
      ],
      process: [
        'Requirements Analysis',
        'Design & Architecture',
        'Development',
        'Testing & QA',
        'Deployment & Maintenance'
      ],
      stats: [
        { label: 'Projects Completed', value: '200+', icon: <Target size={24} /> },
        { label: 'Client Retention', value: '90%', icon: <Users size={24} /> },
        { label: 'Code Quality', value: '98%', icon: <Award size={24} /> }
      ],
      caseStudies: [
        {
          title: 'E-commerce Platform',
          description: 'Developed scalable e-commerce solution for retail chain',
          impact: 'Increased sales by 150%',
          technologies: ['React', 'Node.js', 'MongoDB']
        },
        {
          title: 'Healthcare Management System',
          description: 'Created comprehensive healthcare management platform',
          impact: 'Reduced administrative time by 50%',
          technologies: ['Angular', 'Spring Boot', 'PostgreSQL']
        }
      ],
      technologies: [
        'Frontend (React, Angular, Vue)',
        'Backend (Node.js, Python, Java)',
        'Databases (SQL, NoSQL)',
        'Cloud Services',
        'DevOps Tools',
        'Testing Frameworks'
      ]
    },
    'travel-services': {
      title: 'Travel Services',
      description: 'Exclusive travel experiences and comprehensive services.',
      fullDescription: 'Our premium travel services offer unique and personalized experiences for both business and leisure travelers. We handle every aspect of your journey to ensure a seamless and memorable travel experience. Our team of travel experts provides customized solutions for all your travel needs.',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
      benefits: [
        'Personalized itineraries',
        'Luxury accommodations',
        'VIP transportation',
        '24/7 support',
        'Exclusive access',
        'Cost optimization',
        'Risk management',
        'Cultural experiences'
      ],
      features: [
        {
          title: 'Business Travel',
          description: 'Efficient and comfortable business travel solutions',
          icon: <Briefcase size={24} />
        },
        {
          title: 'Luxury Vacations',
          description: 'Curated luxury vacation experiences',
          icon: <Award size={24} />
        },
        {
          title: 'Event Planning',
          description: 'Corporate and special event planning',
          icon: <Calendar size={24} />
        },
        {
          title: 'Concierge Services',
          description: 'Premium concierge assistance',
          icon: <Bell size={24} />
        }
      ],
      process: [
        'Consultation',
        'Planning & Booking',
        'Pre-trip Preparation',
        'Travel Support',
        'Post-trip Follow-up'
      ],
      stats: [
        { label: 'Client Satisfaction', value: '99%', icon: <Users size={24} /> },
        { label: 'Cost Savings', value: '25%', icon: <ChartBar size={24} /> },
        { label: 'Destinations', value: '100+', icon: <Globe size={24} /> }
      ],
      caseStudies: [
        {
          title: 'Corporate Retreat',
          description: 'Organized executive retreat for multinational company',
          impact: 'Enhanced team collaboration by 40%',
          services: ['Accommodation', 'Transportation', 'Team Building']
        },
        {
          title: 'Luxury Vacation',
          description: 'Curated exclusive vacation package for high-net-worth clients',
          impact: 'Exceeded client expectations',
          services: ['Private Jet', 'Villa Rental', 'Personal Guide']
        }
      ],
      services: [
        'Flight Bookings',
        'Hotel Reservations',
        'Transportation',
        'Travel Insurance',
        'Visa Assistance',
        'Local Experiences'
      ]
    }
  };

  const service = services[id];

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">Service Not Found</h2>
          <Link to="/services" className="text-blue-400 hover:text-blue-300">
            Return to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-6 relative md:static z-[60]">
        <Link
          to="/services"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Services
        </Link>
      </div>

      {/* Banner Section */}
      <div className="relative bg-gray-800 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/70"></div>
        </div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 break-words"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {service.title}
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {service.description}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4">
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
              <p className="text-gray-300 text-lg leading-relaxed">{service.fullDescription}</p>
            </div>

            {/* Features */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="text-blue-400 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mt-1">
                      <span className="text-blue-400 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Studies */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Case Studies</h2>
              <div className="space-y-6">
                {service.caseStudies.map((study, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                    <p className="text-gray-300 mb-3">{study.description}</p>
                    <div className="flex items-center text-blue-400 mb-3">
                      <TrendingUp className="mr-2" size={20} />
                      <span className="font-medium">Impact: {study.impact}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {(study.technologies || study.services).map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                          {item}
                        </span>
                      ))}
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
            {/* Process */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Our Process</h2>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-semibold">{index + 1}</span>
                    </div>
                    <span className="text-gray-300 text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Key Statistics</h2>
              <div className="space-y-4">
                {service.stats.map((stat, index) => (
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

            {/* Technologies/Services */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">
                {service.technologies ? 'Technologies' : 'Services'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {(service.technologies || service.services).map((item, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-gray-200 mb-6">Let's discuss how we can help transform your business.</p>
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

export default ServiceDetail; 