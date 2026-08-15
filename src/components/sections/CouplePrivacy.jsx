import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Heart, EyeOff, Sparkles, Music, ShieldCheck } from 'lucide-react';

export const CouplePrivacy = () => {
  const features = [
    {
      icon: EyeOff,
      title: "100% Personal Space",
      desc: "High wooden partition booths designed specifically so you and your partner can talk and relax undisturbed."
    },
    {
      icon: Heart,
      title: "Romantic Neon & Floral Ambience",
      desc: "Hanging wisteria flower ceilings with customized violet, pink, and blue mood lighting."
    },
    {
      icon: Lock,
      title: "Safe & Respectful Setting",
      desc: "A warm, respectful, and peaceful café environment in Jalgaon to celebrate dates, talks, and anniversaries."
    },
    {
      icon: Sparkles,
      title: "Surprise Table Decorations",
      desc: "Add customized birthday rings, candlelights, balloons, or personalized cakes right inside your private cabin."
    }
  ];

  return (
    <section id="privacy" className="py-24 bg-[#0B090E] text-white relative overflow-hidden">
      {/* Background Neon Spotlights */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-[#FF2A85]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00D2FF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          
          {/* Left: Real Booth Photo Composition */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-[#FF2A85]/30 shadow-[0_0_30px_rgba(255,42,133,0.2)]">
              <img
                src="/images/cabin-single.jpg"
                alt="Private Couple Cabin Interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 inset-x-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/15">
                <div className="flex items-center gap-2 text-pink-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" /> Intimate & Peaceful
                </div>
                <p className="text-sm font-serif italic text-white mt-1">
                  Private cabin booths with cushioned seating and purple neon glow.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative & Privacy Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#00D2FF] uppercase text-xs tracking-widest font-bold flex items-center gap-1.5 mb-2">
              <Lock className="w-3.5 h-3.5" /> Your Precious Time, Undisturbed
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Enjoy Complete Privacy <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2A85] to-[#00D2FF]">
                Made Just for Couples ❤️
              </span>
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mt-4 mb-8 leading-relaxed">
              We understand that special moments deserve your own secluded corner. That's why With You Cafe offers private cabins where you can spend quality time, laugh, and celebrate together with zero interruptions.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#FF2A85]/40 transition-colors"
                >
                  <item.icon className="w-5 h-5 text-[#00D2FF] mb-2" />
                  <h4 className="font-semibold text-sm text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#FF2A85] to-[#00D2FF] text-white text-sm font-semibold hover:shadow-[0_0_25px_rgba(0,210,255,0.4)] transition-all"
            >
              Reserve Private Cabin &rarr;
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};