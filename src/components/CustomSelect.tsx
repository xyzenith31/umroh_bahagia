import React, { useState, useEffect, useRef } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

// Tipe props yang dibutuhkan komponen ini
interface CustomSelectProps {
  options: string[];
  placeholder: string;
  // Fungsi untuk mengirim value yang dipilih ke parent
  onChange: (value: string) => void; 
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  options, 
  placeholder, 
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  
  // Ref untuk deteksi klik di luar komponen
  const selectRef = useRef<HTMLDivElement>(null);

  // Efek untuk menutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    // Tambahkan listener
    document.addEventListener('mousedown', handleClickOutside);
    // Hapus listener saat komponen unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fungsi saat salah satu opsi dipilih
  const handleSelect = (option: string) => {
    setSelectedValue(option); // Update tampilan
    onChange(option); // Kirim data ke parent (FormPendaftaran)
    setIsOpen(false); // Tutup dropdown
  };

  // Varian animasi untuk dropdown menu
  const menuVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    // Wrapper utama, pakai ref
    <div className="relative" ref={selectRef}>
      
      {/* 1. Tombol "Select" (yang terlihat) */}
      <button
        type="button" // Penting agar tidak submit form
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full px-4 py-3 border border-gray-300 rounded-lg bg-white
          text-left flex justify-between items-center
          focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink
          transition duration-300
        "
      >
        {/* Teks placeholder atau value yang dipilih */}
        <span className={selectedValue ? 'text-gray-900' : 'text-gray-500'}>
          {selectedValue || placeholder}
        </span>
        
        {/* Ikon panah yang bisa berputar */}
        <HiChevronDown 
          className={`
            w-5 h-5 text-gray-400 
            transition-transform duration-300
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `} 
        />
      </button>

      {/* 2. Dropdown Menu (yang muncul/hilang) */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="
              absolute z-10 w-full mt-1 bg-white 
              shadow-lg rounded-lg overflow-hidden 
              border border-gray-200
            "
          >
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleSelect(option)}
                className="
                  px-4 py-3 text-gray-800 
                  hover:bg-brand-pink-light hover:text-brand-pink-dark 
                  cursor-pointer transition-colors
                "
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomSelect;
