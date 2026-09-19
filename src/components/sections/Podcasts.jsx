import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

const episodes = [
  { id: "kIHGfnuM8CE", episode: "Episode 04", title: "Thailand J-KET Winner Harinath", description: "A conversation about going beyond familiar limits and competing on an international endurance stage." },
  { id: "raZQHUoO6Ws", episode: "Episode 03", title: "100K Ultra Finisher Sunil Biswas", description: "Inside the preparation, mindset and resolve required to move through one hundred kilometres." },
  { id: "GIwU3TJf6V0", episode: "Episode 02", title: "Procam Slam Finisher Dattatreya", description: "Four cities, four race distances and the consistency behind completing the full Procam Slam cycle." },
];

const Podcasts = () => (
  <section id="podcasts" className="relative overflow-hidden bg-[#f4f7ff] py-24 text-[#0b2355] md:py-32">
    <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#1257ed]/10 blur-3xl" />
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14 flex flex-col justify-between gap-8 border-b border-[#0b2355]/10 pb-10 md:flex-row md:items-end">
        <div>
          <div className="mb-5 flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff1c29] text-white"><FaYoutube size={20} /></span><p className="text-xs font-black uppercase tracking-[0.3em] text-[#ff1c29]">Beyond 11KM</p></div>
          <h2 className="text-4xl font-light leading-[0.95] tracking-tighter sm:text-5xl md:text-7xl">Long miles.<br /><span className="font-black uppercase">Real stories.</span></h2>
        </div>
        <div className="max-w-md"><p className="leading-relaxed text-[#38517d]">Conversations with runners who turned consistency into extraordinary finishes. Watch the Elektraun podcast and take the long-run lessons with you.</p><a href="https://www.youtube.com/@Elektraunrunclub" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#1257ed] transition-colors hover:text-[#ff1c29]"><FaYoutube size={18} /> Visit our YouTube channel →</a></div>
      </motion.div>
      <div className="grid gap-6 lg:grid-cols-3">
        {episodes.map((episode, index) => (
          <motion.article key={episode.id} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }} className="overflow-hidden rounded-2xl border border-[#0b2355]/10 bg-white shadow-[0_12px_35px_rgba(11,35,85,.08)]">
            <div className="aspect-video overflow-hidden bg-[#0b2355]">
              <iframe src={`https://www.youtube-nocookie.com/embed/${episode.id}?rel=0`} title={`${episode.title} — Beyond 11KM`} className="h-full w-full" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
            </div>
            <div className="p-6"><p className="mb-3 text-[10px] font-black uppercase tracking-[0.25em] text-[#ff1c29]">{episode.episode}</p><h3 className="text-xl font-black uppercase leading-tight">{episode.title}</h3><p className="mt-4 text-sm leading-relaxed text-[#38517d]">{episode.description}</p><a href={`https://youtu.be/${episode.id}`} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-[10px] font-black uppercase tracking-[0.2em] text-[#1257ed] hover:text-[#ff1c29]">Watch on YouTube ↗</a></div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Podcasts;
