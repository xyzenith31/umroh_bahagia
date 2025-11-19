import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiZoomIn, HiX, HiShare, HiLightningBolt } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

import flyer1 from '../assets/heroimage/1.png';
import flyer2 from '../assets/heroimage/2.jpg';
import flyer3 from '../assets/heroimage/3.jpg';

const PROMOS = [
  {
    id: 1,
    src: flyer1,
    title: "Paket Super Hemat 24 Juta",
    desc: "Promo gila-gilaan akhir tahun! Fasilitas bintang 4 harga kaki lima. Seat tersisa sedikit lagi.",
    price: "24 Jt",
    originalPrice: "28 Jt",
    deadline: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
    color: "from-rose-500 to-orange-500",
    badge: "🔥 TERLARIS"
  },
  {
    id: 2,
    src: flyer2,
    title: "Spesial Umroh Ramadhan",
    desc: "Rasakan kenikmatan tarawih di Masjidil Haram. Paket full Ramadhan & Lailatul Qadar.",
    price: "32 Jt",
    originalPrice: "35 Jt",
    deadline: new Date(Date.now() + 12 * 24 * 60 * 60 * 1000),
    color: "from-purple-600 to-indigo-600",
    badge: "🌙 RAMADHAN"
  },
  {
    id: 3,
    src: flyer3,
    title: "Paket VIP Keluarga",
    desc: "Hotel 0 Meter dari masjid. Sangat cocok untuk membawa orang tua dan balita.",
    price: "38 Jt",
    originalPrice: "42 Jt",
    deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    color: "from-emerald-500 to-teal-500",
    badge: "⭐ VIP CLASS"
  },
  {
    id: 4,
    src: flyer1,
    title: "Umroh Plus Turki 12 Hari",
    desc: "Ibadah sekaligus wisata sejarah di Istanbul & Cappadocia. Pengalaman tak terlupakan.",
    price: "35 Jt",
    originalPrice: "39 Jt",
    deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    color: "from-blue-500 to-cyan-500",
    badge: "✈️ PLUS WISATA"
  },
  {
    id: 5,
    src: flyer2,
    title: "Jumat Berkah: Diskon 2 Juta",
    desc: "Khusus pendaftaran di hari Jumat ini. Dapatkan potongan langsung tanpa syarat.",
    price: "26 Jt",
    originalPrice: "28 Jt",
    deadline: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), 
    color: "from-green-500 to-lime-500",
    badge: "💰 HEMAT"
  },
  {
    id: 6,
    src: flyer3,
    title: "Paket Umroh Syawal",
    desc: "Rayakan kemenangan Idul Fitri di Tanah Suci bersama keluarga tercinta.",
    price: "29 Jt",
    originalPrice: "33 Jt",
    deadline: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000),
    color: "from-amber-500 to-yellow-500",
    badge: "🕌 SYAWAL"
  },
  {
    id: 7,
    src: flyer1,
    title: "Umroh Backpacker Hemat",
    desc: "Solusi untuk anak muda yang ingin umroh dengan budget minimalis namun tetap nyaman.",
    price: "22 Jt",
    originalPrice: "25 Jt",
    deadline: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    color: "from-slate-600 to-gray-600",
    badge: "🎒 BACKPACKER"
  },
  {
    id: 8,
    src: flyer2,
    title: "Paket Private Group",
    desc: "Berangkat kapan saja sesuai keinginan grup Anda (Min. 10 Orang). Eksklusif!",
    price: "Call",
    originalPrice: "",
    deadline: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
    color: "from-pink-600 to-rose-600",
    badge: "👑 PRIVATE"
  },
  {
    id: 9,
    src: flyer3,
    title: "Umroh Akhir Tahun 2025",
    desc: "Tutup tahun dengan bermuhasabah di Baitullah. Booking seat dari sekarang.",
    price: "30 Jt",
    originalPrice: "34 Jt",
    deadline: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
    color: "from-indigo-500 to-blue-600",
    badge: "📅 AKHIR TAHUN"
  },
  {
    id: 10,
    src: flyer1,
    title: "Paket Arbain Madinah",
    desc: "Mengejar shalat 40 waktu berturut-turut di Masjid Nabawi. Keutamaan luar biasa.",
    price: "33 Jt",
    originalPrice: "36 Jt",
    deadline: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000),
    color: "from-teal-600 to-green-600",
    badge: "🕋 ARBAIN"
  }
];

const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = +targetDate - +new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-2 md:gap-3 mt-4 mb-6 justify-center lg:justify-start flex-wrap">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center bg-gray-50 rounded-lg p-2 min-w-[55px] border border-gray-200 shadow-sm">
          <span className="text-lg md:text-xl font-bold text-brand-pink-dark font-mono">
            {String(value).padStart(2, '0')}
          </span>
          <span className="text-[9px] md:text-[10px] uppercase text-gray-500 font-semibold tracking-wider">{unit}</span>
        </div>
      ))}
    </div>
  );
};

const PromoFlyer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  
  const handleShare = (promo: typeof PROMOS[0]) => {
    const text = `Assalamu'alaikum, saya tertarik dengan promo "${promo.title}" seharga ${promo.price}. Info lengkapnya bagaimana?`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev === PROMOS.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? PROMOS.length - 1 : prev - 1));

  const onDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (info.offset.x < -50) nextSlide();
    else if (info.offset.x > 50) prevSlide();
  };

  useEffect(() => {
    if (isPaused || isZoomed) return;
    const timer = setInterval(nextSlide, 5000); 
    return () => clearInterval(timer);
  }, [currentIndex, isPaused, isZoomed]);

  const currentPromo = PROMOS[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-pink-light/20 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-red-600 border border-red-200 mb-4 shadow-sm animate-pulse">
              <HiLightningBolt className="w-4 h-4" />
              <span className="text-xs md:text-sm font-bold tracking-wide">HOT PROMO ({currentIndex + 1}/{PROMOS.length})</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-3">
              Penawaran Terbaik
            </h2>
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
              Geser untuk melihat {PROMOS.length} paket promo spesial yang tersedia saat ini.
            </p>
          </div>
        </ScrollReveal>

        <div 
          className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 max-w-6xl mx-auto"
          onMouseEnter={() => setIsPaused(true)} 
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="w-full lg:w-6/12 order-2 lg:order-1 text-center lg:text-left min-h-[320px]">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-3">
                  <span className={`text-white px-3 py-1 rounded-md text-xs font-bold shadow-sm bg-gradient-to-r ${currentPromo.color}`}>
                    {currentPromo.badge}
                  </span>
                  {currentPromo.originalPrice && (
                    <span className="bg-red-100 text-red-600 px-3 py-1 rounded-md text-xs font-bold border border-red-200">
                      HEMAT JUTAAN
                    </span>
                  )}
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 leading-tight">
                  {currentPromo.title}
                </h3>
                
                <div className="flex items-end justify-center lg:justify-start gap-3 mb-4">
                  {currentPromo.originalPrice && (
                    <span className="text-gray-400 text-lg line-through decoration-red-500 decoration-2 mb-1">
                      {currentPromo.originalPrice}
                    </span>
                  )}
                  <span className={`text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${currentPromo.color}`}>
                    {currentPromo.price}
                  </span>
                </div>

                <p className="text-gray-600 text-sm md:text-lg mb-4 leading-relaxed">
                  {currentPromo.desc}
                </p>

                <div className="text-xs text-gray-400 font-medium uppercase tracking-wide">Sisa Waktu Promo:</div>
                <Countdown targetDate={currentPromo.deadline} />

                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <a 
                    href={`https://wa.me/6281234567890?text=${encodeURIComponent(`Halo, saya mau booking: ${currentPromo.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex justify-center items-center gap-2 px-8 py-3 rounded-full text-white font-bold shadow-lg
                      bg-gradient-to-r ${currentPromo.color}
                      hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300
                    `}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    Ambil Promo Ini
                  </a>
                  
                  <button
                    onClick={() => handleShare(currentPromo)}
                    className="
                      inline-flex justify-center items-center gap-2 px-8 py-3 rounded-full 
                      bg-white text-gray-700 border border-gray-200 font-semibold shadow-sm
                      hover:bg-gray-50 hover:text-brand-pink hover:border-brand-pink transition-all duration-300
                    "
                  >
                    <HiShare className="w-5 h-5" />
                    Bagikan
                  </button>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          <div className="w-full lg:w-5/12 order-1 lg:order-2 relative perspective-1000">
            <div className="relative w-full max-w-sm mx-auto aspect-[4/5]">
              <AnimatePresence initial={false} custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={1}
                  onDragEnd={onDragEnd}
                  initial={{ opacity: 0, scale: 0.85, x: 100 }}
                  animate={{ opacity: 1, scale: 1, x: 0, zIndex: 2 }}
                  exit={{ opacity: 0, scale: 0.85, x: -100, zIndex: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-[6px] border-white bg-white">
                    <img
                      src={currentPromo.src}
                      alt={currentPromo.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <div 
                      onClick={() => setIsZoomed(true)}
                      className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center group cursor-zoom-in"
                    >
                       <div className="bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300 text-brand-pink">
                          <HiZoomIn className="w-6 h-6" />
                       </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              <button onClick={prevSlide} className="absolute -left-5 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-brand-pink hover:scale-110 transition z-20">
                <HiChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextSlide} className="absolute -right-5 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg text-gray-600 hover:text-brand-pink hover:scale-110 transition z-20">
                <HiChevronRight className="w-6 h-6" />
              </button>

              <div className="absolute -bottom-12 left-0 right-0 overflow-x-auto hide-scrollbar py-2">
                 <div className="flex justify-center gap-2 px-4 w-max mx-auto">
                    {PROMOS.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`
                          h-2 rounded-full transition-all duration-300 flex-shrink-0
                          ${currentIndex === idx ? 'w-8 bg-brand-pink' : 'w-2 bg-gray-300 hover:bg-gray-400'}
                        `}
                        aria-label={`Go to promo ${idx + 1}`}
                      />
                    ))}
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4"
            onClick={() => setIsZoomed(false)}
          >
            <button className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
              <HiX className="w-8 h-8" />
            </button>
            <motion.img
              src={currentPromo.src}
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PromoFlyer;