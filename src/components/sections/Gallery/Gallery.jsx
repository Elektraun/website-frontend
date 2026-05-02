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
  { id: 2, src: TCS10K2026, title: "TCS 10K 2026", subtitle: "The Vidhana Soudha Sprint" },
  { id: 3, src: TCS10K2026_main, title: "TCS 10K 2026", subtitle: "Main Event Glory" },
  { id: 4, src: tuffman_2026, title: "Tuffman 2026", subtitle: "Building Absolute Grit" },
  { id: 5, src: TCS10K2026_full, title: "TCS 10K Full", subtitle: "The 11KM Standard" },
];

const Gallery = () => {
  const [index, setIndex] = useState(0);

  // 10 Second Interval Logic
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
        <div className="relative h-[500px] md:h-[700px] w-full group">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0"
            >
              {/* Main Slide Image */}
              <img
                src={galleryData[index].src}
                alt={galleryData[index].title}
                className="w-full h-full object-cover rounded-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 shadow-2xl"
              />
              
              {/* Slide Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050609] via-transparent to-transparent opacity-80 rounded-2xl" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-10 left-10 md:bottom-16 md:left-16">
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

              {/* 10s Progress Bar (The Visual Countdown) */}
              <div className="absolute bottom-0 left-0 h-1.5 bg-gray-800 w-full overflow-hidden rounded-b-2xl">
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

          {/* Navigation Controls (Invisible but Functional) */}
          <button 
            onClick={() => setIndex((index - 1 + galleryData.length) % galleryData.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            ←
          </button>
          <button 
            onClick={() => setIndex((index + 1) % galleryData.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;