import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaStrava, FaWhatsapp, FaYoutube } from "react-icons/fa";
import logo from "../../assets/logo.png";
import WhatsAppModal from "../../modals/WhatsAppModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="border-t border-[#0b2355]/10 bg-[#f4f7ff] pb-8 pt-16 font-sans text-[#38517d]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Elektraun Logo" className="h-10 w-10 rounded shadow-lg" />
              <span className="text-xl font-light tracking-[0.2em] uppercase text-[#0b2355]">
                ELEKTRAUN
              </span>
            </div>
            <p className="text-xs tracking-widest uppercase opacity-60">Forged in Fire. Fueled by Distance.</p>
          </div>

          {/* Social Column */}
          <div className="flex justify-center gap-8">
            <a 
              href="https://www.strava.com/clubs/1407085" 
              target="_blank" rel="noreferrer"
              className="transition-colors duration-300 hover:text-[#ff1c29]"
            >
              <FaStrava size={24} />
            </a>
            <a 
              href="https://www.instagram.com/elektraun_runclub?igsh=cjI3NjkxdWg5azMy" 
              target="_blank" rel="noreferrer"
              className="transition-colors duration-300 hover:text-[#1257ed]"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/elektraun" // Replace with your actual LinkedIn
              target="_blank" rel="noreferrer"
              className="transition-colors duration-300 hover:text-[#1257ed]"
            >
              <FaLinkedinIn size={24} />
            </a>
            <a
              href="https://www.youtube.com/@Elektraunrunclub"
              target="_blank" rel="noreferrer"
              aria-label="Elektraun Run Club on YouTube"
              className="transition-colors duration-300 hover:text-[#ff1c29]"
            >
              <FaYoutube size={26} />
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="transition-colors duration-300 hover:text-[#64ee00]"
            >
              <FaWhatsapp size={24} />
            </button>
          </div>

          {/* Standards Column */}
          <div className="flex flex-col items-center md:items-end">
             <div className="text-right">
                <p className="mb-1 text-xs font-bold uppercase tracking-[0.3em] text-[#0b2355]">Current Standard</p>
                <p className="text-2xl font-black uppercase text-[#1257ed]">11KM MINIMUM</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#0b2355]/10 pt-8 text-[10px] font-bold uppercase tracking-[0.2em] md:flex-row">
          <p>© {new Date().getFullYear()} Elektraun Running Club</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            <a href="/about" className="hover:text-[#1257ed]">About</a>
            <a href="/project-charged" className="hover:text-[#ff1c29]">Project Charged</a>
            <a href="/beyond-11km" className="hover:text-[#ff1c29]">Beyond 11KM</a>
            <a href="/about#gallery" className="hover:text-[#1257ed]">The Archive</a>
            <p className="text-[#ff1c29]">No Excuses.</p>
          </div>
        </div>
      </div>

      {/* Shared WhatsApp Modal */}
      <WhatsAppModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </footer>
  );
};

export default Footer;
