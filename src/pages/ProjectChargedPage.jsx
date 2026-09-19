import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WhatsAppModal from "../modals/WhatsAppModal";
import ProcamLogo from "../assets/images/procam.png";
import HellRaceLogo from "../assets/images/hell race.png";
import WorldMajors from "../assets/images/wmm.png";

const categories = [
  {
    id: "procam",
    number: "01",
    label: "India's road circuit",
    title: "Procam Slam",
    summary: "One consecutive cycle across four feature races. The distance grows with every city, demanding consistency from 10K through the full marathon.",
    source: "https://tcsworld10k.procam.in/about-us/procam-slam",
    sourceLabel: "Official Procam Slam details",
    color: "#1257ed",
    image: ProcamLogo,
    imageClass: "max-h-40 object-contain",
    imageSurface: "bg-white",
    races: [
      { name: "TCS World 10K Bengaluru", place: "Bengaluru, Karnataka", distance: "10 KM", terrain: "City road", detail: "Official cut-off: 1 hr 25 min" },
      { name: "Vedanta Delhi Half Marathon", place: "New Delhi", distance: "21.0975 KM", terrain: "City road", detail: "Official cut-off: 3 hrs 30 min" },
      { name: "Tata Steel World 25K Kolkata", place: "Kolkata, West Bengal", distance: "25 KM", terrain: "City road", detail: "Official cut-off: 3 hrs 45 min" },
      { name: "Tata Mumbai Marathon", place: "Mumbai, Maharashtra", distance: "42.195 KM", terrain: "City road", detail: "Official cut-off: 6 hrs 30 min" },
    ],
  },
  {
    id: "hell-races",
    number: "02",
    label: "India's extreme terrain",
    title: "The Hell Races",
    summary: "A progression through ancient trails, salt desert, high mountains, humidity and long road ultras. Distances shown are the published event categories and may evolve by edition.",
    source: "https://thehellrace.com/",
    sourceLabel: "Official Hell Race portfolio",
    color: "#ff1c29",
    image: HellRaceLogo,
    imageClass: "max-h-24 object-contain",
    imageSurface: "bg-black",
    races: [
      { name: "Red Stone Ultra", place: "Gurugram, Haryana", distance: "50 / 32 KM / 10 miles", terrain: "Aravalli trail", detail: "Rocky trails through the Northern Aravalli range" },
      { name: "White Sand Ultra", place: "Dholavira, Kutch, Gujarat", distance: "135 / 100 miles · 100 / 50 KM", terrain: "Salt desert", detail: "Out-and-back course across the Rann of Kutch" },
      { name: "The Buddha Trails", place: "Rimbick, Darjeeling, West Bengal", distance: "65 / 30 / 12 KM", terrain: "High-altitude technical trail", detail: "Sandakphu–Phalut ridge and dense Himalayan forest" },
      { name: "Bir Running Festival", place: "Bir, Himachal Pradesh", distance: "21.1 / 19 / 11 KM", terrain: "Road + mountain trail", detail: "Half marathon, Hanumangarh Epic and 11K" },
      { name: "Great Himalayan Running Festival", place: "Manali–Leh, Himachal/Ladakh", distance: "480 KM / 135 miles / 80 KM / 5-stage FM", terrain: "High-altitude mountain road", detail: "A week-long festival across major Himalayan passes" },
      { name: "Hell 480 Challenge", place: "Manali to Leh", distance: "480 KM", terrain: "High-altitude mountain road", detail: "10,000 m+ gain with a 120-hour limit" },
      { name: "Goa Ultra", place: "Palolem, Goa", distance: "120 / 60 / 30 KM", terrain: "Road, heat and humidity", detail: "Coastal start with rolling inland elevation" },
      { name: "Solang SkyUltra", place: "Solang Valley, Himachal Pradesh", distance: "100 / 60 / 30 / 14 KM", terrain: "Technical skyrunning trail", detail: "Up to 7,350 m+ with glaciers and water crossings" },
      { name: "The Border", place: "Jaisalmer–Laungewala, Rajasthan", distance: "100 miles / 100 / 50 KM", terrain: "Desert road", detail: "Point-to-point run through the Thar towards the border" },
    ],
  },
  {
    id: "majors",
    number: "03",
    label: "The global marathon stage",
    title: "World Marathon Majors",
    summary: "Eight cities, one marathon distance and a global star journey. Each course carries its own qualification, ballot or charity-entry pathway.",
    source: "https://www.worldmarathonmajors.com/stars",
    sourceLabel: "Official World Marathon Majors",
    color: "#64ee00",
    image: WorldMajors,
    imageClass: "h-52 w-full object-cover object-center",
    imageSurface: "bg-[#071735]",
    races: [
      { name: "Tokyo Marathon", place: "Tokyo, Japan", distance: "42.195 KM", terrain: "City road", detail: "Point-to-point tour through central Tokyo" },
      { name: "Boston Marathon", place: "Hopkinton to Boston, USA", distance: "42.195 KM", terrain: "Rolling road", detail: "Historic point-to-point course with qualifying standards" },
      { name: "TCS London Marathon", place: "London, United Kingdom", distance: "42.195 KM", terrain: "City road", detail: "Greenwich start and The Mall finish" },
      { name: "Sanlam Cape Town Marathon", place: "Cape Town, South Africa", distance: "42.195 KM", terrain: "City road", detail: "Africa's current Major and a global destination race" },
      { name: "TCS Sydney Marathon", place: "Sydney, Australia", distance: "42.195 KM", terrain: "City road", detail: "Harbour city course finishing at the Opera House" },
      { name: "BMW Berlin Marathon", place: "Berlin, Germany", distance: "42.195 KM", terrain: "Fast city road", detail: "Flat course renowned for record performances" },
      { name: "Bank of America Chicago Marathon", place: "Chicago, USA", distance: "42.195 KM", terrain: "Fast city road", detail: "Loop through 29 neighbourhoods" },
      { name: "TCS New York City Marathon", place: "New York City, USA", distance: "42.195 KM", terrain: "Urban road + bridges", detail: "Five boroughs, finishing in Central Park" },
    ],
  },
  {
    id: "ultras",
    number: "04",
    label: "Iconic global ultras",
    title: "The Ultra Frontier",
    summary: "A target portfolio of globally recognised ultras spanning road, alpine trail and historic point-to-point challenges. Final participation depends on each race's qualification and entry system.",
    source: "https://montblanc.utmb.world/races",
    sourceLabel: "Explore UTMB Mont-Blanc",
    color: "#0b2355",
    races: [
      { name: "UTMB Mont-Blanc", place: "France · Italy · Switzerland", distance: "Approx. 174 KM", terrain: "Alpine technical trail", detail: "Around Mont Blanc with approximately 9,700 m+ elevation" },
      { name: "Comrades Marathon", place: "Durban to Pietermaritzburg, South Africa", distance: "85.777 KM (2026)", terrain: "Hilly road ultra", detail: "The Up Run; direction and exact distance vary by edition" },
      { name: "Spartathlon", place: "Athens to Sparta, Greece", distance: "Approx. 246 KM", terrain: "Road + mountain pass", detail: "Historic route with a strict 36-hour limit" },
      { name: "Lavaredo Ultra Trail", place: "Cortina d'Ampezzo, Italy", distance: "120 KM", terrain: "Dolomites mountain trail", detail: "Approximately 5,800 m+ through UNESCO-listed terrain" },
    ],
  },
];

const RaceCard = ({ race, accent }) => (
  <div className="group rounded-2xl border border-[#0b2355]/10 bg-white p-6 shadow-[0_10px_35px_rgba(11,35,85,.06)] transition-all hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(11,35,85,.12)]">
    <div className="mb-5 flex items-start justify-between gap-4">
      <h3 className="text-xl font-black uppercase leading-tight text-[#0b2355]">{race.name}</h3>
      <span className="mt-1 h-3 w-3 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
    </div>
    <dl className="space-y-3 text-sm">
      <div><dt className="text-[9px] font-black uppercase tracking-[0.22em] text-[#0b2355]/40">Place</dt><dd className="mt-1 font-semibold text-[#38517d]">{race.place}</dd></div>
      <div><dt className="text-[9px] font-black uppercase tracking-[0.22em] text-[#0b2355]/40">Distance</dt><dd className="mt-1 text-lg font-black text-[#0b2355]">{race.distance}</dd></div>
      <div><dt className="text-[9px] font-black uppercase tracking-[0.22em] text-[#0b2355]/40">Course</dt><dd className="mt-1 font-semibold text-[#38517d]">{race.terrain}</dd></div>
    </dl>
    <p className="mt-5 border-t border-[#0b2355]/10 pt-4 text-sm leading-relaxed text-[#38517d]">{race.detail}</p>
  </div>
);

const ProjectChargedPage = () => {
  const [showJoin, setShowJoin] = useState(false);

  return (
    <>
      <main className="bg-white text-[#0b2355]">
        <section className="relative overflow-hidden bg-[#0b2355] px-6 pb-20 pt-36 text-white md:pb-28 md:pt-44">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:64px_64px]" />
          <div className="absolute -right-24 top-16 h-96 w-96 rounded-full bg-[#1257ed]/40 blur-3xl" />
          <div className="relative mx-auto max-w-7xl">
            <Link to="/" className="mb-12 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/55 transition-colors hover:text-white">← Back to Elektraun</Link>
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8"><p className="mb-6 text-xs font-black uppercase tracking-[0.3em] text-[#64ee00]">Project Charged · 2026—2036</p><h1 className="text-5xl font-light leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl">The complete<br /><span className="font-black uppercase">race blueprint.</span></h1></div>
              <p className="text-lg leading-relaxed text-white/65 lg:col-span-4">Every arena, race, location and distance on Elektraun's ten-year horizon—designed to show runners where the journey can lead and partners what they can help build.</p>
            </motion.div>
            <nav className="mt-14 flex flex-wrap gap-3">{categories.map((category) => <a key={category.id} href={`#${category.id}`} className="rounded-full border border-white/20 px-4 py-2 text-[10px] font-black uppercase tracking-widest transition-colors hover:bg-white hover:text-[#0b2355]">{category.title}</a>)}</nav>
          </div>
        </section>

        {categories.map((category, sectionIndex) => (
          <section key={category.id} id={category.id} className={`scroll-mt-24 px-6 py-20 md:py-28 ${sectionIndex % 2 ? "bg-[#f4f7ff]" : "bg-white"}`}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 grid gap-8 border-b border-[#0b2355]/10 pb-10 lg:grid-cols-12">
                <div className="lg:col-span-7"><p className="mb-3 text-xs font-black uppercase tracking-[0.28em]" style={{ color: category.color }}>{category.number} / {category.label}</p><h2 className="text-4xl font-black uppercase tracking-tight md:text-6xl">{category.title}</h2></div>
                <div className="lg:col-span-5">
                  {category.image && <div className={`mb-6 flex min-h-28 items-center justify-center overflow-hidden rounded-xl border border-[#0b2355]/10 p-4 ${category.imageSurface}`}><img src={category.image} alt={`${category.title} identity`} className={category.imageClass} /></div>}
                  <p className="leading-relaxed text-[#38517d]">{category.summary}</p><a href={category.source} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-xs font-black uppercase tracking-wider text-[#1257ed] hover:text-[#ff1c29]">{category.sourceLabel} ↗</a>
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{category.races.map((race) => <RaceCard key={race.name} race={race} accent={category.color} />)}</div>
            </div>
          </section>
        ))}

        <section className="bg-[#0b2355] px-6 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8"><p className="mb-3 text-xs font-black uppercase tracking-[0.28em] text-[#64ee00]">The route starts here</p><h2 className="text-4xl font-black uppercase md:text-6xl">Train local. Race global.</h2><p className="mt-5 max-w-2xl text-white/60">Calendars, entry standards and course details change by edition. Project Charged will plan each campaign against the latest official race information.</p></div>
            <div className="flex flex-col gap-3 lg:col-span-4"><button onClick={() => setShowJoin(true)} className="rounded-lg bg-[#1257ed] px-6 py-4 text-sm font-black uppercase tracking-wider transition-colors hover:bg-white hover:text-[#0b2355]">Join the runner pathway</button><a href="https://www.linkedin.com/company/elektraun" target="_blank" rel="noreferrer" className="rounded-lg border border-white/20 px-6 py-4 text-center text-sm font-black uppercase tracking-wider transition-colors hover:border-[#64ee00] hover:text-[#64ee00]">Partner with Project Charged</a></div>
          </div>
        </section>
      </main>
      <WhatsAppModal isOpen={showJoin} onClose={() => setShowJoin(false)} />
    </>
  );
};

export default ProjectChargedPage;
