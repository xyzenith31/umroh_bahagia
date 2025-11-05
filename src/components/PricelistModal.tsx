import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX } from 'react-icons/hi';

import pricelistImage from '../assets/pricelist-lengkap.jpg';

interface PricelistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PricelistModal: React.FC<PricelistModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="
              fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm
            "
            onClick={onClose} 
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="
              fixed inset-0 z-[70] m-auto
              w-full max-w-3xl h-full max-h-[90vh]
              flex flex-col
            "
          >
            <button
              onClick={onClose}
              className="
                absolute -top-4 -right-2 z-10 p-1
                bg-white rounded-full text-gray-700 hover:text-brand-pink
                shadow-lg transition-all
              "
              aria-label="Tutup"
            >
              <HiX className="w-6 h-6" />
            </button>
            
            <div className="w-full h-full bg-white rounded-lg shadow-xl overflow-y-auto">
              <img 
                src={pricelistImage} 
                alt="Pricelist Lengkap Umroh" 
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PricelistModal;