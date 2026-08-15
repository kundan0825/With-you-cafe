import React from 'react';

export const Marquee = () => {
  const items = [
    "FRESH FOOD ✦",
    "GREAT COFFEE ✦",
    "COZY VIBES ✦",
    "BEAUTIFUL MOMENTS ✦",
    "WITH YOU ❤️ ✦",
    "CELEBRATIONS ✦",
    "ROMANTIC SEATING ✦"
  ];

  return (
    <div className="py-6 bg-[#161413] border-y border-white/5 overflow-hidden whitespace-nowrap flex select-none">
      <div className="flex shrink-0 animate-[marquee_25s_linear_infinite] gap-8 items-center text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#E29578] uppercase">
        {items.concat(items).map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
    </div>
  );
};