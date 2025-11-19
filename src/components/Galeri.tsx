import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiChevronLeft, HiChevronRight, HiZoomIn } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

const imagesGlob = import.meta.glob('../assets/galeri/*.{jpg,jpeg,png,webp}', { 
  eager: true, 
  query: '?url', 
  import: 'default' 
});
const rawImages: string[] = Object.values(imagesGlob).map((url) => url as string);

const CATEGORIES = ["Semua", "Makkah", "Madinah", "Keberangkatan", "Hotel", "Jamaah"];

const Galeri: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [visibleCount, setVisibleCount] = useState(8); 
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredImages = useMemo(() => {
    return rawImages.map((src, index) => {
      const categoryIndex = (index % (CATEGORIES.length - 1)) + 1;
      return {
        src,
        category: CATEGORIES[categoryIndex]
      };
    }).filter(item => activeCategory === "Semua" || item.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    setVisibleCount(8);
  }, [activeCategory]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const showNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null || prev === visibleImages.length - 1 ? 0 : prev + 1));
  }, [visibleImages.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null || prev === 0 ? visibleImages.length - 1 : prev - 1));
  }, [visibleImages.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, showNext, showPrev]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedIndex]);

  return (
    <section id="galeri" className="py-16 md:py-24 bg-slate-50 overflow-hidden min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              Galeri Dokumentasi
            </h2>
            <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
              Momen kebersamaan dan kekhusyukan ibadah para jamaah kami.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="relative mb-8">
            <div className="flex overflow-x-auto pb-4 gap-2 md:gap-4 md:justify-center hide-scrollbar px-1 snap-x">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    whitespace-nowrap px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 snap-center flex-shrink-0
                    ${activeCategory === cat 
                      ? 'bg-brand-pink text-white shadow-md transform scale-105' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-brand-pink hover:text-brand-pink'
                    }
                  `}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <motion.div 
          layout 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
        >
          <AnimatePresence mode='popLayout'>
            {visibleImages.map((item, index) => (
              <motion.div
                layout
                key={item.src} 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-square rounded-lg md:rounded-xl overflow-hidden bg-gray-200 shadow-sm cursor-pointer tap-highlight-transparent"
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={item.src}
                  alt="Dokumentasi Umroh"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
                  loading="lazy"
                />
                
                <div className="hidden md:flex absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-col items-center justify-center">
                  <span className="bg-brand-pink text-white text-xs px-3 py-1 rounded-full mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    {item.category}
                  </span>
                  <HiZoomIn className="w-8 h-8 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform delay-75" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {visibleImages.length < filteredImages.length && (
          <div className="mt-10 md:mt-14 text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 8)}
              className="
                inline-flex items-center justify-center 
                px-6 py-3 md:px-8 md:py-3 
                border border-brand-pink text-brand-pink 
                text-sm md:text-base font-bold rounded-full 
                bg-white shadow-sm hover:bg-brand-pink hover:text-white 
                transition-all duration-300 active:scale-95
              "
            >
              Lihat Foto Lainnya
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center touch-none" // touch-none mencegah scroll body di HP
            onClick={() => setSelectedIndex(null)}
          >
            <div className="absolute top-0 left-0 w-full p-4 bg-gradient-to-b from-black/60 to-transparent z-50 flex justify-between items-start pointer-events-none">
               <div className="pointer-events-auto">
                  <span className="text-white/90 text-xs md:text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                    {visibleImages[selectedIndex].category}
                  </span>
               </div>
               <button 
                 className="pointer-events-auto p-2 -mt-2 -mr-2 text-white/80 hover:text-white bg-white/10 rounded-full active:bg-white/20 transition" 
                 onClick={() => setSelectedIndex(null)}
               >
                 <HiX className="w-8 h-8" />
               </button>
            </div>

            <button 
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition z-50 active:scale-90" 
              onClick={(e) => {e.stopPropagation(); showPrev();}}
            >
              <HiChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <button 
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition z-50 active:scale-90" 
              onClick={(e) => {e.stopPropagation(); showNext();}}
            >
              <HiChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            <div className="w-full h-full flex items-center justify-center p-2 md:p-8" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={selectedIndex}
                src={visibleImages[selectedIndex].src}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="max-h-[80vh] md:max-h-[90vh] max-w-full rounded-md shadow-2xl object-contain select-none"
                draggable={false}
              />
            </div>

            <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none">
              <span className="text-white/60 text-xs md:text-sm bg-black/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
                 {selectedIndex + 1} dari {visibleImages.length}
              </span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Galeri;