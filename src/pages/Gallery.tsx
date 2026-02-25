import { motion } from 'motion/react';
import { useState } from 'react';
import { Maximize2, X } from 'lucide-react';

const images = [
  { url: 'https://picsum.photos/seed/nia1/800/600', title: 'Diwali 2024', category: 'Events' },
  { url: 'https://picsum.photos/seed/nia2/800/600', title: 'Holi Festival', category: 'Events' },
  { url: 'https://picsum.photos/seed/nia3/800/600', title: 'Community Meetup', category: 'Community' },
  { url: 'https://picsum.photos/seed/nia4/800/600', title: 'Classical Dance', category: 'Culture' },
  { url: 'https://picsum.photos/seed/nia5/800/600', title: 'Business Networking', category: 'Professional' },
  { url: 'https://picsum.photos/seed/nia6/800/600', title: 'Youth Workshop', category: 'Community' },
  { url: 'https://picsum.photos/seed/nia7/800/600', title: 'Food Festival', category: 'Culture' },
  { url: 'https://picsum.photos/seed/nia8/800/600', title: 'Annual Gala', category: 'Events' },
  { url: 'https://picsum.photos/seed/nia9/800/600', title: 'Yoga Session', category: 'Culture' },
];

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(images.map(img => img.category))];
  const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);

  return (
    <div className="py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-nia-blue mb-6">Gallery</h1>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            Capturing the moments that define our community.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === cat 
                    ? 'bg-nia-blue text-white shadow-md' 
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, i) => (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={i}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all"
              onClick={() => setSelectedImg(img.url)}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-nia-orange text-xs font-bold uppercase tracking-widest mb-1">{img.category}</span>
                <h3 className="text-white font-bold text-lg">{img.title}</h3>
                <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white">
                  <Maximize2 size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-nia-orange transition-colors">
            <X size={32} />
          </button>
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            src={selectedImg}
            alt="Full size"
            className="max-w-full max-h-full rounded-xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
