import { useState } from "react";
import { motion } from "framer-motion";
import TCS10K2026_main from "../../assets/images/TCS10K_2026_main.jpg";
import WhatsAppModal from "../../modals/WhatsAppModal";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

const ElektraunHeroRefined = () => {
  const [showQR, setShowQR] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-[#050609] text-white overflow-hidden font-sans">
        
        {/* 1. Background Layer: Premium Video Overlay */}
        <div className="absolute inset-0 z-0">
          <video
            src="https://assets.mixkit.co/videos/preview/mixkit-group-of-runners-on-a-mountain-road-23945-large.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#050609]/95 via-[#0a1120]/80 to-transparent" />
        </div>

        {/* 2. Content Layer: Editorial Grid Layout */}
        <motion.div
          className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24 md:py-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          
          {/* --- LEFT COLUMN: Typography & Intent --- */}
          <div className="md:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="w-16 h-px bg-cyan-400" />
              <span className="text-sm md:text-base font-medium uppercase tracking-[0.2em] text-gray-400">
                EST. ELEKTRAUN / 11KM+ CLUB
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95]"
            >
              <span className="font-serif italic text-white/90">Break</span> Limits.<br />
              Forge <span className="font-black uppercase text-red-500">Endurance</span>.
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="max-w-xl text-lg md:text-xl lg:text-2xl text-gray-300 font-normal leading-relaxed"
            >
              Where mastery begins at 11 kilometers. We exist for the disciplined and the consistent. Focus is our currency.
            </motion.p>

            {/* UPDATED CTA: Triggers the Modal */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.button
                onClick={() => setShowQR(true)}
                className="inline-flex items-center gap-3 bg-cyan-400 text-[#050609] hover:bg-white font-bold uppercase px-12 py-5 rounded-md tracking-wider text-lg transition-all duration-300 shadow-[0_10px_30px_rgba(34,211,238,0.2)]"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Elektraun
                <span className="text-2xl">→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: Validation Image Card --- */}
          <motion.div 
            className="md:col-span-5 relative"
            variants={itemVariants}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="relative group overflow-hidden rounded-xl bg-[#111625] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-800">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg">
                <img 
                  src={TCS10K2026_main} 
                  alt="Elektraun members celebrating with medals" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                <p className="text-cyan-400 text-xs font-mono uppercase tracking-widest">VALIDATED DISTANCE</p>
                <p className="text-2xl md:text-3xl font-black text-white mt-1">THE 11KM MARK.</p>
                <p className="text-gray-400 text-sm mt-1">Our community finishes what others don't start.</p>
              </div>

              <div className="absolute -inset-px rounded-xl border-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none blur-[2px]" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl z-[-1]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Shared WhatsApp Modal Overlay */}
      <WhatsAppModal 
        isOpen={showQR} 
        onClose={() => setShowQR(false)} 
      />
    </>
  );
};

export default ElektraunHeroRefined;