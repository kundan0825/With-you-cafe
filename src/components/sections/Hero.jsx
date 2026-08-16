import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart, ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
<section className="relative min-h-screen w-full overflow-hidden bg-[#08070A] text-white flex items-center justify-center pt-24 pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cabin-aisle.jpg"
          alt="With You Cafe Ambience"
          className="w-full h-full object-cover scale-105 filter brightness-75 contrast-110"
        />
        {/* Pink & Cyan Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08070A] via-[#08070A]/80 to-[#08070A]/40" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF2A85]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-8">
        {/* Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-6"
        >
          <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#FF2A85]/40 text-xs font-semibold text-pink-300 shadow-[0_0_15px_rgba(255,42,133,0.3)]">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" /> 5.0 Google Rating
          </span>
          <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#00D2FF]/40 text-xs font-semibold text-cyan-300 shadow-[0_0_15px_rgba(0,210,255,0.3)]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" /> 100% Private Couple Cabins
          </span>
          <span className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-white">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" /> Romantic Neon Vibes
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6"
        >
          Where Every Moment Feels <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF2A85] via-pink-400 to-[#00D2FF] drop-shadow-[0_0_35px_rgba(255,42,133,0.6)]">
            Special & Private ❤️
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 font-light mb-10 leading-relaxed"
        >
          Private couple seating, floral ceilings, delicious food, and unforgettable birthday & anniversary setups — only at With You Cafe & Resto, Jalgaon.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#FF2A85] to-[#E0218A] text-white font-semibold shadow-[0_0_30px_rgba(255,42,133,0.5)] hover:scale-105 transition-all duration-300"
          >
            Book Private Cabin
          </a>
          <a
            href="#privacy"
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-[#00D2FF]/50 text-[#00D2FF] font-semibold backdrop-blur-md transition-all duration-300"
          >
            Explore Privacy & Cabins
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cyan-300/80 text-xs tracking-widest uppercase animate-bounce">
        <span>Scroll to explore</span>
        <ChevronDown className="w-4 h-4 text-[#00D2FF]" />
      </div>
    </section>
  );
};