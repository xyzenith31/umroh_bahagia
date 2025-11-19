import React from 'react';
import { 
  FaUserCheck, FaStar, FaShieldAlt, 
  FaCheckCircle, FaTimesCircle, FaCrown,
  FaPlaneDeparture, FaHotel, FaUtensils,
  FaKaaba, FaBus, FaHandHoldingHeart
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal'; 

const Keunggulan: React.FC = () => {
  const features = [
    {
      icon: <FaUserCheck className="w-6 h-6 text-white" />,
      title: 'Pembimbing Profesional',
      description: 'Ditemani muthawif bersertifikat & berpengalaman, membimbing ibadah sesuai sunnah.',
      delay: 0.1,
      color: 'bg-blue-600', 
      cornerColor: 'bg-blue-50', 
    },
    {
      icon: <FaStar className="w-6 h-6 text-white" />,
      title: 'Fasilitas Bintang 5',
      description: 'Akomodasi hotel premium jarak dekat, menu masakan nusantara, dan bus terbaru.',
      delay: 0.2,
      color: 'bg-pink-500',
      cornerColor: 'bg-pink-50',
    },
    {
      icon: <FaShieldAlt className="w-6 h-6 text-white" />,
      title: 'Legalitas Terjamin',
      description: 'Travel resmi berizin Kemenag. Transparan dalam harga, jadwal, dan fasilitas.',
      delay: 0.3,
      color: 'bg-emerald-500',
      cornerColor: 'bg-emerald-50',
    },
    {
      icon: <FaKaaba className="w-6 h-6 text-white" />,
      title: 'Manasik Komprehensif',
      description: 'Bimbingan manasik teori dan praktik sebelum keberangkatan agar jamaah siap.',
      delay: 0.4,
      color: 'bg-purple-600',
      cornerColor: 'bg-purple-50',
    },
    {
      icon: <FaBus className="w-6 h-6 text-white" />,
      title: 'Transportasi Nyaman',
      description: 'Menggunakan bus AC eksekutif terbaru selama di Tanah Suci.',
      delay: 0.5,
      color: 'bg-orange-500',
      cornerColor: 'bg-orange-50',
    },
    {
      icon: <FaHandHoldingHeart className="w-6 h-6 text-white" />,
      title: 'Pelayanan 24 Jam',
      description: 'Tim kami siap membantu kebutuhan jamaah 24 jam, dari berangkat hingga pulang.',
      delay: 0.6,
      color: 'bg-cyan-500',
      cornerColor: 'bg-cyan-50',
    },
  ];

  const mainPackages = [
    {
      id: 1,
      title: "Paket Hemat 12 Hari",
      price: "21.500.000",
      badge: "PROMO",
      badgeColor: "bg-blue-500",
      isRecommended: false,
      benefits: [
        { icon: <FaHotel />, text: "Hotel Bintang 3/4" },
        { icon: <FaPlaneDeparture />, text: "Lion Air Direct" },
        { icon: <FaUtensils />, text: "Makan 3x Sehari" },
      ],
      includes: [
        "Tiket Pesawat PP", "Visa Umroh", "Hotel Madinah-Makkah", 
        "Makan Fullboard", "Bus AC Executive", "Muthawif & Handling", 
        "Air Zam-zam 5L"
      ],
      excludes: [
        "Paspor", "Vaksin Meningitis", "Perlengkapan (1 Jt)", "Kelebihan Bagasi"
      ]
    },
    {
      id: 2,
      title: "Program Umroh 16 Hari",
      price: "24.000.000",
      badge: "BEST SELLER",
      badgeColor: "bg-yellow-500",
      isRecommended: true,
      benefits: [
        { icon: <FaHotel />, text: "Hotel Dekat Masjid" },
        { icon: <FaPlaneDeparture />, text: "Tanpa Transit" },
        { icon: <FaUtensils />, text: "Menu Indonesia" },
      ],
      includes: [
        "Tiket Pesawat PP", "Visa Umroh & Asuransi", "Hotel Quad Share", 
        "Makan 3x Sehari", "Bus Terbaru", "City Tour Lengkap", 
        "Manasik & Zam-zam"
      ],
      excludes: [
        "Paspor", "Vaksin", "Perlengkapan (1 Jt)", "Pengeluaran Pribadi"
      ]
    },
    {
      id: 3,
      title: "Paket VIP / Ramadhan",
      price: "32.000.000",
      badge: "PREMIUM",
      badgeColor: "bg-purple-500",
      isRecommended: false,
      benefits: [
        { icon: <FaHotel />, text: "Hotel *5 Nol Meter" },
        { icon: <FaPlaneDeparture />, text: "Saudia Airlines" },
        { icon: <FaUtensils />, text: "Buffet International" },
      ],
      includes: [
        "Tiket Pesawat Premium", "Visa & Asuransi", "Hotel *5 Depan Haram", 
        "Makan Fullboard", "Private Bus", "Muthawif Senior", 
        "Lounge Bandara"
      ],
      excludes: [
        "Paspor", "Vaksin", "Perlengkapan (1.5 Jt)", "Laundry & Telp"
      ]
    }
  ];

  return (
    <section id="keunggulan" className="py-24 bg-gray-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Mengapa Memilih <span className="text-brand-pink">UmrohBahagia?</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Komitmen kami memberikan pelayanan terbaik untuk kekhusyukan ibadah Anda.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {features.map((feature, idx) => (
            <ScrollReveal delay={feature.delay} key={idx} className="h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                className="h-full bg-white rounded-2xl p-8 shadow-sm border border-gray-100 relative overflow-hidden group transition-all duration-300 hover:shadow-xl"
              >
                <div className={`absolute top-0 right-0 w-28 h-28 ${feature.cornerColor} rounded-bl-[80px] -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-110`}></div>
                
                <div className={`relative z-10 w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center shadow-md mb-6 transform group-hover:rotate-6 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {mainPackages.map((pkg, index) => (
            <ScrollReveal key={pkg.id} delay={0.2 + (index * 0.1)} className="h-full">
              <motion.div 
                whileHover={{ y: -10 }}
                className={`
                  h-full flex flex-col bg-white rounded-3xl shadow-xl border overflow-hidden relative transition-all duration-300 hover:shadow-2xl
                  ${pkg.isRecommended ? 'border-brand-pink ring-4 ring-brand-pink/10 transform lg:-translate-y-4 z-10' : 'border-gray-200'}
                `}
              >
                {pkg.isRecommended && (
                  <div className="absolute top-0 inset-x-0 h-1.5 bg-brand-pink"></div>
                )}
                
                <div className={`p-6 text-white text-center relative overflow-hidden ${pkg.isRecommended ? 'bg-gray-900' : 'bg-gray-800'}`}>
                   <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]"></div>
                   <div className="relative z-10">
                      <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold mb-3 ${pkg.badgeColor} text-white`}>
                        {pkg.badge}
                      </span>
                      <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                      <div className="text-sm text-gray-300 mb-1">Mulai dari</div>
                      <div className="text-2xl md:text-3xl font-bold mb-4">Rp {pkg.price}</div>
                      
                      <div className="flex justify-center gap-2 md:gap-4 border-t border-white/10 pt-4 mt-4">
                        {pkg.benefits.map((b, i) => (
                          <div key={i} className="flex flex-col items-center w-1/3">
                            <span className="text-brand-pink text-lg mb-1">{b.icon}</span>
                            <span className="text-[10px] leading-tight opacity-90">{b.text}</span>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                <div className="p-6 flex-1 flex flex-col bg-white">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <FaCheckCircle className="text-green-500" />
                      <h4 className="font-bold text-gray-800 text-sm">Sudah Termasuk:</h4>
                    </div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                          <FaCheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <FaTimesCircle className="text-red-500" />
                      <h4 className="font-bold text-gray-800 text-sm">Belum Termasuk:</h4>
                    </div>
                    <ul className="space-y-2">
                      {pkg.excludes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-gray-500">
                          <FaTimesCircle className="w-3.5 h-3.5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href="#kontak"
                    className={`
                      w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 text-center block
                      ${pkg.isRecommended 
                        ? 'bg-brand-pink text-white hover:bg-brand-pink-dark shadow-lg shadow-brand-pink/30' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }
                    `}
                  >
                    Pilih Paket Ini
                  </a>

                </div>
              </motion.div>
            </ScrollReveal>
          ))}

        </div>
        
      </div>
    </section>
  );
};

export default Keunggulan;