import { useState } from "react";
import { motion } from "framer-motion";
import TCS10K2026Main from "../../assets/images/TCS10K_2026_main.jpg";
import WhatsAppModal from "../../modals/WhatsAppModal";

const container = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.14, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } };

const Hero = () => {
  const [showQR, setShowQR] = useState(false);
  return <>
    <section className="relative min-h-screen overflow-hidden bg-white text-[#0b2355]">
      <div className="absolute inset-0">
        <video src="https://assets.mixkit.co/videos/preview/mixkit-group-of-runners-on-a-mountain-road-23945-large.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover opacity-20 grayscale" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_44%,rgba(18,87,237,0.12),transparent_24%),linear-gradient(90deg,rgba(255,255,255,.97)_8%,rgba(255,255,255,.91)_50%,rgba(255,255,255,.56)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>
      <motion.div initial="hidden" animate="visible" variants={container} className="relative z-10 mx-auto grid min-h-screen max-w-screen-2xl grid-cols-1 items-center gap-12 px-6 pb-16 pt-28 md:grid-cols-12 md:px-12">
        <div className="space-y-8 md:col-span-7">
          <motion.div variants={item} className="flex items-center gap-4"><div className="h-px w-16 bg-[#1257ed]" /><span className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#0b2355]/70">Bengaluru run collective / distance over doubt</span></motion.div>
          <motion.h1 variants={item} className="text-5xl font-light leading-[0.91] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"><span className="font-serif italic text-[#0b2355]/90">Build</span> the<br /><span className="font-black uppercase text-[#ff1c29]">distance</span> habit.</motion.h1>
          <motion.p variants={item} className="max-w-2xl text-lg leading-relaxed text-[#38517d] md:text-xl lg:text-2xl">Building community and engineering solutions that enhance endurance. Every run begins with focus, gets stronger through consistency, and goes beyond 11KM.</motion.p>
          <motion.div variants={item} className="pt-2"><motion.button onClick={() => setShowQR(true)} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 rounded-md bg-[#1257ed] px-8 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[0_10px_30px_rgba(18,87,237,0.25)] transition-colors hover:bg-[#0b2355] md:px-10 md:py-5">Run with the collective <span className="text-xl">→</span></motion.button></motion.div>
          <motion.div variants={item} className="flex flex-wrap gap-x-7 gap-y-3 pt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0b2355]/70"><span><b className="mr-2 text-[#64ee00]">01</b>11KM minimum</span><span><b className="mr-2 text-[#1257ed]">02</b>weekly rhythm</span><span><b className="mr-2 text-[#ff1c29]">03</b>no empty miles</span></motion.div>
        </div>
        <motion.div variants={item} animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="relative md:col-span-5">
          <div className="group relative overflow-hidden rounded-xl border border-[#0b2355]/10 bg-white p-3 shadow-[0_20px_50px_rgba(11,35,85,0.16)]"><div className="aspect-[4/5] overflow-hidden rounded-lg"><img src={TCS10K2026Main} alt="Elektraun members celebrating with medals" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" /></div><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b2355]/95 to-transparent p-7"><p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#64ee00]">Built together</p><p className="mt-1 text-2xl font-black text-white md:text-3xl">CONSISTENCY WINS.</p><p className="mt-1 text-sm text-white/75">A community for runners who show up again tomorrow.</p></div></div>
          <div className="absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full bg-[#ff1c29]/15 blur-3xl" />
        </motion.div>
      </motion.div>
    </section>
    <WhatsAppModal isOpen={showQR} onClose={() => setShowQR(false)} />
  </>;
};

export default Hero;
