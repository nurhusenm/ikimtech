"use client"
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaInstagram, FaWhatsapp, FaTelegram, FaArrowUp } from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="bg-[#033D45] text-[var(--primary-text)] py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> Jemo, Addis Ababa, Ethiopia
            </p>
            <p className="flex items-center mb-2">
              <FaPhone className="mr-2" /> +251951207168
            </p>
            <p className="flex items-center">
              <FaEnvelope className="mr-2" /> ikimtechco@gmail.com
            </p>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul>
              <li><a href="#services" className="hover:underline">Web Development</a></li>
              <li><a href="#services" className="hover:underline">Mobile App Development</a></li>
              <li><a href="#services" className="hover:underline">Video Editing</a></li>
              <li><a href="#services" className="hover:underline">Logo Design</a></li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#why-choose-us" className="hover:underline">Why Choose Us</a></li>
              <li><a href="#solutions" className="hover:underline">Solutions</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#team" className="hover:underline">Team</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/ikimtechco/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@ikimtech.co" target="_blank" rel="noopener noreferrer">
                <SiTiktok size={24} />
              </a>
              <a href="https://wa.me/+251951207168" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={24} />
              </a>
              <a href="https://t.me/ikimtechco" target="_blank" rel="noopener noreferrer">
                <FaTelegram size={24} />
              </a>
            </div>
          </div>
        </div>
        {/* Copyright and Back to Top */}
        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="mb-4 md:mb-0">&copy; IKIM Tech Co. All Right Reserved.</p>
          <a href="#hero" className="text-[var(--primary-text)] hover:text-[var(--secondary-text)]">
            <FaArrowUp size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;