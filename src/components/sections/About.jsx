import { motion } from "framer-motion";
import TCS10K2026Vidhan from "../../assets/images/TCS10K_2026_vidhan.jpg";

const About = () => (
  <section id="about" className="relative overflow-hidden bg-white py-24 text-[#0b2355] md:py-32">
    <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#1257ed]/10 to-transparent" />
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="mb-20 max-w-3xl">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-[#1257ed]">The philosophy</p>
        <h2 className="text-4xl font-light leading-tight md:text-6xl">Go further, <span className="font-serif italic text-[#0b2355]/70">together</span>.<br /><span className="font-black uppercase tracking-tighter">The Elektraun Ethos</span></h2>
        <div className="mt-6 h-1.5 w-24 bg-[#ff1c29]" />
      </motion.div>
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-8 lg:col-span-7">
          <div className="space-y-6 text-lg leading-relaxed text-[#38517d] md:text-xl">
            <p>At Elektraun, true transformation begins where comfort ends. Our standard starts at <strong className="text-[#1257ed]">11KM</strong>—not as a finish line, but as a baseline.</p>
            <p className="border-l-4 border-[#1257ed] pl-6 font-medium text-[#0b2355]">“Conquer 11KM repeatedly and the half, full, and ultra become matters of time—not possibility.”</p>
            <p>Running long is a masterclass in <strong>mental fortitude</strong>. With the pack, individual fatigue becomes collective momentum. We build more than faster legs: we build discipline, focus, and a resilient mindset for life beyond the route.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 pt-4 md:grid-cols-2">
            <div className="rounded-lg border-t-2 border-[#ff1c29] bg-[#f4f7ff] p-6"><h3 className="mb-2 text-sm font-bold uppercase text-[#1257ed]">The catalyst</h3><p className="text-base text-[#38517d]">Mastering 11KM breaks the distance barrier and makes the next challenge tangible.</p></div>
            <div className="rounded-lg border-t-2 border-[#64ee00] bg-[#f4f7ff] p-6"><h3 className="mb-2 text-sm font-bold uppercase text-[#1257ed]">Collective grit</h3><p className="text-base text-[#38517d]">Running together aligns our pace and purpose. Consistency is easier with company.</p></div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative lg:col-span-5">
          <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl"><img src={TCS10K2026Vidhan} alt="Elektraun runners at Vidhana Soudha" className="w-full grayscale-[20%] transition-all duration-700 hover:scale-105 hover:grayscale-0" /><div className="absolute inset-0 bg-gradient-to-t from-[#0b2355] via-transparent to-transparent opacity-35" /></div>
          <div className="absolute -bottom-6 -right-3 z-20 -rotate-2 bg-[#ff1c29] px-6 py-4 text-sm font-black uppercase tracking-widest text-white shadow-xl md:-right-6">11KM+ collective</div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
