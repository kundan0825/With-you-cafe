import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Heart, Lock } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Private Cabins', href: '#privacy' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#location' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08070A]/90 backdrop-blur-xl border-b border-[#FF2A85]/20 py-3 shadow-[0_4px_30px_rgba(255,42,133,0.15)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo with Real Asset */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-[#FF2A85] shadow-[0_0_15px_rgba(255,42,133,0.6)] group-hover:scale-105 transition-transform">
            <img
              src="/images/logo.jpg"
              alt="With You Cafe & Resto"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-white flex items-center gap-1.5">
              WITH YOU <Heart className="w-3.5 h-3.5 text-[#FF2A85] fill-[#FF2A85]" />
            </span>
            <span className="text-[9px] tracking-[0.25em] text-[#00D2FF] uppercase font-semibold block">
              Cafe & Resto • Jalgaon
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-[#00D2FF] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#FF2A85] to-[#00D2FF] text-white text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_20px_rgba(255,42,133,0.5)] hover:scale-105 transition-all"
          >
            Book Table
          </a>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#FF2A85]" /> : <Menu className="w-6 h-6 text-[#00D2FF]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#08070A]/95 backdrop-blur-2xl border-b border-[#FF2A85]/30 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#00D2FF]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-3 rounded-xl bg-gradient-to-r from-[#FF2A85] to-[#00D2FF] text-white font-semibold text-sm shadow-lg shadow-[#FF2A85]/30"
          >
            Book Private Cabin
          </a>
        </div>
      )}
    </motion.header>
  );
};