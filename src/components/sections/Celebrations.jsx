import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Sparkles, Heart, Wine } from 'lucide-react';

const experiences = [
  {
    title: "Birthday Neon Arch",
    emoji: "🎂",
    desc: "Complete floral ring setup with gold and black metallic balloons, Happy Birthday neon, and celebration table.",
    img: "/images/bday-arch.jpg"
  },
  {
    title: "Anniversary Celebrations",
    emoji: "✨",
    desc: "Large numbered golden balloons, butterfly decor, and themed stage arrangements for special ages.",
    img: "/images/bday-number.jpg"
  },
  {
    title: "Private Couple Date",
    emoji: "❤️",
    desc: "Intimate private booths with floral ceilings, gentle purple mood lights, and customized beverage platters.",
    img: "/images/cabin-single.jpg"
  },
  {
    title: "Signature Drinks & Food",
    emoji: "🥤",
    desc: "Handcrafted fruit thick shakes, gourmet cold coffee, and savory café bites served right to your booth.",
    img: "/images/drinks.jpg"
  }
];

export const Celebrations = () => {
  return (
    <section id="celebrations" className="py-24 bg-[#08070A] text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#00D2FF] tracking-widest text-xs uppercase font-bold mb-2">Moments Crafted With Love</p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">
            Celebrate It. We'll Make It Beautiful. <span className="text-[#FF2A85]">❤️</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3">From surprise birthdays to anniversary dates, we set up the stage for you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group relative h-[420px] rounded-2xl overflow-hidden border border-[#FF2A85]/20 hover:border-[#00D2FF]/60 transition-all duration-300 shadow-2xl"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08070A] via-[#08070A]/50 to-transparent" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="font-serif text-xl font-bold mb-1 flex items-center gap-2 text-white">
                  {item.title} <span>{item.emoji}</span>
                </h3>
                <p className="text-gray-300 text-xs line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {item.desc}
                </p>
                <a
                  href="#booking"
                  className="mt-3 text-xs font-bold text-[#00D2FF] uppercase tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Book This Setup &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};