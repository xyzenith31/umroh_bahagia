import React from 'react';
import { motion } from 'framer-motion';

// Terima children (konten) dan delay (opsional)
const ScrollReveal = ({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode; 
  delay?: number;
}) => {
  return (
    <motion.div
      // Animasi Awal (Hilang)
      initial={{ opacity: 0, y: 50 }}
      
      // Animasi Saat Muncul di Layar
      whileInView={{ opacity: 1, y: 0 }}
      
      // Pengaturan Transisi
      transition={{ 
        duration: 0.6, 
        ease: 'easeOut', 
        delay: delay 
      }}
      
      // Pengaturan Viewport
      // "once: true" -> Animasi hanya jalan sekali
      // "amount: 0.3" -> Animasi jalan saat 30% elemen terlihat
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;