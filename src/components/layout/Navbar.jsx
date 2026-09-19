import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/logo.png";
import WhatsAppModal from "../../modals/WhatsAppModal";
import { useAuth } from "../../context/AuthContext";

const links = [
  { label: "Beyond 11KM", to: "/beyond-11km" },
  { label: "Project Charged", to: "/project-charged", accent: true },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showJoin, setShowJoin] = useState(false);
  const { isAuthenticated } = useAuth();

  const closeMenu = () => setMenuOpen(false);
  const openJoin = () => {
    closeMenu();
    setShowJoin(true);
  };

  return (
    <>
      <nav className="fixed left-0 top-0 z-[60] w-full border-b border-[#0b2355]/10 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link to="/" onClick={closeMenu} className="group flex items-center gap-3">
            <div className="relative"><img src={logo} alt="Elektraun home" className="h-11 w-11 rounded-lg border border-[#0b2355]/10 object-cover transition-colors group-hover:border-[#1257ed]" /><div className="absolute -inset-1 -z-10 rounded-lg bg-[#1257ed]/15 opacity-0 blur transition-opacity group-hover:opacity-100" /></div>
            <span className="text-lg font-light uppercase tracking-[0.18em] text-[#0b2355] sm:text-xl">ELEKT<span className="font-black text-[#1257ed]">RAUN</span></span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {links.map((link) => <Link key={link.to} to={link.to} className={`text-xs font-black uppercase tracking-[0.14em] transition-colors ${link.accent ? "text-[#ff1c29] hover:text-[#0b2355]" : "text-[#38517d] hover:text-[#1257ed]"}`}>{link.label}</Link>)}
            <button onClick={openJoin} className="rounded-full bg-[#ff1c29] px-6 py-3 text-xs font-black uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#0b2355]">Join Us</button>
            {/* <Link to={isAuthenticated ? "/account" : "/login"} className="rounded-full border border-[#1257ed] px-6 py-2.5 text-xs font-black uppercase tracking-[0.14em] text-[#1257ed] transition-colors hover:bg-[#1257ed] hover:text-white">{isAuthenticated ? "Account" : "Login"}</Link> */}
          </div>

          <button onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#0b2355]/10 text-[#0b2355] md:hidden">
            {menuOpen ? <span className="text-2xl leading-none">×</span> : <span className="space-y-1.5"><span className="block h-0.5 w-5 bg-[#0b2355]" /><span className="block h-0.5 w-5 bg-[#1257ed]" /><span className="ml-auto block h-0.5 w-3 bg-[#ff1c29]" /></span>}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden border-t border-[#0b2355]/10 bg-white md:hidden">
              <div className="flex flex-col gap-3 px-5 py-6">
                {links.map((link) => <Link key={link.to} to={link.to} onClick={closeMenu} className={`rounded-xl px-4 py-3 text-sm font-black uppercase tracking-widest ${link.accent ? "bg-[#ff1c29]/5 text-[#ff1c29]" : "text-[#0b2355]"}`}>{link.label}</Link>)}
                <button onClick={openJoin} className="mt-2 rounded-xl bg-[#ff1c29] px-5 py-4 text-sm font-black uppercase tracking-widest text-white">Join Us</button>
                {/* <Link to={isAuthenticated ? "/account" : "/login"} onClick={closeMenu} className="rounded-xl border border-[#1257ed] px-5 py-4 text-center text-sm font-black uppercase tracking-widest text-[#1257ed]">{isAuthenticated ? "Account" : "Login"}</Link> */}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <WhatsAppModal isOpen={showJoin} onClose={() => setShowJoin(false)} />
    </>
  );
};

export default Navbar;
