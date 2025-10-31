import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      className={className} 
      
      initial={{ opacity: 0, y: 50 }}
      
      whileInView={{ opacity: 1, y: 0 }}
      
      transition={{ 
        duration: 0.6, 
        ease: 'easeOut', 
        delay: delay 
      }}
      
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;