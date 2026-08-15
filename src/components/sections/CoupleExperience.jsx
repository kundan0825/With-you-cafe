import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Coffee, UtensilsCrossed, Camera } from 'lucide-react';

export const CoupleExperience = () => {
  const highlights = [
    { icon: Heart, text: "Romantic ambient lighting & private corners" },
    { icon: Sparkles, text: "Cozy table setups with fairy light backdrops" },
    { icon: UtensilsCrossed, text: "Delicious comfort food & artisanal snacks" },
    { icon: Coffee, text: "Fresh handcrafted coffees & mocktails" },
    { icon: Camera, text: "Instagram-worthy moments & memory corners" }
  ];

  return (
    <section className="py-24 bg-[#0E0C0C] text-[#FBF7F4] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#8B263E]/15 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Romantic Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#E29578] uppercase text-xs tracking-widest font-semibold flex items-center gap-2">
            <Heart className="w-3.5 h-3.5 fill-[#E29578]" /> Intimate & Peaceful
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4">
            Just You. Just Us. <span className="text-[#8B263E]">❤️</span>
          </h2>
          <p className="text-lg text-[#E29578] italic font-serif mb-6">
            "Sometimes all you need is good food, a cozy table, and the right person."
          </p>

          <div className="space-y-4 mb-8">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-4 h-4 text-[#E29578]" />
                </div>
                <span className="text-sm text-[#A8A199]">{item.text}</span>
              </div>
            ))}
          </div>

          <a
            href="#booking"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#8B263E] to-[#E29578] text-white font-medium hover:scale-105 transition-transform shadow-xl shadow-[#8B263E]/20"
          >
            Plan Your Date &rarr;
          </a>
        </motion.div>

        {/* Right: Realistic Candlelit Imagery */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative h-[480px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
              alt="Romantic Couple Seating"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
              <p className="text-xs uppercase tracking-widest text-[#E29578] font-semibold">Special Table Setup</p>
              <p className="text-sm text-white font-serif italic mt-0.5">Candlelight ambiance tailored for anniversaries & date nights.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};