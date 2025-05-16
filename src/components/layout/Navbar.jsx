// src/components/Navbar.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Button from "../ui/Button.jsx";

const navItems = [
  { name: "Home", href: "/", type: "page" },
  { name: "About", section: "why-choose-us", type: "section" },
  { name: "Services", href: "/services", type: "page" },
  { name: "Projects", section: "projects", type: "section" },
  { name: "Team", section: "team", type: "section" },
  { name: "Contact", section: "contact", type: "section" }, // moved Contact into navItems
];

const NavLink = ({ item, activeSection, scrollPos, onClick }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const linkHref = item.type === "page" ? item.href : `/#${item.section}`;

  // Active only one at a time:
  const isActive =
    item.name === "Home"
      ? isHome && scrollPos < 50
      : item.type === "section"
      ? isHome && activeSection === item.name
      : pathname === item.href;

  return (
    <Link
      href={linkHref}
      onClick={(e) => {
        if (item.type === "section" && isHome) {
          e.preventDefault();
          document
            .getElementById(item.section)
            ?.scrollIntoView({ behavior: "smooth" });
        } else if (item.name === "Home" && isHome) {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        onClick?.();
      }}
      className={`relative px-3 py-2 text-white/90 hover:text-white transition-colors duration-300 font-medium tracking-wide ${
        isActive ? "text-cyan-300 font-bold" : ""
      }`}
    >
      <span className="relative z-10">{item.name}</span>
      <motion.div
        className="absolute inset-0 bg-white/5 rounded-lg -z-0"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.span
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ width: isActive ? "100%" : 0 }}
        animate={{ width: isActive ? "100%" : 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3 }}
      />
    </Link>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Track scrolling
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollPos(y);
      setScrolled(y > 20);

      // Section detection only on home
      if (pathname === "/") {
        let found = "";
        // iterate in order: last matching section wins
        navItems
          .filter((i) => i.type === "section")
          .forEach(({ name, section }) => {
            const el = document.getElementById(section);
            if (el && el.offsetTop - 100 <= y) {
              found = name;
            }
          });
        setActiveSection(found);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // On route change, if not home, highlight page or clear
  useEffect(() => {
    if (pathname !== "/") {
      const page = navItems.find((i) => i.type === "page" && i.href === pathname);
      setActiveSection(page?.name || "");
    }
  }, [pathname]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 text-[var(--primary-text)] transition-all duration-300 ease-in-out h-[90px] ${
        scrolled
          ? "py-2 bg-[#033d54]/95 backdrop-blur-lg shadow-lg"
          : "py-4 bg-[#033d54] backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto flex items-center px-4">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
          <Link href="/" className="flex items-center relative">
            <div className="relative w-[70px] h-[70px] overflow-hidden rounded-xl">
              <Image
                width={80}
                height={80}
                src="/images/logo.jpg"
                alt="Ikimlogo"
                className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 ring-2 ring-cyan-500/30 rounded-xl" />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
            </div>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8 justify-between ml-[260px] w-full bg-[#022b3b] p-2 rounded-2xl">
          <ul className="flex items-center space-x-6">
            {navItems.filter(i => i.name !== "Contact").map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.05 }} className="relative group">
                <NavLink
                  item={item}
                  activeSection={activeSection}
                  scrollPos={scrollPos}
                />
              </motion.li>
            ))}
          </ul>

          {/* Contact now scrolls to #contact */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Link href="/#contact">
              <div className="relative px-6 py-2.5 overflow-hidden rounded-lg group">
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

        {/* Mobile Toggle */}
        <Button variant="secondary" className="lg:hidden ml-auto cursor-pointer" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-0 w-full bg-[#033d54] lg:hidden">
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink
                    item={item}
                    activeSection={activeSection}
                    scrollPos={scrollPos}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      {/* Global Keyframes */}
      <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
