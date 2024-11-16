import { motion } from 'framer-motion';

import { RiArrowDownDoubleLine } from "react-icons/ri";


const AnimatedArrow = () => {
  return (
    <motion.div
      className="flex justify-center items-center"
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 1.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
    >
      <RiArrowDownDoubleLine size={54} className='text-gray-400'/>
    </motion.div>
  );
};

export default AnimatedArrow;