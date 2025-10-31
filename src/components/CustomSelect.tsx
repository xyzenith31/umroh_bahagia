import React, { useState, useEffect, useRef } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

interface CustomSelectProps {
  options: string[];
  placeholder: string;
  onChange: (value: string) => void; 
}

const CustomSelect: React.FC<CustomSelectProps> = ({ 
  options, 
  placeholder, 
  onChange 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelectedValue(option);
    onChange(option);
    setIsOpen(false);
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="relative" ref={selectRef}>
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="
          w-full px-4 py-3 border border-gray-300 rounded-lg bg-white
          text-left flex justify-between items-center
          focus:outline-none focus:ring-2 focus:ring-brand-pink focus:border-brand-pink
          transition duration-300
        "
      >
        <span className={selectedValue ? 'text-gray-900' : 'text-gray-500'}>
          {selectedValue || placeholder}
        </span>
        
        <HiChevronDown 
          className={`
            w-5 h-5 text-gray-400 
            transition-transform duration-300
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `} 
        />
      </button>

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
