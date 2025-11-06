import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="
        bg-white pt-8 pb-6 relative 
        shadow-[0_-8px_20px_-5px_rgba(0,0,0,0.03)]
      "
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-gray-500 text-sm">
          Copyright &copy; {new Date().getFullYear()} Pt. Umi Muthmainah Berkah. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;