import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const STORAGE_KEY = "elektraun_project_charged_banner_seen_v1";

const ProjectChargedBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
      const hasSeenBanner = window.localStorage.getItem(STORAGE_KEY) === "true";
      if (!hasSeenBanner && location.pathname !== "/project-charged") setIsVisible(true);
    } catch {
      if (location.pathname !== "/project-charged") setIsVisible(true);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!isVisible) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isVisible]);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // The banner still closes when storage is unavailable.
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[90] flex items-end justify-center p-3 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="charged-banner-title">
          <motion.button aria-label="Dismiss Project Charged announcement" onClick={dismiss} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 cursor-default bg-[#0b2355]/65 backdrop-blur-sm" />
          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.98 }} transition={{ type: "spring", stiffness: 260, damping: 26 }} className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-[0_30px_100px_rgba(4,15,40,.35)]">
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_top_right,rgba(100,238,0,.25),transparent_45%)]" />
            <button onClick={dismiss} aria-label="Close announcement" className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#0b2355]/10 bg-white text-2xl text-[#0b2355] transition-colors hover:bg-[#f4f7ff] sm:right-6 sm:top-6">×</button>
            <div className="relative grid md:grid-cols-[1fr_0.72fr]">
              <div className="p-7 sm:p-10 md:p-12">
                <div className="mb-8 flex items-center gap-3"><img src={logo} alt="Elektraun" className="h-12 w-12 rounded-xl border border-[#0b2355]/10 object-cover" /><div><p className="text-[9px] font-black uppercase tracking-[0.28em] text-[#1257ed]">Elektraun presents</p><p className="text-sm font-black uppercase tracking-widest text-[#0b2355]">2026—2036</p></div></div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#ff1c29]">Project Charged</p>
                <h2 id="charged-banner-title" className="text-4xl font-light leading-[0.92] tracking-tighter text-[#0b2355] sm:text-5xl md:text-6xl">The decade of<br /><span className="font-black uppercase">Elektraun.</span></h2>
                <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#38517d] sm:text-base">Ten years. Four endurance arenas. One collective moving from India's defining races to the world's greatest start lines.</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row"><Link to="/project-charged" onClick={dismiss} className="rounded-lg bg-[#1257ed] px-6 py-4 text-center text-xs font-black uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#0b2355]">Explore Project Charged →</Link><button onClick={dismiss} className="px-4 py-3 text-xs font-black uppercase tracking-[0.16em] text-[#0b2355]/55 transition-colors hover:text-[#0b2355]">Continue to website</button></div>
              </div>
              <div className="relative hidden min-h-full overflow-hidden bg-[#0b2355] p-10 text-white md:flex md:flex-col md:justify-between">
                <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:48px_48px]" />
                <div className="relative"><p className="text-7xl font-black text-[#64ee00]">10</p><p className="text-xs font-black uppercase tracking-[0.3em] text-white/55">Years of intent</p></div>
                <div className="relative space-y-4 text-sm font-bold uppercase tracking-[0.18em]"><p><span className="mr-3 text-[#64ee00]">01</span>Road</p><p><span className="mr-3 text-[#64ee00]">02</span>Trail</p><p><span className="mr-3 text-[#64ee00]">03</span>Ultra</p><p><span className="mr-3 text-[#64ee00]">04</span>World</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectChargedBanner;
