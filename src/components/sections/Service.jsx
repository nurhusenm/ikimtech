'use client';

import { motion } from "framer-motion";
import { FaCode, FaMobile, FaPalette, FaServer, FaPrint, FaCube } from 'react-icons/fa';
import { MdDesignServices, MdVideoSettings } from 'react-icons/md';
import { BiSolidConsole } from 'react-icons/bi';
import { BsGraphUp } from 'react-icons/bs';

const services = [
  {
    icon: <FaCode className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "Web Development",
    description: "Build user-friendly websites that work seamlessly on all devices. Create intuitive designs that enhance user experience and engagement."
  },
  {
    icon: <FaMobile className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "Mobile App Development",
    description: "Custom iOS and Android applications tailored to your business needs, along with efficient cross-platform solutions."
  },
  {
    icon: <MdDesignServices className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "UI/UX Design",
    description: "Emphasizing user-centric design to create intuitive interfaces, along with prototyping and wireframing to visualize and test concepts."
  },
  {
    icon: <FaServer className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "Web Hosting",
    description: "Ensures that your website is accessible to users, allowing businesses and individuals to establish their online presence easily."
  },
  {
    icon: <FaPalette className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "Graphics Design",
    description: "Creating logos, branding assets, and digital visuals for websites and social media by merging artistic flair with technical expertise."
  },
  {
    icon: <FaPrint className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "Printing",
    description: "Our printing design service specializes in creating high-quality graphics for print media like brochures, business cards, and posters."
  },
  {
    icon: <FaCube className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "3D Designing",
    description: "Offers innovative solutions for creating detailed three-dimensional models and visualizations. Whether for product design, architectural visualization, or animation."
  },
  {
    icon: <MdVideoSettings className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "Video Editing",
    description: "Transforms raw footage into polished, engaging content. We specialize in creating captivating videos for promotional materials, social media, events, and more."
  },
  {
    icon: <BsGraphUp className="text-4xl text-[#033d54] group-hover:text-[#033d54]" />,
    title: "Market Consultancy",
    description: "Expert analysis and strategic insights to help businesses understand market trends, identify opportunities, and make data-driven decisions for growth and success."
  }
];

const Service = () => {
  return (
    <section className="pt-64 pb-16 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2f6] relative " id="services">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,61,84,0.05)_100%)]"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#033d54] mb-2 bg-blue-50 inline-block px-4 py-1 rounded-full">
            services
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center justify-center gap-2">
            <span className="text-[#033d54]">&gt;</span> 
            we offer a wide range of  services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
            viewport={{once: true}}

              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm hover:shadow-md transition-all duration-300 
                         border-2 border-transparent hover:border-[#033D54] cursor-pointer"
            >
              <div className="mb-4 ">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#033D54]">
                {service.title}
              </h3>
              <p className="text-gray-600">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Service;