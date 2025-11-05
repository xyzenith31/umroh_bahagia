import React from 'react';
import ScrollReveal from './ScrollReveal'; 

import videoContoh1 from '../assets/galeri/1.mp4';
import videoContoh2 from '../assets/galeri/2.mp4';
import videoContoh3 from '../assets/galeri/3.mp4';
import videoContoh4 from '../assets/galeri/4.mp4';

const videoList = [
  { src: videoContoh1, title: 'Testimoni Jamaah' },
  { src: videoContoh2, title: 'Suasana Hotel' },
  { src: videoContoh3, title: 'Kegiatan Manasik' },
  { src: videoContoh4, title: 'Momen di Masjidil Haram' },
];

const Galeri: React.FC = () => {
  return (
    <section id="galeri" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Galeri Video Jamaah
          </h2>
          <p className="text-gray-600 mb-12 max-w-lg mx-auto text-center">
            Lihat momen-momen berkesan dari perjalanan ibadah jamaah kami.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
            
            {videoList.map((video, index) => (
              <div 
                key={index} 
                className="
                  w-full bg-white rounded-xl shadow-lg overflow-hidden 
                  transform hover:-translate-y-1 transition duration-300
                  border border-gray-200 p-2 sm:p-3 {/* BORDER DITAMBAHKAN DI SINI */}
                "
              >
                <div className="w-full aspect-[9/16] bg-black rounded-lg overflow-hidden">
                  <video
                    src={video.src}
                    controls
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    title={video.title}
                  />
                </div>
                <p className="p-3 text-sm font-semibold text-gray-700 text-center truncate">
                  {video.title}
                </p>
              </div>
            ))}

          </div>
        </ScrollReveal>
        
      </div>
    </section>
  );
};

export default Galeri;