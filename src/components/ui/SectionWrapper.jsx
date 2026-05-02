import { motion } from "framer-motion";
import { sectionAnimation } from "../../constants/animations";

const SectionWrapper = ({ children, id, style }) => {
  return (
    <motion.section
      id={id}
      style={style}
      variants={sectionAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-32"
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;