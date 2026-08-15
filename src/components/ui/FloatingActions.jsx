import React from 'react';
import { MessageCircle, Phone, CalendarHeart } from 'lucide-react';

export const FloatingActions = () => {
  const phone = "917821824705";
  const waMessage = encodeURIComponent("Hello With You Cafe & Resto! I would like to enquire about a celebration booking.");
  const waUrl = `https://wa.me/${phone}?text=${waMessage}`;

  return (
    <>
      {/* Desktop WhatsApp Floating Pulse Button */}
      <aside aria-label="Quick contact" className="hidden md:block fixed bottom-8 right-8 z-40 group">
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-cafe-burgundy to-cafe-accent text-cafe-cream px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-md border border-white/20"
        >
          <MessageCircle className="w-5 h-5 animate-pulse" />
          <span className="text-sm font-medium tracking-wide">Book on WhatsApp</span>
        </a>
      </aside>

      {/* Mobile Glass Bottom Action Dock */}
      <nav aria-label="Mobile quick actions" className="md:hidden fixed bottom-4 inset-x-4 z-50 bg-cafe-surface/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex items-center justify-around">
        <a
          href="tel:07821824705"
          className="flex flex-col items-center gap-1 text-cafe-muted hover:text-cafe-cream transition-colors text-xs font-medium py-1 px-3"
        >
          <Phone className="w-4 h-4 text-cafe-accent" />
          Call
        </a>
        <div className="w-[1px] h-6 bg-white/10" />
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-cafe-muted hover:text-cafe-cream transition-colors text-xs font-medium py-1 px-3"
        >
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          WhatsApp
        </a>
        <div className="w-[1px] h-6 bg-white/10" />
        <a
          href="#booking"
          className="flex items-center gap-1.5 bg-cafe-burgundy text-cafe-cream text-xs font-medium px-4 py-2 rounded-xl shadow-lg"
        >
          <CalendarHeart className="w-3.5 h-3.5" />
          Book Table
        </a>
      </nav>
    </>
  );
};