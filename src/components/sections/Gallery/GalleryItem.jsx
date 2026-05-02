import { motion } from "framer-motion";

const GalleryItem = ({ src }) => {
  return (
    <motion.div
      className="relative overflow-hidden group h-72 sm:h-80 md:h-96 rounded-lg"
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 25px rgba(0,174,255,0.6)",
      }}
    >
      <img
        src={src}
        alt="Elektraun run"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </motion.div>
  );
};

export default GalleryItem;