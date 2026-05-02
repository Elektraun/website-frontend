import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaStrava, FaWhatsapp } from "react-icons/fa";
import logo from "../../assets/logo.png";
import WhatsAppModal from "../../modals/WhatsAppModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-[#050609] border-t border-white/5 pt-16 pb-8 text-gray-400 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Elektraun Logo" className="h-10 w-10 rounded shadow-lg" />
              <span className="text-xl font-light tracking-[0.2em] uppercase text-white">
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
              className="hover:text-red-500 transition-colors duration-300"
            >
              <FaStrava size={24} />
            </a>
            <a 
              href="https://www.instagram.com/elektraun_runclub?igsh=cjI3NjkxdWg5azMy" 
              target="_blank" rel="noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/company/elektraun" // Replace with your actual LinkedIn
              target="_blank" rel="noreferrer"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp size={24} />
            </button>
          </div>

          {/* Standards Column */}
          <div className="flex flex-col items-center md:items-end">
             <div className="text-right">
                <p className="text-xs font-bold tracking-[0.3em] text-white uppercase mb-1">Current Standard</p>
                <p className="text-2xl font-black text-cyan-400 uppercase">11KM MINIMUM</p>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] uppercase font-bold">
          <p>© {new Date().getFullYear()} Elektraun Running Club</p>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-white">The Ethos</a>
            <a href="#gallery" className="hover:text-white">The Archive</a>
            <p className="text-red-600">No Excuses.</p>
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