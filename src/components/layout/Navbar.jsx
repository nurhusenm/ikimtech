// src/components/Navbar.jsx
"use client";

import Link from "next/link";
import Button from "../ui/Button.jsx";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const slides = ["Home", "About", "Services", "Projects", "Team"];

  return (
    <nav className="sticky top-0 z-10 bg-[#033d54] p-4 border-b border-white/10 backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo + Text */}
        <Link href="/" className="flex items-center space-x-2 transition-transform hover:scale-105">
          <Image
            width={100}
            height={100}
            src="/images/logo.jpg"
            alt="Ikim Tech"
            className="rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          />
          {/* <p className="text-white">ikim Tech</p> */}
          <span className="text-xl font-bold text-white">Ikim Tech</span>
        </Link>

        {/* Desktop Links + Contact */}
        <ul className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex items-center space-x-6">
            {slides.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-white/90 hover:text-white transition-colors duration-300"
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
          </div>

          {/* Contact Button with Shimmer */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative group">
            <Link href="/contact">
              <div className="relative px-6 py-2 overflow-hidden rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300">
                <span className="relative z-10 text-white font-medium">Contact</span>
                {/* shimmer overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 bg-[length:200%_100%] animate-shimmer" />
                </div>
              </div>
            </Link>
          </motion.div>
        </ul>

        {/* Mobile Menu Button */}
        <Button variant="secondary" className="md:hidden">
          Menu
        </Button>
      </div>
    </nav>
  );

  export default Navbar;
