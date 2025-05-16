'use client';

import { motion } from "framer-motion";
import { FaArrowRight } from 'react-icons/fa';

const solutions = [
  {
    question: "Have a Website That Needs a Redesign or Looks Off?",
    description: "We can redesign your website to meet design trends and make it visually appealing.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  {
    question: "Is Your Website Slow and Underperforming in Speed?",
    description: "We can rebuild you a blazing fast website that loads quickly and looks great.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  {
    question: "Do You Want ChatGPT or Gemini AI Integrated?",
    description: "We can integrate any AI like ChatGPT or Gemini into your system for enhanced capabilities.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    question: "Do You Want a Brand That Stands Out and Resonates?",
    description: "We create compelling brand identities that resonate with your audience and stand out.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
  },
  {
    question: "Do You Want a New Website with Great UI and Speed?",
    description: "We can design a great UI and develop the fastest website, then deploy it for you.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2036&auto=format&fit=crop"
  }
];

const Solutions = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#033D54]/5 via-white to-[#033D54]/5 relative" id="solutions">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-medium text-[#033D54] mb-2 bg-blue-50 inline-block px-4 py-1 rounded-full"
          >
            Solutions
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Transforming Challenges into Opportunities
          </motion.h2>
        </div>

        <div className="space-y-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} 
                         gap-8 items-center bg-white rounded-2xl p-8 shadow-sm hover:shadow-md 
                         transition-all duration-300 group`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  src={solution.image}
                  alt={solution.question}
                  className="w-full h-[300px] object-cover"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-[#033D54]">
                  {solution.question}
                </h3>
                <p className="text-gray-600">
                  {solution.description}
                </p>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-[#033D54] text-white rounded-lg 
                                   hover:bg-[#033D54]/90 transition-colors duration-300">
                    Learn more <FaArrowRight />
                  </button>
                  <button className="px-6 py-3 border-2 border-[#033D54] text-[#033D54] rounded-lg 
                                   hover:bg-[#033D54] hover:text-white transition-colors duration-300">
                    Contact Us
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions; 