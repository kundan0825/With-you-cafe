import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Customer Review",
    rating: 5,
    text: "The perfect celebration spot in Jalgaon! The decor, ambient lighting, and staff hospitality made our birthday surprise so special. Highly recommended!",
    date: "Google Verified"
  },
  {
    name: "Customer Review",
    rating: 5,
    text: "Loved the food and romantic corner seating. Peaceful atmosphere for a date night, and the coffee was fresh and rich.",
    date: "Google Verified"
  },
  {
    name: "Customer Review",
    rating: 5,
    text: "Cozy vibes, aesthetic interior, and top-tier presentation. The best place on MJ College Road to hang out with close friends and family.",
    date: "Google Verified"
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#161413] text-[#FBF7F4] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Rating Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-sm font-semibold mb-3">
            <Star className="w-4 h-4 fill-amber-300" /> 5.0 ⭐ Rating on Google
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">Loved by Our Guests ⭐</h2>
          <p className="text-[#A8A199] text-sm mt-3">Read what people in Jalgaon are saying about their experiences.</p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0B0A0A] border border-white/10 relative shadow-xl hover:border-[#E29578]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-[#8B263E]/40 mb-4" />
                <div className="flex gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-[#A8A199] leading-relaxed italic">"{rev.text}"</p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="font-medium text-white">{rev.name}</span>
                <span className="text-[#E29578]">{rev.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};