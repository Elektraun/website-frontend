import { useState } from "react";
import { motion } from "framer-motion";
import TCSGroup from "../assets/images/tcs_2026_full.jpg";
import VidhanaRun from "../assets/images/TCS10K_2026_vidhan.jpg";
import Tuffman from "../assets/images/tuffman_2026.jpg";
import Gallery from "../components/sections/Gallery/Gallery";
import WhatsAppModal from "../modals/WhatsAppModal";

const principles = [
  {
    number: "01",
    title: "Consistency",
    statement: "Return to the road.",
    description: "Endurance is built by showing up repeatedly. One exceptional run cannot replace a steady rhythm of honest kilometres.",
    color: "border-[#1257ed]",
  },
  {
    number: "02",
    title: "Discipline",
    statement: "Respect the process.",
    description: "Long-distance progress asks for patient training, sensible pacing and the willingness to do the work before race day.",
    color: "border-[#ff1c29]",
  },
  {
    number: "03",
    title: "Focus",
    statement: "Stay with the next step.",
    description: "Distance becomes manageable when attention stays on the present kilometre, the current effort and the shared objective.",
    color: "border-[#64ee00]",
  },
];

const AboutPage = () => {
  const [showJoin, setShowJoin] = useState(false);

  return (
    <>
      <main className="bg-white pt-20 text-[#0b2355]">
        <section className="relative overflow-hidden px-6 py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(18,87,237,.12),transparent_28%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-7">
              <div className="mb-7 flex flex-wrap gap-3 text-[10px] font-black uppercase tracking-[0.22em]"><span className="rounded-full bg-[#1257ed]/10 px-4 py-2 text-[#1257ed]">Established 15 Feb 2025</span><span className="rounded-full bg-[#64ee00]/15 px-4 py-2 text-[#315f09]">Home: Lalbagh</span></div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#ff1c29]">About Elektraun</p>
              <h1 className="text-5xl font-light leading-[0.9] tracking-tighter sm:text-6xl md:text-8xl">Long distance<br /><span className="font-black uppercase">starts here.</span></h1>
              <p className="mt-7 max-w-2xl text-lg leading-relaxed text-[#38517d] md:text-xl">Elektraun is a long-distance running club built around a simple belief: stronger endurance comes from a stronger community and a better process.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="relative lg:col-span-5">
              <div className="overflow-hidden rounded-3xl shadow-[0_24px_70px_rgba(11,35,85,.18)]"><img src={TCSGroup} alt="Elektraun runners together" className="aspect-[4/3] h-full w-full object-cover" /></div>
              <div className="absolute -bottom-5 -left-4 rounded-xl bg-[#0b2355] px-6 py-4 text-white shadow-xl"><p className="text-3xl font-black">11KM<span className="text-[#64ee00]">+</span></p><p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/55">Every club run</p></div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#0b2355] px-6 py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5"><p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#64ee00]">Our mission</p><h2 className="text-4xl font-light leading-tight md:text-6xl">Build the people.<br /><span className="font-black uppercase">Engineer endurance.</span></h2></div>
            <div className="lg:col-span-7"><blockquote className="border-l-4 border-[#1257ed] pl-7 text-2xl font-medium leading-snug text-white/90 md:text-3xl">“Building community and engineering solutions that enhance endurance.”</blockquote><p className="mt-7 max-w-2xl leading-relaxed text-white/60">Community supplies accountability, encouragement and shared experience. The solutions are the repeatable habits around the run: a meaningful minimum distance, considered effort and a culture that keeps people returning.</p></div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-3xl"><p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#1257ed]">How we run</p><h2 className="text-4xl font-light leading-tight md:text-6xl">Three principles.<br /><span className="font-black uppercase">Every kilometre.</span></h2></div>
            <div className="grid gap-6 lg:grid-cols-3">
              {principles.map((principle, index) => (
                <motion.article key={principle.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className={`rounded-2xl border-t-4 bg-[#f4f7ff] p-8 ${principle.color}`}>
                  <p className="text-xs font-black tracking-[0.2em] text-[#0b2355]/35">{principle.number}</p><h3 className="mt-8 text-2xl font-black uppercase">{principle.title}</h3><p className="mt-2 font-serif text-xl italic text-[#1257ed]">{principle.statement}</p><p className="mt-5 text-sm leading-relaxed text-[#38517d]">{principle.description}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="overflow-hidden bg-[#f4f7ff] px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative lg:col-span-6"><img src={VidhanaRun} alt="Elektraun long-distance runners in Bengaluru" className="w-full rounded-3xl object-cover shadow-xl" /><div className="absolute -bottom-5 right-5 rounded-xl bg-[#ff1c29] px-5 py-3 text-xs font-black uppercase tracking-widest text-white">Distance over doubt</div></motion.div>
            <div className="lg:col-span-6"><p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#ff1c29]">The 11KM standard</p><h2 className="text-4xl font-light leading-tight md:text-6xl">Not a finish line.<br /><span className="font-black uppercase">A foundation.</span></h2><div className="mt-7 space-y-5 leading-relaxed text-[#38517d]"><p>Every Elektraun run is a minimum of 11 kilometres. It is long enough to demand patience and short enough to practise consistently.</p><p>The standard teaches runners to settle into effort, manage discomfort and stay focused beyond the easy opening kilometres. Repeated over time, 11KM becomes the bridge towards half marathons, marathons and ultras.</p><p className="font-bold text-[#0b2355]">We do not chase distance for its own sake. We use distance to build dependable runners.</p></div></div>
          </div>
        </section>

        <section className="px-6 py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6"><p className="mb-4 text-xs font-black uppercase tracking-[0.3em] text-[#64a900]">Our home ground</p><h2 className="text-4xl font-light leading-tight md:text-6xl">Rooted in<br /><span className="font-black uppercase">Lalbagh.</span></h2><p className="mt-7 text-lg leading-relaxed text-[#38517d]">Lalbagh is Elektraun's main home: a Bengaluru landmark where movement, nature and community meet. It gives the club a place to return to, a familiar starting point from which bigger ambitions can grow.</p><div className="mt-8 flex flex-wrap gap-3"><span className="rounded-full border border-[#0b2355]/10 px-4 py-2 text-xs font-black uppercase tracking-wider">Bengaluru</span><span className="rounded-full border border-[#0b2355]/10 px-4 py-2 text-xs font-black uppercase tracking-wider">Community first</span><span className="rounded-full border border-[#0b2355]/10 px-4 py-2 text-xs font-black uppercase tracking-wider">Long distance</span></div></div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="overflow-hidden rounded-3xl"><img src={Tuffman} alt="Elektraun athlete taking on a long-distance event" className="aspect-[4/3] w-full object-cover" /></motion.div>
          </div>
        </section>

        <section className="bg-[#1257ed] px-6 py-16 text-white">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-center"><div><p className="mb-2 text-xs font-black uppercase tracking-[0.28em] text-[#b8ff80]">Your next long run</p><h2 className="text-3xl font-black uppercase md:text-5xl">Show up. Stay focused. Go further.</h2></div><button onClick={() => setShowJoin(true)} className="shrink-0 rounded-xl bg-white px-8 py-4 text-sm font-black uppercase tracking-wider text-[#1257ed] transition-colors hover:bg-[#0b2355] hover:text-white">Join Elektraun</button></div>
        </section>

        <Gallery />
      </main>
      <WhatsAppModal isOpen={showJoin} onClose={() => setShowJoin(false)} />
    </>
  );
};

export default AboutPage;
