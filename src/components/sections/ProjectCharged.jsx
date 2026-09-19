import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProcamLogo from "../../assets/images/procam.png";
import HellRaceLogo from "../../assets/images/hell race.png";
import WorldMajors from "../../assets/images/wmm.png";
import WhatsAppModal from "../../modals/WhatsAppModal";

const arenas = [
  {
    index: "01",
    title: "Procam Slam",
    eyebrow: "India / Road",
    description: "Four consecutive stages—from Bengaluru's 10K to Mumbai's marathon—built for runners who can sustain a season, not just a race.",
    href: "https://tcsworld10k.procam.in/about-us/procam-slam",
    image: ProcamLogo,
    imageFit: "object-contain p-12",
    imageSurface: "bg-white",
    accent: "bg-[#1257ed]",
  },
  {
    index: "02",
    title: "Hell Races",
    eyebrow: "India / Trail + Ultra",
    description: "Technical trails, altitude and raw terrain. A proving ground for the will, preparation and collective resolve behind every finish.",
    href: "https://thehellrace.com/",
    image: HellRaceLogo,
    imageFit: "object-contain p-8",
    imageSurface: "bg-black",
    accent: "bg-[#ff1c29]",
  },
  {
    index: "03",
    title: "World Majors",
    eyebrow: "Global / Marathon",
    description: "Elektraun on the world's defining marathon stages—turning local discipline into a visible, global journey across the decade.",
    href: "https://www.worldmarathonmajors.com/",
    image: WorldMajors,
    imageFit: "object-cover",
    imageSurface: "bg-[#071735]",
    accent: "bg-[#64ee00]",
  },
];

const ProjectCharged = () => {
  const [showJoin, setShowJoin] = useState(false);

  return (
    <>
      <section id="charged" className="relative overflow-hidden bg-[#0b2355] py-24 text-white md:py-32">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
        <div className="absolute -left-32 top-32 h-96 w-96 rounded-full bg-[#1257ed]/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ff1c29]/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="grid gap-12 border-b border-white/15 pb-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#64ee00]/40 bg-[#64ee00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#b8ff80]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#64ee00]" /> Flagship project
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.28em] text-white/50">2026—2036</span>
              </div>
              <h2 className="text-5xl font-light leading-[0.9] tracking-tighter sm:text-6xl md:text-8xl">
                A decade.<br /><span className="font-black uppercase text-[#64ee00]">Fully charged.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-lg leading-relaxed text-white/70">Project Charged is Elektraun's ten-year commitment to move runners from the local start line to India's toughest races and the world's most iconic finishes.</p>
            </div>
          </motion.div>

          <div className="grid border-b border-white/15 sm:grid-cols-3">
            {[["10", "Years of intent"], ["04", "Endurance arenas"], ["01", "Committed collective"]].map(([value, label]) => (
              <div key={label} className="border-white/15 px-0 py-8 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
                <p className="text-4xl font-black text-white">{value}<span className="text-[#64ee00]">+</span></p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">{label}</p>
              </div>
            ))}
          </div>

          <div className="py-16">
            <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div><p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#64ee00]">The race portfolio</p><h3 className="text-3xl font-black uppercase tracking-tight md:text-5xl">Road. Trail. Ultra. World.</h3></div>
              <p className="max-w-md text-sm leading-relaxed text-white/55">One training culture, engineered for every terrain and distance that asks more from a runner.</p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {arenas.map((arena, cardIndex) => (
                <motion.a key={arena.title} href={arena.href} target="_blank" rel="noreferrer" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: cardIndex * 0.12 }} viewport={{ once: true }} className="group relative min-h-[440px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className={`absolute inset-0 ${arena.imageSurface}`}>
                    <img src={arena.image} alt={`${arena.title} identity`} className={`h-full w-full opacity-70 transition-all duration-700 group-hover:scale-105 group-hover:opacity-90 ${arena.imageFit}`} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071735] via-[#0b2355]/75 to-transparent" />
                  <div className={`absolute left-0 top-0 h-1.5 w-full ${arena.accent}`} />
                  <div className="absolute inset-0 flex flex-col justify-between p-7">
                    <div className="flex items-start justify-between"><span className="font-mono text-sm text-white/55">{arena.index}</span><span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-xl transition-all group-hover:border-white group-hover:bg-white group-hover:text-[#0b2355]">↗</span></div>
                    <div><p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#b8ff80]">{arena.eyebrow}</p><h4 className="text-3xl font-black uppercase">{arena.title}</h4><p className="mt-4 text-sm leading-relaxed text-white/65">{arena.description}</p></div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          <div className="grid overflow-hidden rounded-2xl bg-white text-[#0b2355] lg:grid-cols-12">
            <div className="p-8 md:p-12 lg:col-span-8">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#1257ed]">Built for shared momentum</p>
              <h3 className="max-w-2xl text-3xl font-black uppercase leading-tight md:text-5xl">Run the journey.<br />Back the movement.</h3>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#38517d]">For runners, this is a pathway. For brands and collaborators, it is a decade-long platform built around participation, ambition, compelling stories and measurable endurance.</p>
            </div>
            <div className="flex flex-col justify-center gap-3 bg-[#f4f7ff] p-8 md:p-12 lg:col-span-4">
              <Link to="/project-charged" className="rounded-lg bg-[#0b2355] px-6 py-4 text-center text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[#ff1c29]">Explore the full blueprint</Link>
              <button onClick={() => setShowJoin(true)} className="rounded-lg bg-[#1257ed] px-6 py-4 text-sm font-black uppercase tracking-wider text-white transition-colors hover:bg-[#0b2355]">Join Project Charged</button>
              <a href="https://www.linkedin.com/company/elektraun" target="_blank" rel="noreferrer" className="rounded-lg border border-[#0b2355]/15 px-6 py-4 text-center text-sm font-black uppercase tracking-wider transition-colors hover:border-[#ff1c29] hover:text-[#ff1c29]">Collaborate with us</a>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppModal isOpen={showJoin} onClose={() => setShowJoin(false)} />
    </>
  );
};

export default ProjectCharged;
