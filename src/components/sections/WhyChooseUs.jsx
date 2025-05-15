'use client';

import { motion } from "framer-motion";
import { FaAward, FaPalette, FaHandshake, FaHeadset } from 'react-icons/fa';
import CountUp from 'react-countup';

const stats = [
  {
    icon: <FaAward className="text-4xl text-[#033D54]" />,
    number: "100",
    suffix: "%",
    title: "Quality Services",
    description: "Delivering excellence in every project"
  },
  {
    icon: <FaPalette className="text-4xl text-[#033D54]" />,
    number: "10",
    suffix: "+",
    title: "Creative Designers",
    description: "Expert professionals at your service"
  },
  {
    icon: <FaHandshake className="text-4xl text-[#033D54]" />,
    number: "100",
    suffix: "%",
    title: "Free Consultation",
    description: "Initial consultation at no cost"
  },
  {
    icon: <FaHeadset className="text-4xl text-[#033D54]" />,
    number: "24/7",
    suffix: "",
    title: "Customer Support",
    description: "Always here when you need us"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#033D54]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#033D54]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-[#033D54] mb-2 bg-blue-50 inline-block px-4 py-1 rounded-full"
          >
            Why Choose Us
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Excellence in Every Detail
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
                         border-2 border-transparent hover:border-[#033D54] text-center"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-[#033D54] mb-2">
                <CountUp end={parseInt(stat.number)} duration={2.5} />
                {stat.suffix}
              </h3>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.title}
              </h4>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 