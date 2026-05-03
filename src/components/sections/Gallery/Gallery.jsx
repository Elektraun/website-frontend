import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BMM2025 from "../../../assets/images/BMM_2025.jpg";

import TCS10K2026 from "../../../assets/images/TCS10K_2026_vidhan.jpg";

import TCS10K2026_main from "../../../assets/images/TCS10K_2026_main.jpg";

import tuffman_2026 from "../../../assets/images/tuffman_2026.jpg";

import TCS10K2026_full from "../../../assets/images/tcs_2026_full.jpg";

// Update these imports to match your local file structure
const galleryData = [
  { id: 1, src: BMM2025, title: "BMM 2025", subtitle: "Midnight Endurance" },
  { id: 2, src: TCS10K2026, title: "TCS World 10K 2026", subtitle: "The Vidhana Soudha Spirit" },
  { id: 3, src: TCS10K2026_main, title: "TCS World 10K 2026", subtitle: "Main Event Glory" },
  { id: 4, src: tuffman_2026, title: "Tuffman 2026", subtitle: "Nice Road Elevation" },
  { id: 5, src: TCS10K2026_full, title: "TCS World 10K 2026", subtitle: "Full Squad Vibes" },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryData.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="relative py-24 bg-[#050609] overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold tracking-[0.3em] text-red-600 uppercase mb-2">The Archive</h3>
            <h2 className="text-4xl md:text-6xl font-light leading-tight">
              The <span className="font-serif italic text-white/80">Grind</span>. <br />
              The <span className="font-black uppercase tracking-tighter">Glory</span>.
            </h2>
          </motion.div>
          
          <div className="flex gap-4">
             {galleryData.map((_, i) => (
                <button 
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-1 transition-all duration-500 ${i === index ? 'w-12 bg-cyan-400' : 'w-4 bg-gray-700'}`}
                />
             ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative h-[500px] md:h-[700px] w-full group rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              {/* 1. AMBIENT BACKGROUND: Prevents cropping issues */}
              <div className="absolute inset-0 z-0">
                <img
                  src={galleryData[index].src}
                  alt=""
                  className="w-full h-full object-cover blur-2xl opacity-40 scale-110"
                />
                <div className="absolute inset-0 bg-[#050609]/40" />
              </div>

              {/* 2. THE MAIN IMAGE: Uses 'contain' to ensure no cropping */}
              <div className="relative z-10 w-full h-full flex items-center justify-center p-4 md:p-8">
                <motion.img
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src={galleryData[index].src}
                  alt={galleryData[index].title}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                />
              </div>
              
              {/* Slide Overlays (Vignette) */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050609] via-transparent to-[#050609]/30 opacity-80" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16 z-30">
                <motion.p 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-cyan-400 font-mono text-sm tracking-[0.2em] mb-2"
                >
                  {galleryData[index].subtitle}
                </motion.p>
                <motion.h4 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-4xl md:text-6xl font-black uppercase tracking-tighter"
                >
                  {galleryData[index].title}
                </motion.h4>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gray-800 w-full overflow-hidden z-40">
                <motion.div 
                  key={`progress-${index}`}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="h-full bg-cyan-400"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <button 
            onClick={() => setIndex((index - 1 + galleryData.length) % galleryData.length)}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-50 hover:bg-cyan-400 hover:text-black"
          >
            ←
          </button>
          <button 
            onClick={() => setIndex((index + 1) % galleryData.length)}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-50 hover:bg-cyan-400 hover:text-black"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;



