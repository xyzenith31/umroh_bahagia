// src/components/Keunggulan.tsx
import React from 'react';
// Kita pakai ikon dari react-icons yang sudah ter-install
import { FaUserCheck, FaStar, FaShieldAlt } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal'; // Kita gunakan lagi animasi scroll

const Keunggulan: React.FC = () => {
  const features = [
    {
      icon: <FaUserCheck className="w-10 h-10 text-brand-pink" />,
      title: 'Pembimbing Berpengalaman',
      description: 'Ditemani oleh muthawif yang ahli, ibadah lebih khusyuk dan sesuai sunnah.',
      delay: 0.1,
    },
    {
      icon: <FaStar className="w-10 h-10 text-brand-pink" />,
      title: 'Fasilitas Premium',
      description: 'Akomodasi hotel bintang 5 yang dekat, penerbangan nyaman, dan pelayanan terbaik.',
      delay: 0.2,
    },
    {
      icon: <FaShieldAlt className="w-10 h-10 text-brand-pink" />,
      title: 'Aman & Amanah',
      description: 'Kami adalah travel resmi terdaftar Kemenag. Kepercayaan Anda prioritas kami.',
      delay: 0.3,
    },
  ];

  return (
    <section id="keunggulan" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Kenapa Memilih UmrohBahagia?
          </h2>
          <p className="text-gray-600 mb-12 max-w-lg mx-auto text-center">
            Kami berkomitmen memberikan pengalaman ibadah terbaik untuk Anda dan keluarga.
          </p>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature) => (
            <ScrollReveal delay={feature.delay} key={feature.title}>
              {/* Anda bisa tambahkan hover effect di div ini jika mau */}
              <div className="w-full sm:w-80 p-6 bg-gray-50 rounded-lg shadow-md text-center transform hover:-translate-y-2 transition duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Keunggulan;