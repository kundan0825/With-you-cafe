import React from 'react';
import { MapPin, Phone, Heart, Navigation, MessageCircle } from 'lucide-react';

export const LocationFooter = () => {
  return (
    <footer id="location" className="bg-[#080707] text-[#FBF7F4] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        
        {/* Contact & Address Details */}
        <div>
          <span className="text-[#E29578] uppercase text-xs tracking-widest font-semibold">Visit Us</span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-2 mb-6">Come Find Us ❤️</h2>
          
          <div className="space-y-6 text-[#A8A199] text-sm leading-relaxed">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-[#E29578] shrink-0 mt-1" />
              <div>
                <strong className="text-white block font-medium">With You Cafe & Resto</strong>
                Prabhat Chowk, Shop No. 8, Sadguru Plaza, MJ College Road, Vidhya Nagar, Jalgaon, Maharashtra 425001
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#E29578] shrink-0" />
              <a href="tel:07821824705" className="hover:text-white transition-colors">
                078218 24705
              </a>
            </div>

            <div className="flex items-center gap-4">
              {/* Clean inline Instagram icon */}
              <svg className="w-5 h-5 text-[#E29578] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              <a 
                href="https://instagram.com/with_you_cafe_n_resto.jalgaon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                @with_you_cafe_n_resto.jalgaon
              </a>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="tel:07821824705"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" /> Call Now
            </a>
            <a
              href="https://wa.me/917821824705?text=Hello%20With%20You%20Cafe%20%26%20Resto!%20I%20would%20like%20to%20enquire%20about%20a%20celebration%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" /> WhatsApp
            </a>
            <a
              href="https://maps.google.com/?q=Sadguru+Plaza+MJ+College+Road+Jalgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-[#8B263E] text-white text-xs font-semibold flex items-center gap-2 shadow-lg hover:opacity-90 transition-all"
            >
              <Navigation className="w-4 h-4" /> Get Directions
            </a>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="h-[320px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            title="Cafe Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.7915959894513!2d75.55554457503062!3d21.000989480641437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd90fa51d6b09a7%3A0x8c612bd6e41b55e5!2sWith%20you%20Cafe%20and%20Resto!5e0!3m2!1sen!2sin!4v1786742814382!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="max-w-7xl mx-auto px-6 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A8A199] gap-4">
        <p className="flex items-center gap-1">
          Good Food. Great Moments. With You. <Heart className="w-3 h-3 text-[#8B263E] fill-[#8B263E]" />
        </p>
        <p>© {new Date().getFullYear()} WITH YOU CAFE & RESTO. All rights reserved.</p>
      </div>
    </footer>
  );
};