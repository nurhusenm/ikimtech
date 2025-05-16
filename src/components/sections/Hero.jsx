// src/components/Hero.jsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";
import Button from "../ui/Button.jsx";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  const slides = [
    {
      subtitle: "WELCOME TO",
      title: "IKEM TECH Co",
      description:
        "We turn your concepts into reality through creative services. Our team delivers innovative design and exceptional results in branding, digital experiences, and custom projects.",
      img: "/images/slide2.jpg",
    },
    {
      subtitle: "EXPERTISE IN",
      title: "Mobile & Web Development",
      description:
        "We create captivating visuals and functional applications to enhance your online presence. Our designs feature intuitive interfaces and stunning graphics.",
      img: "/images/slide1.jpg",
    },
    {
      subtitle: "MASTERING",
      title: "3D Design Excellence",
      description:
        "Creating stunning three-dimensional visuals to elevate your projects. We bring depth, realism, and creativity to your ideas.",
      img: "/images/slide3.jpg",
    },
    {
      subtitle: "PROFESSIONAL",
      title: "Video Production",
      description:
        "Producing engaging video content that tells your story effectively. We combine compelling visuals with creative storytelling.",
      img: "/images/slide4.jpg",
    },
  ];

  return (
    <main>

    <section
      id="hero"
      aria-label="hero"
      className="relative bg-[#033d54] overflow-visible mt-[90px] min-h-screen rounded-b-[100px]"
    >
      {/* wrapper without overflow rules */}
      <div className="w-full">
        {/* gradient backgrounds */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#044c69] via-[#033d54] to-[#022b3b] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />

        {/* Textual swiper */}
        <Swiper
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          className="w-full h-[85vh] relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="!flex flex-col">
              <AnimatePresence mode="wait">
                <div className="container mx-auto px-4 pt-10 relative">
                  <div className="max-w-5xl mx-auto text-center mb-8">
                    <motion.p
                      key={`subtitle-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.6 }}
                      className="text-cyan-400 font-medium tracking-wider mb-4"
                    >
                      {slide.subtitle}
                    </motion.p>

                    <motion.h1
                      key={`title-${index}`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8 }}
                      className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight px-4 break-words"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      key={`desc-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.div
                      key={`buttons-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.8 }}
                      className="flex justify-center gap-6"
                    >
                      <Link
                        href={"#contact"}
                        className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-fast" />
                        <span className="relative z-10 text-white font-semibold tracking-wider">
                          Let's Talk
                        </span>
                      </Link>

                      <Link
                        href={"https://t.me/ikimtechco"}
                        className="px-8 py-4 border-2 border-cyan-500/30 text-white rounded-lg hover:bg-cyan-500/10 transition-colors duration-300"
                      >
                        Read More
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </AnimatePresence>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Image Container – now sits above all sections on any screen */}
        <div 
        className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-0  sm:translate-y-1/2 z-30 pb-4 pt-4">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-[min(900px,90vw)]"
          >
            <Swiper
              modules={[EffectFade, Autoplay]}
              effect="fade"
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              loop
              className="w-full aspect-[2/1]"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[400px]">
                    <div className="absolute inset-0 rounded-[30px] overflow-hidden">
                      <div className="absolute inset-0 rounded-[30px] border-4 border-transparent bg-gradient-to-r from-cyan-500 via-blue-400 to-cyan-500 animate-border-flow" />
                      <div className="absolute inset-[3px] rounded-[27px] overflow-hidden">
                        <img
                          src={slide.img}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#022b3b] via-[#022b3b]/50 to-transparent" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>

        {/* Decorative blobs */}
        <div className="absolute -left-20 top-1/3 w-60 h-60 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute -right-20 top-1/4 w-60 h-60 bg-gradient-to-l from-cyan-500/30 via-blue-500/20 to-transparent rounded-full blur-3xl" />

        {/* Global keyframes & shimmer/border-flow styles */}
        <style jsx global>{`
          @keyframes shimmer-fast {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          .shimmer-fast {
            animation: shimmer-fast 1.5s infinite;
          }
          @keyframes border-flow {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-border-flow {
            background-size: 200% 200%;
            animation: border-flow 3s linear infinite;
          }
          .swiper-slide {
            opacity: 0 !important;
            transition: opacity 0.8s ease;
          }
          .swiper-slide-active {
            opacity: 1 !important;
          }
        `}</style>
      </div>
    </section>

    </main>

  );
};

export default Hero;
