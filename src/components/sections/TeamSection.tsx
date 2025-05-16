'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaGithub, FaTwitter, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { fadeIn } from '@/utils/motion';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
  socials?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: 'Mikiyas Taye',
    role: 'CEO & Website Developer',
    bio: 'Passionate about creating innovative web solutions and leading our talented team.',
    image: '/team/mikiyas.jpeg',
    socials: {
      linkedin: '#',
      github: '#',
      twitter: '#',
    },
  },
  {
    name: 'Amen Dereje',
    role: 'Website Developer',
    bio: 'Specialized in creating responsive and user-friendly web applications.',
    image: '/team/amen.jpeg',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Betselot Bezuayehu',
    role: 'Software Developer',
    bio: 'Expert in building robust and scalable software solutions.',
    image: '/team/betselot.jpeg',
    socials: {
      linkedin: '#',
      github: '#',
    },
  },
  {
    name: 'Jecoliah Menberu',
    role: 'Sales Agent',
    bio: 'Dedicated to building strong client relationships and driving business growth.',
    image: '/team/jecoliah.jpeg',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Bisrat Kifle',
    role: 'Graphics Designer and Video Editor',
    bio: 'Creative professional with an eye for detail in visual storytelling.',
    image: '/team/bisrat.jpeg',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Tesfahun Gibitan',
    role: '3D and VFX Artist',
    bio: 'Bringing imagination to life through stunning 3D and visual effects.',
    image: '/team/tesfahun.jpeg',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Mikyas Seffi',
    role: 'Marketing Consultant',
    bio: 'Strategic thinker helping businesses reach their full potential.',
    image: '/team/mikyas.jpeg',
    socials: {
      linkedin: '#',
      twitter: '#',
    },
  },
];

const TeamSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (memberName: string) => {
    setImageError(prev => ({ ...prev, [memberName]: true }));
  };

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4" id='team'>
          <motion.div
            variants={fadeIn('up', 'tween', 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#033d54' }}>
              Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Meet the talented professionals behind our success
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-[#033d54] hover:bg-[#065885] text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
            >
              Meet the Team
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-4 md:inset-10 bg-white rounded-xl shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-4 md:p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-3xl font-bold" style={{ color: '#033d54' }}>
                    Meet Our Team
                  </h2>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="text-gray-500 hover:text-[#033d54] transition-colors"
                  >
                    <FaTimes size={24} />
                  </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <motion.div
                      key={member.name}
                      variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
                      initial="hidden"
                      animate="show"
                      className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="aspect-w-1 aspect-h-1 mb-4">
                        {member.image && !imageError[member.name] ? (
                          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover"
                              onError={() => handleImageError(member.name)}
                            />
                          </div>
                        ) : (
                          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-b from-[#033d54] to-[#065885] flex items-center justify-center">
                            <span className="text-3xl text-white/90 font-bold">
                              {member.name.charAt(0)}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2" style={{ color: '#033d54' }}>
                          {member.name}
                        </h3>
                        <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                        <p className="text-gray-500 text-sm mb-4">{member.bio}</p>
                        <div className="flex justify-center space-x-4">
                          {member.socials?.linkedin && (
                            <a
                              href={member.socials.linkedin}
                              className="text-gray-400 hover:text-[#033d54] transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin size={20} />
                            </a>
                          )}
                          {member.socials?.github && (
                            <a
                              href={member.socials.github}
                              className="text-gray-400 hover:text-[#033d54] transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub size={20} />
                            </a>
                          )}
                          {member.socials?.twitter && (
                            <a
                              href={member.socials.twitter}
                              className="text-gray-400 hover:text-[#033d54] transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaTwitter size={20} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default TeamSection; 