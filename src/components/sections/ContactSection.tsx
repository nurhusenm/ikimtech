'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { FaEnvelope, FaPhone, FaUser, FaMapMarkerAlt, FaClock, FaCheckCircle } from 'react-icons/fa';
import Image from 'next/image';

const services = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Web Hosting",
  "Graphics Design",
  "Printing",
  "3D Designing",
  "Video Editing",
  "Market Consultancy"
];

const contactPoints = [
  {
    icon: <FaMapMarkerAlt className="text-2xl text-[#033d54]" />,
    title: "Visit Our Office",
    description: "Addis Ababa, Ethiopia"
  },
  {
    icon: <FaClock className="text-2xl text-[#033d54]" />,
    title: "Working Hours",
    description: "Mon - Fri: 9:00 AM - 6:00 PM"
  },
  {
    icon: <FaCheckCircle className="text-2xl text-[#033d54]" />,
    title: "Our Promise",
    description: "Quality service with quick turnaround time"
  }
];

const ContactSection = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    user_service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_4i5zr28',
        'template_94oifa9',
        formRef.current!,
        '53yNEswVHf7mDIzQn'
      );

      if (result.text === 'OK') {
        toast.success('Message sent successfully! We\'ll get back to you soon.');
        setFormData({
          user_name: '',
          user_email: '',
          user_phone: '',
          user_service: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-50" id='contact'>
      <Toaster position="top-center" />
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{once: true}}

              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <h2 className="text-4xl font-bold mb-2" style={{ color: '#033d54' }}>
                Let's Work Together
              </h2>
              <p className="text-gray-600 mb-8">
                We're excited to help bring your ideas to life! Share your project details with us.
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FaUser />
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    placeholder="Your Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#033d54] focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 bg-white"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FaEnvelope />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    placeholder="Your Email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#033d54] focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 bg-white"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                    <FaPhone />
                  </div>
                  <input
                    type="tel"
                    name="user_phone"
                    value={formData.user_phone}
                    onChange={handleChange}
                    required
                    placeholder="Your Mobile"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#033d54] focus:border-transparent outline-none transition-all text-gray-800 placeholder-gray-400 bg-white"
                  />
                </div>

                <select
                  name="user_service"
                  value={formData.user_service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#033d54] focus:border-transparent outline-none transition-all text-gray-800 bg-white"
                >
                  <option value="" className="text-gray-400">Select Service</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="text-gray-800">
                      {service}
                    </option>
                  ))}
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Special Note"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#033d54] focus:border-transparent outline-none transition-all resize-none text-gray-800 placeholder-gray-400 bg-white"
                />

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  disabled={isLoading}
            viewport={{once: true}}

                  className="relative w-full px-6 py-3 overflow-hidden rounded-full group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#033d54] via-[#0a4f6b] to-[#033d54] border-2 border-cyan-500/30" />
                  <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shimmer" />
                  </div>
                  <span className="relative z-10 text-white font-semibold tracking-wider">
                    {isLoading ? 'Sending...' : 'Send Message'}
                  </span>
                </motion.button>
              </form>
            </motion.div>

            {/* Right Column - Content and Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
            viewport={{once: true}}

              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#033d54' }}>
                  Why Choose Us?
                </h3>
                <div className="space-y-6">
                  {contactPoints.map((point, index) => (
                    <motion.div
                      key={point.title}
            viewport={{once: true}}

                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="p-3 bg-blue-50 rounded-lg">
                        {point.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1" style={{ color: '#033d54' }}>
                          {point.title}
                        </h4>
                        <p className="text-gray-600">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative h-[300px] w-full">
                <Image
                  src="/contact-illustration.svg"
                  alt="Contact Illustration"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 