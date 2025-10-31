import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-brand-pink-dark z-50"
      style={{ 
        scaleX: scrollYProgress,
        transformOrigin: "0%"
      }}
    />
  );
};

export default ScrollProgressBar;