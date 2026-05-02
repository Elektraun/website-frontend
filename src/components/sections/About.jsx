import { motion } from "framer-motion";
import TCS10K2026_vidhan from "../../assets/images/TCS10K_2026_vidhan.jpg";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-[#050609] text-white overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cyan-900/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* --- Section Header --- */}
        <motion.div 
          className="max-w-3xl mb-20"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4">
            The Philosophy
          </h3>
          <h2 className="text-4xl md:text-6xl font-light leading-tight">
            Beyond the <span className="font-serif italic text-white/80">Horizon</span>: <br />
            <span className="font-black uppercase tracking-tighter">The Elektraun Ethos</span>
          </h2>
          <div className="w-24 h-1.5 bg-red-600 mt-6" />
        </motion.div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left: Marketing Narrative */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed">
              <p>
                At Elektraun, we believe that true transformation begins where comfort ends. Our standard starts at <strong>11KM</strong>—not as a finish line, but as a baseline. 
              </p>
              
              <p className="text-white font-medium border-l-4 border-cyan-400 pl-6">
                "If you can conquer 11, the 21km half-marathon is a foregone conclusion. If you can sustain the 11km mindset, the 42km full and the world of Ultras are simply matters of time."
              </p>

              <p>
                Running long is a masterclass in <strong>Mental Fortitude</strong>. When you run with the pack, individual fatigue is replaced by collective momentum. We don't just build faster legs; we build an iron mindset that carries over into every aspect of your life—discipline, focus, and relentless grit.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
              <div className="bg-[#111625] p-6 rounded-lg border-t-2 border-red-600">
                <h4 className="text-cyan-400 font-bold uppercase text-sm mb-2">The Catalyst</h4>
                <p className="text-gray-400 text-base">Mastering 11km breaks the 'distance barrier,' making Marathons feel achievable.</p>
              </div>
              <div className="bg-[#111625] p-6 rounded-lg border-t-2 border-cyan-400">
                <h4 className="text-cyan-400 font-bold uppercase text-sm mb-2">Collective Grit</h4>
                <p className="text-gray-400 text-base">Running together synchronizes our pace and our purpose. We never leave a runner behind.</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Proof (IMG_6733.jpg) */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src={TCS10K2026_vidhan} 
                alt="Elektraun Running Club at Vidhana Soudha" 
                className="w-full h-auto grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050609] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Decorative Label */}
            <div className="absolute z-30 -bottom-6 -right-6 bg-red-600 text-white px-8 py-4 font-black uppercase tracking-widest text-sm transform -rotate-2 shadow-xl">
              11KM+ Collective
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;