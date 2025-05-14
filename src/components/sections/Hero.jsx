"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Button from "../ui/Button.jsx";
import { motion } from "framer-motion";

const Hero = () => {
  const slides = [
    { img: "/images/slide1.jpg", text: "Web Development Solutions" },
    { img: "/images/slide2.jpg", text: "Professional Video Editing" },
    { img: "/images/slide3.jpg", text: "Creative Logo Design" },
    { img: "/images/slide4.jpg", text: "Mobile App Development" },
  ];

  return (
    <div className="relative bg-[#033d54] overflow-hidden">
      <Swiper
        modules={[Navigation]}
        navigation
        className="w-full h-[600px] relative"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              {/* Background Image Container */}
              <div className="absolute inset-0 flex items-end">
                <div className="w-full h-[300px] relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center rounded-t-[50px]"
                    style={{ backgroundImage: `url(${slide.img})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#033d54] to-transparent rounded-t-[50px]" />
                </div>
              </div>

              {/* Content Container */}
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center px-4">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white text-5xl md:text-6xl font-bold mb-6"
                  >
                    {slide.text.split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        className="inline-block mr-2"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <Button variant="primary" className="text-lg px-8 py-3">
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Elements */}
      <div className="absolute -left-20 top-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute -right-20 top-1/3 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
    </div>
  );
};

export default Hero;
