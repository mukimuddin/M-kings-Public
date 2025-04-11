import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 'sarah-johnson',
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop',
      description: 'Visionary leader with over 15 years of experience in technology and business transformation.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'sarah@mkingsgroup.com'
      }
    },
    {
      id: 'michael-chen',
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop',
      description: 'Tech innovator specializing in AI, cloud architecture, and digital transformation strategies.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'michael@mkingsgroup.com'
      }
    },
    {
      id: 'emily-rodriguez',
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop',
      description: 'Creative director with a passion for creating beautiful and functional digital experiences.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@mkingsgroup.com'
      }
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop',
      description: 'Full-stack developer with expertise in modern web technologies and cloud solutions.',
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'david@mkingsgroup.com'
      }
    }
  ];

  return (
    <section className="bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the talented individuals who make our vision a reality through innovation,
            dedication, and expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700 group"
            >
              <Link to={`/team/${member.id}`}>
                <div className="relative mb-6 overflow-hidden rounded-xl">
                  <div className="aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
              </Link>

              <div className="flex justify-center space-x-4">
                <motion.a
                  href={member.social.linkedin}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={member.social.twitter}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={20} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 