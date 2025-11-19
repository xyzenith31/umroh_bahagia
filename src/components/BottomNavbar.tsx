import React, { useState, useEffect } from 'react';
import { HiHome, HiTicket, HiPhotograph, HiChatAlt2 } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BottomNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'Beranda', icon: HiHome },
    { id: 'paket', label: 'Paket', icon: HiTicket, hasBadge: true }, 
    { id: 'galeri', label: 'Galeri', icon: HiPhotograph },
    { id: 'kontak', label: 'Bantuan', icon: HiChatAlt2 },
  ];

  const leftItems = navItems.slice(0, 2);
  const rightItems = navItems.slice(2, 4);

  const waLink = "https://wa.me/6281234567890?text=Halo%20UmrohBahagia,%20saya%20ingin%20tanya%20paket%20promo...";

  useEffect(() => {
    const sections = navItems
      .map(link => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);
    
    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { root: null, threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50"
    >
      <nav className="
        relative w-full h-[80px]
        bg-brand-pink text-white
        rounded-t-[30px] 
        shadow-[0_-4px_20px_rgba(236,72,153,0.4)]
        flex justify-between items-center 
        px-2
      ">
        <div className="flex-1 flex justify-around items-center h-full pt-2">
          {leftItems.map((item) => (
            <NavItem 
              key={item.id} 
              item={item} 
              isActive={activeSection === item.id} 
              onClick={() => setActiveSection(item.id)}
            />
          ))}
        </div>

        <div className="relative -top-8 mx-2">
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-brand-pink rounded-full -z-10"></div>
          
          <motion.a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="
              flex items-center justify-center
              w-16 h-16 rounded-full
              bg-white text-brand-pink
              shadow-xl shadow-black/10
              border-[5px] border-brand-pink-light/20
              relative z-20
            "
          >
            <FaWhatsapp className="w-8 h-8" />
          </motion.a>
          
          <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-white/90 whitespace-nowrap">
            Chat CS
          </span>
        </div>

        <div className="flex-1 flex justify-around items-center h-full pt-2">
          {rightItems.map((item) => (
            <NavItem 
              key={item.id} 
              item={item} 
              isActive={activeSection === item.id} 
              onClick={() => setActiveSection(item.id)}
            />
          ))}
        </div>

      </nav>
      <div className="w-full h-4 bg-brand-pink"></div>
    </motion.div>
  );
};

const NavItem = ({ item, isActive, onClick }: { item: any, isActive: boolean, onClick: () => void }) => {
  return (
    <a
      href={`#${item.id}`}
      onClick={onClick}
      className="relative flex flex-col items-center justify-center w-full h-full group"
    >
      {isActive && (
        <motion.div
          layoutId="topLine"
          className="absolute top-0 w-8 h-1 bg-white rounded-b-full shadow-lg"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}

      <motion.div
        whileTap={{ scale: 0.8 }}
        className={`
          flex flex-col items-center transition-all duration-300
          ${isActive ? 'opacity-100 translate-y-0' : 'opacity-60 hover:opacity-80 translate-y-1'}
        `}
      >
        <div className="relative mb-1">
          <item.icon className={`w-6 h-6 transition-transform ${isActive ? 'scale-110' : ''}`} />
          {item.hasBadge && !isActive && (
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-yellow-400 border border-brand-pink"></span>
            </span>
          )}
        </div>

        <span className={`text-[10px] font-medium tracking-wide ${isActive ? 'font-bold' : ''}`}>
          {item.label}
        </span>
      </motion.div>
    </a>
  );
};

export default BottomNavbar;  