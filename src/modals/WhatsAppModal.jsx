import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import elektraunGeneralWhatsApp from "../assets/images/elektraun_general_wa.jpeg";

const GROUP_URL = "https://chat.whatsapp.com/BZTQnBHfZBt3kXC8PUfkx3";

const WhatsAppModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-end justify-center p-3 sm:items-center sm:p-6" role="dialog" aria-modal="true" aria-labelledby="whatsapp-modal-title">
          <motion.button type="button" aria-label="Close join dialog" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 cursor-default bg-[#071735]/75 backdrop-blur-sm" />

          <motion.div initial={{ opacity: 0, y: 40, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.98 }} transition={{ type: "spring", stiffness: 280, damping: 28 }} className="relative grid max-h-[calc(100dvh-1.5rem)] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-[0_30px_100px_rgba(4,15,40,.45)] sm:max-h-[calc(100dvh-3rem)] md:grid-cols-[0.92fr_1.08fr] md:overflow-hidden">
            <button type="button" onClick={onClose} aria-label="Close join dialog" className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#0b2355]/10 bg-white text-2xl leading-none text-[#0b2355] shadow-sm transition-colors hover:bg-[#f4f7ff]">×</button>

            <div className="relative min-h-52 overflow-hidden bg-[#20ad65] sm:min-h-64 md:min-h-[520px]">
              <img src={elektraunGeneralWhatsApp} alt="QR code for the Elektraun WhatsApp group" className="absolute inset-0 h-full w-full object-cover object-center" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#20ad65]/70 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-6 sm:p-9 md:p-10">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#20ad65]/10 text-[#20ad65]"><FaWhatsapp size={26} /></div>
              <p className="mb-2 text-[10px] font-black uppercase tracking-[0.26em] text-[#1257ed]">Elektraun community</p>
              <h2 id="whatsapp-modal-title" className="text-3xl font-black uppercase leading-tight tracking-tight text-[#0b2355] sm:text-4xl">Run with us.</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#38517d]">Scan the QR code with your phone camera, or open the group directly to join the Elektraun running community.</p>

              <div className="mt-7 space-y-3">
                <a href={GROUP_URL} target="_blank" rel="noreferrer" className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#20ad65] px-6 py-4 text-sm font-black uppercase tracking-wider text-white shadow-[0_10px_25px_rgba(32,173,101,.22)] transition-all hover:-translate-y-0.5 hover:bg-[#188c51]">
                  <FaWhatsapp size={20} /> Open WhatsApp group
                </a>
                <button type="button" onClick={onClose} className="w-full rounded-xl border border-[#0b2355]/10 px-6 py-3 text-xs font-black uppercase tracking-wider text-[#0b2355]/55 transition-colors hover:border-[#0b2355]/25 hover:text-[#0b2355]">Maybe later</button>
              </div>

              <p className="mt-6 text-[10px] leading-relaxed text-[#0b2355]/40">WhatsApp will open in a new tab. Group admission and participation are subject to the community guidelines.</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;
