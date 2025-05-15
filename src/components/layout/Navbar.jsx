"use client";

import Link from "next/link";
import Button from "../ui/Button.jsx";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`
        text-[var(--primary-text)] fixed w-full top-0 z-50 
        transition-all duration-300 ease-in-out
        ${scrolled 
          ? 'py-2 bg-[#033d54]/95 backdrop-blur-lg shadow-lg' 
          : 'py-4 bg-[#033d54] backdrop-blur-sm'
        }
        h-[90px]
      `}
    >
      <div className="container mx-auto flex items-center px-4">
        {/* Enhanced Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/" className="flex items-center relative">
            <div className="relative w-[70px] h-[70px] overflow-hidden rounded-xl">
              <Image
                width={80}
                height={80}
                src="/images/logo.jpg"
                alt="Ikimlogo"
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                priority
                style={{ objectFit: 'cover' }}
              />
              {/* Logo glow effect */}
              <div className="absolute inset-0 ring-2 ring-cyan-500/30 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 justify-between ml-[260px] w-full bg-[#022b3b] p-2 rounded-2xl">
          <ul className="flex items-center space-x-6">
            {["Home", "About", "Services", "Projects", "Team"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative px-3 py-2 text-white/90 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                >
                  <span className="relative z-10">{item}</span>
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg -z-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Contact Button with Shimmer */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <Link href="/contact">
              <div className="relative px-6 py-2.5 overflow-hidden rounded-lg group">
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#033d54] via-[#0a4f6b] to-[#033d54] border-2 border-cyan-500/30" />
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent shimmer" />
                </div>
                <span className="relative z-10 text-white font-semibold tracking-wider">
                  Contact
                </span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="secondary" className="lg:hidden ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
      </div>

      {/* Enhanced animation styles */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer {
          animation: shimmer 2s infinite;
        }

        @keyframes glow {
          0% { box-shadow: 0 0 5px cyan; }
          50% { box-shadow: 0 0 20px cyan; }
          100% { box-shadow: 0 0 5px cyan; }
        }

        .logo-glow {
          animation: glow 3s infinite;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
