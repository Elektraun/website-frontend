import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TCSGroup from "../../assets/images/TCS10K_2026_vidhan.jpg";
import ProcamLogo from "../../assets/images/procam.png";

const highlights = [
  {
    eyebrow: "Our collective",
    title: "Built for the long run",
    description: "Discover the 11KM standard, the people behind Elektraun and the discipline that keeps us moving together.",
    to: "/about",
    cta: "About Elektraun",
    image: TCSGroup,
    imageClass: "object-cover",
    surface: "bg-[#0b2355]",
  },
  {
    eyebrow: "2026—2036",
    title: "Project Charged",
    description: "A ten-year race blueprint spanning Indian road circuits, extreme trails, global majors and iconic ultras.",
    to: "/project-charged",
    cta: "Explore the project",
    image: ProcamLogo,
    imageClass: "object-contain p-10",
    surface: "bg-white",
  },
  {
    eyebrow: "The Elektraun podcast",
    title: "Beyond 11KM",
    description: "Watch honest conversations with runners who turned consistency into extraordinary finishes.",
    to: "/beyond-11km",
    cta: "Watch the stories",
    image: "https://i.ytimg.com/vi/kIHGfnuM8CE/hqdefault.jpg",
    imageClass: "object-cover",
    surface: "bg-[#0b2355]",
  },
];

const HomeHighlights = () => (
  <section className="bg-white px-6 py-20 text-[#0b2355] md:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 max-w-3xl"><p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#1257ed]">Choose your next step</p><h2 className="text-4xl font-light leading-tight md:text-6xl">One community.<br /><span className="font-black uppercase">Three ways in.</span></h2></div>
      <div className="grid gap-6 lg:grid-cols-3">
        {highlights.map((item, index) => (
          <motion.article key={item.to} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="group overflow-hidden rounded-2xl border border-[#0b2355]/10 bg-[#f4f7ff]">
            <div className={`h-56 overflow-hidden ${item.surface}`}><img src={item.image} alt="" className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${item.imageClass}`} /></div>
            <div className="p-7"><p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#ff1c29]">{item.eyebrow}</p><h3 className="text-2xl font-black uppercase">{item.title}</h3><p className="mt-4 text-sm leading-relaxed text-[#38517d]">{item.description}</p><Link to={item.to} className="mt-6 inline-flex text-xs font-black uppercase tracking-[0.18em] text-[#1257ed] transition-colors hover:text-[#ff1c29]">{item.cta} →</Link></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default HomeHighlights;
