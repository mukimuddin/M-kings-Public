import React from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail, ArrowLeft, Award, Book, Briefcase, Calendar, Globe } from 'lucide-react';

const TeamMember = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const teamMembers = {
    'sarah-johnson': {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&h=500&auto=format&fit=crop',
      description: 'Visionary leader with over 15 years of experience in technology and business transformation.',
      bio: 'Sarah is a dynamic leader who has been at the forefront of digital transformation for over a decade. Her innovative approach to business challenges and commitment to excellence has helped numerous organizations achieve their strategic goals.',
      expertise: ['Strategic Planning', 'Digital Transformation', 'Executive Leadership', 'Innovation Management'],
      achievements: [
        'Led successful digital transformation projects for Fortune 500 companies',
        'Named "Top 40 Under 40" business leaders by Industry Weekly',
        'Speaker at multiple international technology conferences'
      ],
      experience: [
        {
          company: 'Tech Innovations Inc.',
          role: 'VP of Strategy',
          period: '2015-2020'
        },
        {
          company: 'Global Solutions Ltd.',
          role: 'Director of Operations',
          period: '2010-2015'
        }
      ],
      education: [
        {
          degree: 'MBA',
          institution: 'Harvard Business School',
          year: '2010'
        },
        {
          degree: 'BSc in Computer Science',
          institution: 'MIT',
          year: '2005'
        }
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@mkingsgroup.com'
      }
    },
    'michael-chen': {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&h=500&auto=format&fit=crop',
      description: 'Tech innovator specializing in AI, cloud architecture, and digital transformation strategies.',
      bio: 'Michael is a technology visionary with deep expertise in artificial intelligence and cloud computing. His innovative solutions have revolutionized how businesses approach digital challenges.',
      expertise: ['Artificial Intelligence', 'Cloud Architecture', 'System Design', 'Technology Strategy'],
      achievements: [
        'Developed patented AI algorithms for predictive analytics',
        'Led the development of cloud-native solutions for enterprise clients',
        'Published author in leading tech journals'
      ],
      experience: [
        {
          company: 'AI Solutions Corp',
          role: 'Head of AI',
          period: '2018-2022'
        },
        {
          company: 'Cloud Tech Systems',
          role: 'Senior Architect',
          period: '2014-2018'
        }
      ],
      education: [
        {
          degree: 'PhD in Computer Science',
          institution: 'Stanford University',
          year: '2014'
        },
        {
          degree: 'MSc in AI',
          institution: 'UC Berkeley',
          year: '2010'
        }
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@mkingsgroup.com'
      }
    },
    'emily-rodriguez': {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&h=500&auto=format&fit=crop',
      description: 'Creative director with a passion for creating beautiful and functional digital experiences.',
      bio: 'Emily is an award-winning designer who brings creativity and user-centric thinking to every project. Her innovative approach to design has helped shape the digital presence of numerous global brands.',
      expertise: ['UI/UX Design', 'Brand Strategy', 'Design Systems', 'User Research'],
      achievements: [
        'Winner of multiple design awards including Red Dot Design Award',
        'Created design systems for Fortune 100 companies',
        'Featured speaker at international design conferences'
      ],
      experience: [
        {
          company: 'Creative Solutions Agency',
          role: 'Design Director',
          period: '2019-2023'
        },
        {
          company: 'Digital Innovations Co.',
          role: 'Senior UX Designer',
          period: '2015-2019'
        }
      ],
      education: [
        {
          degree: 'Master of Design',
          institution: 'Rhode Island School of Design',
          year: '2015'
        },
        {
          degree: 'BFA in Graphic Design',
          institution: 'Parsons School of Design',
          year: '2012'
        }
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@mkingsgroup.com'
      }
    },
    'david-kim': {
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&h=500&auto=format&fit=crop',
      description: 'Full-stack developer with expertise in modern web technologies and cloud solutions.',
      bio: 'David is a seasoned developer with a strong background in full-stack development and cloud architecture. His technical expertise and problem-solving skills have been instrumental in delivering robust and scalable solutions.',
      expertise: ['Full-Stack Development', 'Cloud Architecture', 'DevOps', 'Agile Methodologies'],
      achievements: [
        'Architected and launched multiple successful SaaS platforms',
        'Contributed to major open-source projects',
        'Led development teams for enterprise-level applications'
      ],
      experience: [
        {
          company: 'Tech Solutions Inc.',
          role: 'Senior Full-Stack Developer',
          period: '2017-2023'
        },
        {
          company: 'Web Innovations Ltd.',
          role: 'Software Engineer',
          period: '2014-2017'
        }
      ],
      education: [
        {
          degree: 'MSc in Software Engineering',
          institution: 'Georgia Institute of Technology',
          year: '2014'
        },
        {
          degree: 'BSc in Computer Science',
          institution: 'University of Washington',
          year: '2012'
        }
      ],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@mkingsgroup.com'
      }
    }
    // Add other team members similarly
  };

  const member = teamMembers[id];

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-900 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">Team Member Not Found</h2>
          <Link to="/team" className="text-blue-400 hover:text-blue-300">
            Return to Team Page
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link 
          to="/team"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8 group"
        >
          <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
          Back to Team
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image and Basic Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <div className="aspect-square overflow-hidden rounded-xl mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">{member.name}</h1>
              <p className="text-blue-400 font-medium mb-4">{member.role}</p>
              <p className="text-gray-300 mb-6">{member.description}</p>
              <div className="flex space-x-4">
                <motion.a
                  href={member.social.linkedin}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href={member.social.twitter}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={24} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail size={24} />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Detailed Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Bio Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Biography</h2>
              <p className="text-gray-300">{member.bio}</p>
            </div>

            {/* Expertise Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {member.expertise.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-gray-300"
                  >
                    <Award size={20} className="text-blue-400 mr-2" />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Key Achievements</h2>
              <ul className="space-y-3">
                {member.achievements.map((achievement, index) => (
                  <li 
                    key={index}
                    className="flex items-start text-gray-300"
                  >
                    <Globe size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Professional Experience</h2>
              <div className="space-y-4">
                {member.experience.map((exp, index) => (
                  <div key={index} className="flex items-start">
                    <Briefcase size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold">{exp.role}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-4">Education</h2>
              <div className="space-y-4">
                {member.education.map((edu, index) => (
                  <div key={index} className="flex items-start">
                    <Book size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-white font-semibold">{edu.degree}</h3>
                      <p className="text-blue-400">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember; 