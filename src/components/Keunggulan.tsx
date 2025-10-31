import React from 'react';
import { FaUserCheck, FaStar, FaShieldAlt, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal'; 

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

        <ScrollReveal delay={0.4}>
          <div className="mt-16 max-w-4xl mx-auto text-left p-6 sm:p-8 bg-gray-50 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Detail Paket Unggulan (24 JT + 1JT Perlengkapan)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm text-gray-700">
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Harga termasuk:</h4>
                <ul className="space-y-1.5"> 
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Umroh 2x
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Tiket pesawat PP
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Bagasi 23 + kabin 7kg
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Hotel Madinah & Makkah
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Makan 3x sehari
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Transportasi bus AC
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Muthawif (pembimbing ibadah)
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> City tour Madinah & Makkah
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Handling bandara Surabaya & Arab Saudi
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Perlengkapan umroh
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Air zam-zam 5 liter
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Manasik asrama haji Surabaya
                  </li>
                  <li className="flex items-center">
                    <FaCheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" /> Free akomodasi dan menginap dari asrama haji ke bandara
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">*Harga belum termasuk:</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-center">
                    <FaTimesCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" /> Passport
                  </li>
                  <li className="flex items-center">
                    <FaTimesCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" /> Vaksin miningitis & polio
                  </li>
                  <li className="flex items-center">
                    <FaTimesCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" /> Kelebihan bagasi
                  </li>
                  <li className="flex items-center">
                    <FaTimesCircle className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" /> Perlengkapan 1jt
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </ScrollReveal>
        
      </div>
    </section>
  );
};

export default Keunggulan;