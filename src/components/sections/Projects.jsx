'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: "Nawla Trading PLC",
    description: "This Nawla Trading website showcases products and services with a clean, responsive design.",
    image: "/images/nawla/main.jpeg",
  },
  {
    id: 2,
    title: "Gojo Guest House",
    description: "This guesthouse website highlights services, room options, and amenities.",
    image: "/images/gojo/main1.jpeg",
  },
  {
    id: 3,
    title: "Brand Clothing",
    description: "Brand Clothing brings you timeless fashion with a modern touch.",
    image: "/images/brand/main.png",
  },
  {
    id: 4,
    title: "Heiver Tech",
    description: "Provides various technology services and is globally recognized for its outstanding innovations, cutting-edge solutions, and commitment to excellence in the tech industry.",
    image: "/images/helver/main.jpeg",
  },
  {
    id: 5,
    title: "ነጋሪት Marketing Agency",
    description: "Offers a wide range of digital services, striving to modernize the world by providing innovative and effective marketing solutions.",
    image: "/images/negarit/main.jpg",
  },
  {
    id: 6,
    title: "Adape Leather Design",
    description: "Specializes in crafting a variety of high-quality leather products, delighting clients with beautiful and expertly handcrafted designs.",
    image: "/images/adape/main.jpeg",
  },
  {
    id: 7,
    title: "ShoeIT",
    description: "This mobile app is dedicated to shoe sales, offering a clean, user-friendly design. It features easy navigation, comprehensive product details, and a visually appealing layout that enhances the shopping experience.",
    image: "/images/shoelt/main.jpeg",
  },
  {
    id: 7,
    title: "eromica",
    description: "This mobile app is dedicated to shoe sales, offering a clean, user-friendly design. It features easy navigation, comprehensive product details, and a visually appealing layout that enhances the shopping experience.",
    image: "/images/eromica/main.jpeg",
  },
  {
    id: 8,
    title: "habesha",
    description: "This mobile app is dedicated to shoe sales, offering a clean, user-friendly design. It features easy navigation, comprehensive product details, and a visually appealing layout that enhances the shopping experience.",
    image: "/images/habesha/main.jpeg",
  },
  {
    id: 9,
    title: "hany",
    description: "This mobile app is dedicated to shoe sales, offering a clean, user-friendly design. It features easy navigation, comprehensive product details, and a visually appealing layout that enhances the shopping experience.",
    image: "/images/hany/main.jpeg",
  },
  {
    id: 10,
    title: "yegna",
    description: "This mobile app is dedicated to shoe sales, offering a clean, user-friendly design. It features easy navigation, comprehensive product details, and a visually appealing layout that enhances the shopping experience.",
    image: "/images/yegna/main.jpeg",
  },
  
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = projects.length - 1;
      if (nextIndex >= projects.length) nextIndex = 0;
      return nextIndex;
    });
  };

  const getAdjacentProjects = () => {
    const prev = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    const next = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    return { prev, next };
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden" id='projects'>
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#033D54]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#033D54]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm font-medium text-[#033D54] mb-2 bg-blue-50 inline-block px-4 py-1 rounded-full"
            >
              Our Work
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-2"
            >
              <span className="text-[#033D54]">&gt;</span> 
              projects we did for our clients
            </motion.h2>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => paginate(-1)}
              className="p-3 rounded-full bg-[#033D54]/10 hover:bg-[#033D54] text-[#033D54] hover:text-white transition-colors duration-300"
            >
              <FaArrowLeft size={20} />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-3 rounded-full bg-[#033D54]/10 hover:bg-[#033D54] text-[#033D54] hover:text-white transition-colors duration-300"
            >
              <FaArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Projects Slider */}
        <div className="relative h-[600px] overflow-hidden">
          {/* Previous Project (Half-visible) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 sm:w-1/4 w-1/6 h-[400px] opacity-50">
            <img
              src={projects[getAdjacentProjects().prev].image}
              alt={projects[getAdjacentProjects().prev].title}
              className="w-full h-full object-cover rounded-r-3xl"
            />
          </div>

          {/* Current Project */}
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
            viewport={{once: true}}

              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute left-1/6 sm:left-1/4 w-4/6 sm:w-1/2 h-full"
            >
              <div className="w-full h-full px-4">
                <div className="bg-white rounded-3xl p-6 shadow-xl h-full">
                  <div className="relative h-[400px] mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={projects[currentIndex].image}
                      alt={projects[currentIndex].title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#033D54] mb-3">
                    {projects[currentIndex].title}
                  </h3>
                  <p className="text-gray-600">
                    {projects[currentIndex].description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Next Project (Half-visible) */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/6 sm:w-1/4 h-[400px] opacity-50">
            <img
              src={projects[getAdjacentProjects().next].image}
              alt={projects[getAdjacentProjects().next].title}
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>
        </div>

        {/* Project Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'w-8 bg-[#033D54]' 
                  : 'bg-[#033D54]/20 hover:bg-[#033D54]/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 