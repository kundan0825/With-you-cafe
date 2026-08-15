import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Sparkles } from 'lucide-react';

const categories = ["All", "Pizza", "Pasta", "Burgers", "Shakes", "Coffee", "Maggie", "Desserts"];

const menuItems = [
  { id: 1, category: "Pizza", title: "Margherita Pizza", desc: "Fresh basil, artisan mozzarella, sun-ripened pomodoro sauce.", price: "129", img: "/images/margherita-pizza.jpg" },
  { id: 2, category: "Pizza", title: "Rustic Veggie Delight", desc: "Charred bell peppers, olives, jalapeños, and spiced herbs.", price: "169", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80" },
  { id: 3, category: "Pizza", title: "Paneer Makhani Pizza", desc: "Topped with a rich and creamy paneer makhani.", price: "169", img: "/images/paneer-makhani-pizza.jpg" },
  { id: 4, category: "Pasta", title: "Creamy Alfredo Penne pasta", desc: "Tossed in velvety garlic parmesan sauce with fresh herbs.", price: "119", img: "/images/pasta.jpg" },
  { id: 5, category: "Burgers", title: "Aloo Tikki Burger", desc: "Crispy patty, house secret dressing, toasted brioche bun.", price: "99", img: "https://images.unsplash.com/photo-1660715683691-d1614d1dd361?q=80&w=1170&auto=format&fit=crop" },
  { id: 6, category: "Burgers", title: "Classic Crunch Burger", desc: "Crispy patty, house secret dressing, toasted brioche bun.", price: "119", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
  { id: 7, category: "Burgers", title: "Paneer Burger", desc: "Paneer crispy, house secret dressing, toasted brioche bun.", price: "149", img: "/images/paneer-burger.jpg" }, 
  { id: 8, category: "Coffee", title: "Cold Coffee", desc: "A refreshing blend of espresso, milk, and ice for a smooth drink.", price: "99", img: "/images/cold-coffee.jpg" },
  { id: 9, category: "Coffee", title: "Hot Coffee", desc: "A rich and aromatic blend of freshly brewed coffee beans.", price: "89", img: "/images/hot-coffee.jpg" },
  { id: 10, category: "Shakes", title: "Sizzling Chocolate Shake", desc: "Fusion of chocolate ice cream, caramel drizzle, and chocolate chips.", price: "99", img: "/images/chocolate-shake.jpg" },
  { id: 11, category: "Shakes", title: "Pineapple Shake", desc: "Topped with fresh pineapple, juice, and pineapple syrup.", price: "99", img: "https://plus.unsplash.com/premium_photo-1720446089066-661e8fb6b7b3?q=80&w=688&auto=format&fit=crop" },
  { id: 12, category: "Shakes", title: "Strawberry Shake", desc: "Strawberry ice cream, strawberry puree, and syrup.", price: "99", img: "https://plus.unsplash.com/premium_photo-1726765809820-80c09e800f3b?q=80&w=687&auto=format&fit=crop" },
  { id: 13, category: "Shakes", title: "Blueberry Shake", desc: "Blueberry ice cream, blueberry puree, and blueberry syrup.", price: "99", img: "https://plus.unsplash.com/premium_photo-1694114804831-33622a2eacc1?q=80&w=672&auto=format&fit=crop" },
  { id: 14, category: "Maggie", title: "Cheese & Mint Maggie", desc: "Delicious hot maggie topped with cheese and garden mint.", price: "119", img: "https://images.unsplash.com/photo-1602833280958-1657662ccc58?q=80&w=764&auto=format&fit=crop" },
  { id: 15, category: "Maggie", title: "Normal Maggie", desc: "Simple plain authentic comfort maggie noodles.", price: "119", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTks1TuMNBnifZsynX-HlZHadM89MRgsDPk-nPiAZEehkiTIHMSfCcs_fk&s=10" },
  { id: 16, category: "Desserts", title: "Sizzling Brownie", desc: "Warm rich walnut brownie with vanilla ice cream & hot fudge.", price: "99", img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=600&q=80" },
];

export const FoodMenu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <section id="menu" className="py-24 bg-[#08070A] text-[#FBF7F4] relative">
      {/* Background Accent Glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF2A85]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[#00D2FF] uppercase text-xs tracking-widest font-bold flex items-center justify-center gap-1.5 mb-2">
            <Utensils className="w-3.5 h-3.5" /> Delicious Comfort Plates
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">
            Curated Menu For You <span className="text-[#FF2A85]">❤️</span>
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Handcrafted beverages, cheesy bites, and sweet desserts made fresh to order.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF2A85] to-[#00D2FF] text-white shadow-[0_0_20px_rgba(255,42,133,0.5)] scale-105'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="group rounded-2xl bg-[#121014] border border-white/10 hover:border-[#FF2A85]/50 overflow-hidden shadow-xl flex flex-col justify-between transition-colors"
              >
                <div>
                  {/* Item Image */}
                  <div className="relative h-52 overflow-hidden bg-black/40">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-bold text-white shadow-lg">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#00D2FF]">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-white mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Quick WhatsApp Order Button */}
                <div className="p-5 pt-0">
                  <a
                    href={`https://wa.me/917821824705?text=Hello%20With%20You%20Cafe!%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(item.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-gradient-to-r hover:from-[#FF2A85] hover:to-[#00D2FF] text-xs font-semibold text-gray-300 hover:text-white border border-white/10 hover:border-transparent flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#FF2A85]" /> Order / Enquire
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};