import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareHeart, Smile } from 'lucide-react';

export const About = () => {
  const stats = [
    { label: "Google Rating", value: "5.0 ⭐", icon: Star },
    { label: "Google Reviews", value: "6+", icon: MessageSquareHeart },
    { label: "Good Moments", value: "100%", icon: Smile }
  ];

  return (
    <section id="about" className="py-24 bg-[#0B0A0A] text-[#FBF7F4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Animated Overlapping Photo Composition */}
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-4/5 h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10"
          >
            <img 
              src="images/cafe-interior.jpg" 
              alt="With You Cafe Interior" 
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute -bottom-10 right-2 w-3/5 h-[300px] rounded-3xl overflow-hidden shadow-2xl border-2 border-[#161413] z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80" 
              alt="Artisanal Coffee and Food" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Right: Narrative Content & Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#E29578] uppercase text-xs tracking-widest font-semibold">
            Our Story & Essence
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-4 leading-tight">
            More Than Just a Café.
          </h2>
          <h3 className="font-serif text-xl sm:text-2xl text-[#E29578] italic mb-6">
            "It's where memories are made."
          </h3>
          <p className="text-[#A8A199] leading-relaxed text-base font-light mb-8">
            With You Cafe and Resto is a cozy food and beverage destination in Jalgaon, created for delicious food, meaningful conversations, and memorable moments. From casual coffee dates to birthdays, anniversaries, and special celebrations, our goal is to make every visit comfortable, beautiful, and unforgettable.
          </p>

          {/* Floating Metric Badges */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-[#161413] border border-white/10 p-4 rounded-2xl text-center shadow-lg hover:border-[#E29578]/40 transition-colors"
              >
                <stat.icon className="w-5 h-5 text-[#E29578] mx-auto mb-1.5" />
                <div className="font-serif text-lg sm:text-xl font-bold text-[#FBF7F4]">{stat.value}</div>
                <div className="text-[11px] text-[#A8A199] uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};