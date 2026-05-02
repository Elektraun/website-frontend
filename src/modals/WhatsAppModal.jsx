import { motion, AnimatePresence } from "framer-motion";
import elektraun_general_wa from "../assets/images/elektraun_general_wa.jpeg"; 

const WhatsAppModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />
          
          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative bg-[#111625] border border-white/10 p-8 md:p-12 rounded-3xl max-w-md w-full text-center shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-gray-500 hover:text-white text-xl">✕</button>
            
            <h3 className="text-2xl font-serif italic text-white mb-2">Join Elektraun</h3>
            <p className="text-gray-400 text-sm mb-8">Scan to join the Elektraun WhatsApp group and start your 11KM journey.</p>
            
            <div className="bg-white p-4 rounded-2xl inline-block mb-8 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
              <img src={elektraun_general_wa} alt="WhatsApp QR" className="w-48 h-48 md:w-64 md:h-64 object-contain" />
            </div>

            <a 
              href="https://chat.whatsapp.com/BZTQnBHfZBt3kXC8PUfkx3" 
              target="_blank" rel="noreferrer"
              className="block w-full py-4 bg-cyan-400 text-[#050609] font-black uppercase tracking-widest rounded-xl hover:bg-white transition-colors"
            >
              Open Group Link
            </a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppModal;