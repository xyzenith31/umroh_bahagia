// src/components/ScrollProgressBar.tsx
import React from 'react';
import { motion, useScroll } from 'framer-motion';

const ScrollProgressBar: React.FC = () => {
  // Hook dari framer-motion untuk mendeteksi progress scroll (nilai 0 sampai 1)
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-brand-pink-dark z-50"
      style={{ 
        scaleX: scrollYProgress, // Lebar div akan mengikuti progress scroll
        transformOrigin: "0%" // Mulai animasi dari kiri
      }}
    />
  );
};

export default ScrollProgressBar;