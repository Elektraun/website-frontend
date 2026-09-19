import Podcasts from "../components/sections/Podcasts";

const Beyond11KMPage = () => (
  <main className="bg-white pt-20">
    <section className="relative overflow-hidden bg-[#0b2355] px-6 py-20 text-white md:py-28">
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="relative mx-auto max-w-7xl"><p className="mb-5 text-xs font-black uppercase tracking-[0.3em] text-[#64ee00]">The Elektraun podcast</p><h1 className="text-5xl font-light leading-[0.9] tracking-tighter sm:text-7xl md:text-8xl">Beyond<br /><span className="font-black uppercase">11KM.</span></h1><p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/65">The finish time tells only part of the story. Meet the runners, hear the lessons and understand what it takes to keep going after the familiar distance ends.</p></div>
    </section>
    <Podcasts />
  </main>
);

export default Beyond11KMPage;
