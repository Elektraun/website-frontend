import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Cinematic AI Generated Image
const AI_MOTIVATION_BG = "https://images.unsplash.com/photo-1596395819057-e37f1e6b3492?q=80&w=2600&auto=format&fit=crop"; // Replace with your generated asset URL

const MotivationRefined = () => {
  const ref = useRef(null);
  
  // Create parallax effect on scroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section 
      ref={ref}
      id="motivation" 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#050609] text-white"
    >
      
      {/* 1. LAYER ONE: Cinematic Background (Parallax) */}
      {/* <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: yBg }}
      >
        <img 
          src={AI_MOTIVATION_BG} 
          alt="Cinematic close-up of an endurance runner's profile in the dark, lit by a raw neon cyan glow, pushing through sweat and fatigue." 
          className="w-full h-full object-cover grayscale-[20%] opacity-60"
        />
        {/* Subtle, cool vignette overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#050609] via-transparent to-[#050609]/70" />
     </motion.div> */} 


      {/* 2. LAYER TWO: Foreground Content Grid */}
      <motion.div
        className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 md:px-12 py-24"
        style={{ y: yContent }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* LEFT COLUMN: The Core Affirmation (Asymmetrical focus) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Short Internal Monologue */}
            <motion.p 
              className="font-serif italic text-3xl md:text-4xl text-gray-400 max-w-2xl leading-snug"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              "The first 10 kilometers are for your body. The next 11 are for your soul. If you only run when you feel good, you don't run at Elektraun."
            </motion.p>
            
            {/* Main Headline (Aggressive & Defined) */}
            <motion.h4 
              className="text-5xl md:text-7xl font-light tracking-tighter leading-[0.9]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="font-serif italic text-cyan-400">11KM</span><br />
              ISN'T A <span className="font-black uppercase tracking-normal">GOAL</span>.<br />
              IT’S THE <span className="text-red-600 font-extrabold uppercase">MINIMUM</span>.
            </motion.h4>
          </div>

          {/* RIGHT COLUMN: Action and Refinement (A 'floating' card) */}
          <motion.div 
            className="lg:col-span-4 bg-[#111625]/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-gray-800 shadow-2xl space-y-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-px bg-cyan-400" />
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">The Grind</p>
            </div>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              Every stride builds an unbreakable resilience. Every kilometer unlocks a new potential you didn't think existed. We aren't here for casual jogs; we are here for the <strong>process</strong>. If you are ready to define your discipline, you are ready for Elektraun.
            </p>

            {/* Redesigned CTA Button */}
            <motion.a
              href="#join"
              className="inline-flex items-center justify-center w-full gap-3 bg-red-600 hover:bg-cyan-400 text-white font-bold uppercase px-8 py-5 rounded-lg tracking-wider text-lg transition-all duration-300 shadow-[0_8px_30px_rgba(220,38,38,0.3)]"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Accept the Process
              <span className="text-2xl">→</span>
            </motion.a>
          </motion.div>
        </div>
     </motion.div>
    </section>
  );
};

export default MotivationRefined;