// src/components/Kontak.tsx

import React from 'react';
import { FaWhatsapp, FaInstagram, FaEnvelope } from 'react-icons/fa';
import ScrollReveal from './ScrollReveal';

const Kontak: React.FC = () => {
  // Nomor WhatsApp tujuan
  const whatsappNumber = "6281234567890"; // Ganti dengan nomor WhatsApp Anda (tanpa + atau 0 di depan jika sudah 62)
  const whatsappMessage = encodeURIComponent("Assalamu'alaikum, saya ingin bertanya tentang paket umroh.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Link Instagram dan Email yang diminta
  const instagramLink = "https://www.instagram.com/sogehbareng_hajiumroh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
  const emailAddress = "sogehbarengumroh21@gmail.com";
  const emailLink = `mailto:${emailAddress}?subject=Pertanyaan%20Paket%20Umroh`; // Subjek email

  return (
    <section id="kontak" className="py-20 bg-brand-pink-light overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Siap Berangkat ke Tanah Suci?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Hubungi kami sekarang untuk konsultasi gratis rencana ibadah Anda.
            Tim kami siap melayani Anda.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center 
              bg-brand-pink text-white 
              px-8 py-4 rounded-full 
              font-bold text-lg 
              hover:bg-brand-pink-dark transition duration-300 
              shadow-lg transform hover:scale-105 mb-8
            "
          >
            <FaWhatsapp className="w-6 h-6 mr-3" />
            Hubungi via WhatsApp
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex justify-center items-center gap-8 mt-4">
            {/* Instagram Link */}
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-gray-600 hover:text-brand-pink transition duration-300
                transform hover:scale-110
              "
              aria-label="Kunjungi Instagram kami"
            >
              <FaInstagram className="w-8 h-8" />
            </a>

            {/* Email Link */}
            <a
              href={emailLink}
              className="
                text-gray-600 hover:text-brand-pink transition duration-300
                transform hover:scale-110
              "
              aria-label="Kirim Email kepada kami"
            >
              <FaEnvelope className="w-8 h-8" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default Kontak;