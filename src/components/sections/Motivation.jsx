import { motion } from "framer-motion";

const Motivation = () => (
  <section id="motivation" className="relative overflow-hidden bg-[#f4f7ff] text-[#0b2355]">
    <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(18,87,237,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(18,87,237,.09)_1px,transparent_1px)] [background-size:48px_48px]" />
    <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#64ee00]/20 blur-3xl" />
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.25 }} className="relative z-10 mx-auto grid max-w-screen-2xl grid-cols-1 items-end gap-12 px-6 py-24 md:px-12 lg:grid-cols-12">
      <div className="space-y-10 lg:col-span-8">
        <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl font-serif text-2xl italic leading-snug text-[#38517d] md:text-3xl">“Endurance is not one big effort. It is the decision to return, even when the route feels longer.”</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-light leading-[0.9] tracking-tighter md:text-7xl"><span className="font-serif italic text-[#1257ed]">11KM</span><br />ISN&apos;T A <span className="font-black uppercase tracking-normal">GOAL</span>.<br />IT&apos;S THE <span className="font-extrabold uppercase text-[#ff1c29]">START</span>.</motion.h2>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="space-y-7 rounded-2xl border border-[#0b2355]/10 bg-white p-8 shadow-xl md:p-10 lg:col-span-4">
        <div className="flex items-center gap-3"><div className="h-px w-12 bg-[#1257ed]" /><p className="text-xs font-bold uppercase tracking-widest text-[#1257ed]">The process</p></div>
        <p className="text-base leading-relaxed text-[#38517d]">We build an unbreakable resilience one considered kilometer at a time. This is a space for discipline, focused training, and the people who make the long road feel possible.</p>
        <a href="#gallery" className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-[#ff1c29] px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[#1257ed]">See the miles <span className="text-xl">→</span></a>
      </motion.div>
    </motion.div>
  </section>
);

export default Motivation;
