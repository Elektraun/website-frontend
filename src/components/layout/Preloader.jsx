import { motion } from "framer-motion";
import video from "../../assets/video.mp4";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a2a47]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <video
        className="w-full h-full object-contain sm:object-cover"
        autoPlay
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute bottom-8 text-gray-200 text-xs sm:text-sm tracking-widest animate-pulse">
        LOADING ELEKTRAUN...
      </div>
    </motion.div>
  );
};

export default Preloader;