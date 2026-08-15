import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';

const galleryPhotos = [
  { id: 1, tag: "Celebration", title: "Birthday Table Setup", img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80" },
  { id: 2, tag: "Coffee", title: "Signature Caramel Latte", img: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=800&q=80" },
  { id: 3, tag: "Ambiance", title: "Cozy Night Lights", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
  { id: 4, tag: "Food", title: "Stone Oven Thin Crust", img: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=80" },
  { id: 5, tag: "Date Night", title: "Candlelight Corner", img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80" },
  { id: 6, tag: "Dessert", title: "Sizzling Chocolate Treat", img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?auto=format&fit=crop&w=800&q=80" },
];

export const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section id="gallery" className="py-24 bg-[#0B0A0A] text-[#FBF7F4] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#E29578] uppercase text-xs tracking-widest font-semibold mb-2 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Captured Memories
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold">Moments at With You 📸</h2>
          <p className="text-[#A8A199] text-sm mt-3">Click on any photo to view in high definition.</p>
        </div>

        {/* Responsive Asymmetric Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10 shadow-xl"
            >
              <img
                src={photo.img}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#E29578]">{photo.tag}</span>
                <h4 className="font-serif text-xl font-semibold text-white mt-1">{photo.title}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 bg-black/60 text-white rounded-full hover:bg-[#8B263E] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedPhoto.img}
              alt={selectedPhoto.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <div className="p-4 bg-[#161413] text-center">
              <h3 className="font-serif text-xl font-bold">{selectedPhoto.title}</h3>
              <p className="text-xs text-[#A8A199] mt-1">{selectedPhoto.tag} Moment at With You Cafe & Resto</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};