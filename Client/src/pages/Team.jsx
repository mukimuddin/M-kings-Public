import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';

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
        <ScrollReveal>
          <motion.div
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the talented individuals who make our vision a reality through innovation,
              dedication, and expertise.
            </p>
          </motion.div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.id} delay={0.1 * (index + 1)}>
              <Link to={`/team/${member.id}`}>
                <TiltCard>
                  <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 group">
                    <div className="relative">
                      <motion.img
                        src={member.image}
                        alt={member.name}
                        className="w-full aspect-square object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-blue-400 mb-3">{member.role}</p>
                      <p className="text-gray-400 text-sm mb-4">
                        {member.description}
                      </p>
                      <div className="flex space-x-4">
                        {Object.entries(member.social).map(([platform, link]) => (
                          <motion.a
                            key={platform}
                            href={link}
                            className="text-gray-400 hover:text-blue-400 transition-colors"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {platform === 'linkedin' && <Linkedin size={20} />}
                            {platform === 'twitter' && <Twitter size={20} />}
                            {platform === 'email' && <Mail size={20} />}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 