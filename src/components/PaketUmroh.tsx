import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlane, FaHotel, FaStar, FaCheck, FaWhatsapp, FaFileInvoiceDollar } from 'react-icons/fa';
import { HiZoomIn, HiX } from 'react-icons/hi';
import ScrollReveal from './ScrollReveal';

import paketGambarPlus from '../assets/heroimage/2.jpg';
import paketGambarKeluarga from '../assets/heroimage/3.jpg';

interface PaketUmrohProps {
  onOpenModal: () => void;
}

const PACKAGES = [
  {
    id: 1,
    title: "Paket Umroh Plus Turki",
    duration: "12 Hari",
    price: "32.5 Juta",
    image: paketGambarPlus,
    hotel: "Bintang 5 ⭐⭐⭐⭐⭐",
    pesawat: "Turkish Airlines",
    features: [
      "Hotel Mekkah: Zamzam Tower",
      "Hotel Madinah: Ruve Al Madinah",
      "City Tour Istanbul & Bursa",
      "Makan 3x Sehari (Fullboard)",
      "Handling & Perlengkapan Premium",
      "Muthawif Berpengalaman"
    ],
    isBestSeller: true,
    tag: "PLUS WISATA"
  },
  {
    id: 2,
    title: "Paket Umroh Reguler",
    duration: "16 Hari",
    price: "24.5 Juta",
    image: paketGambarKeluarga,
    hotel: "Bintang 4 ⭐⭐⭐⭐",
    pesawat: "Lion Air Premium",
    features: [
      "Hotel Mekkah: Snood Ajyad",
      "Hotel Madinah: Mirage Al Salam",
      "Umroh 3x Miqat",
      "City Tour Mekkah & Madinah",
      "Gratis Air Zam-zam 5L",
      "Bus AC Executive Terbaru"
    ],
    isBestSeller: false,
    tag: "PALING HEMAT"
  }
];

const PaketUmroh: React.FC<PaketUmrohProps> = ({ onOpenModal }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="paket" className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="text-brand-pink font-bold tracking-wider text-xs uppercase bg-brand-pink/10 px-3 py-1.5 rounded-full">
              Pilihan Terbaik
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-3 mb-4">
              Paket Umroh Unggulan
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
              Paket perjalanan ibadah dengan fasilitas terbaik dan harga transparan.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {PACKAGES.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={index * 0.2}>
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 flex flex-col h-full relative group hover:shadow-xl transition-all duration-300"
              >
                {pkg.isBestSeller && (
                  <div className="absolute top-3 left-3 z-20 bg-yellow-400 text-yellow-900 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm flex items-center gap-1">
                    <FaStar className="w-3 h-3" /> BEST SELLER
                  </div>
                )}

                <div 
                  className="relative h-[280px] md:h-[320px] bg-gray-50 cursor-zoom-in overflow-hidden group-image"
                  onClick={() => setSelectedImage(pkg.image)}
                >
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="bg-white/90 p-2 rounded-full text-brand-pink opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                      <HiZoomIn className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="absolute bottom-3 right-3 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-brand-pink-dark text-[10px] font-bold px-3 py-1 rounded-md shadow-sm border border-brand-pink/20">
                      {pkg.tag}
                    </span>
                  </div>
                </div>

                <div className="p-5 md:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 leading-snug">{pkg.title}</h3>
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-blue-50 p-3 rounded-xl border border-blue-100">
                       <div className="flex items-center gap-2 mb-1">
                         <FaPlane className="text-blue-500 text-sm" />
                         <span className="text-[10px] text-blue-600 font-bold uppercase">Maskapai</span>
                       </div>
                       <p className="text-xs font-semibold text-gray-700 line-clamp-1">{pkg.pesawat}</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded-xl border border-yellow-100">
                       <div className="flex items-center gap-2 mb-1">
                         <FaHotel className="text-yellow-500 text-sm" />
                         <span className="text-[10px] text-yellow-600 font-bold uppercase">Hotel</span>
                       </div>
                       <p className="text-xs font-semibold text-gray-700 line-clamp-1">{pkg.hotel}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6 flex-1">
                    {pkg.features.slice(0, 4).map((feature, idx) => ( 
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <FaCheck className="text-green-500 mt-0.5 w-3.5 h-3.5 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </li>
                    ))}
                    {pkg.features.length > 4 && (
                      <li className="text-xs text-gray-400 italic pl-6">+ Dan fasilitas lainnya</li>
                    )}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-end">
                        <div className="text-gray-500 text-xs">Mulai dari</div>
                        <div className="text-2xl font-extrabold text-brand-pink-dark">{pkg.price}</div>
                      </div>
                      
                      <a 
                        href={`https://wa.me/6281234567890?text=Saya%20tertarik%20booking%20${encodeURIComponent(pkg.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-brand-pink hover:bg-brand-pink-dark text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-brand-pink/20 flex items-center justify-center gap-2 text-sm hover:scale-[1.02]"
                      >
                        <FaWhatsapp className="text-lg" />
                        Booking via WhatsApp
                      </a>
                    </div>
                  </div>

                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center">
            <button
              onClick={onOpenModal}
              className="
                inline-flex items-center gap-2
                text-gray-600 border border-gray-300
                px-6 py-3 rounded-full font-medium text-sm
                hover:border-brand-pink hover:text-brand-pink hover:bg-white hover:shadow-md
                transition-all duration-300 bg-transparent
              "
            >
              <FaFileInvoiceDollar className="text-lg" />
              Lihat Jadwal & Pricelist Lengkap
            </button>
          </div>
        </ScrollReveal>

      </div>
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 p-2 rounded-full transition"
              onClick={() => setSelectedImage(null)}
            >
              <HiX className="w-6 h-6" />
            </button>

            <motion.img
              src={selectedImage}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain bg-white"
              onClick={(e) => e.stopPropagation()} 
            />
            
            <div className="absolute bottom-8 left-0 w-full text-center pointer-events-none">
              <span className="bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-md">
                Tap di luar gambar untuk menutup
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default PaketUmroh;