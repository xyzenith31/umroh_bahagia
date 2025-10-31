// src/components/ScrollReveal.tsx
import React from 'react';
import { motion } from 'framer-motion';

// Terima children, delay, dan className (BARU)
const ScrollReveal = ({ 
  children, 
  delay = 0,
  className = "" // <-- 1. TAMBAHKAN INI
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string; // <-- 2. TAMBAHKAN TIPE PROP INI
}) => {
  return (
    <motion.div
      className={className} // <-- 3. GUNAKAN PROP className DI SINI
      
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
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;