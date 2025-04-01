import React from 'react';

const Footer = () => {
  return (
    <div className="custom-green select-none w-full flex flex-col items-center text-center p-6 space-y-6">
      
      <div className="bg-white/10 border border-white/10 rounded-2xl shadow-lg overflow-hidden max-w-3xl p-2 backdrop-blur-md mb-6">
      <p className="text-lg">Have a project in mind?</p>
      <a
        href="mailto:kshitijvashisth@gmail.com"
        className="text-3xl sm:text-4xl inline-block mt-5 mb-4 hover:underline"
      >
        kshitijvashisth@gmail.com
      </a>
      </div>

      <div className="bg-white/10 border border-white/10 rounded-2xl shadow-lg overflow-hidden max-w-3xl p-2 backdrop-blur-md">
        <p className="text-muted-foreground">Copyright © 2025 Kshitij Vashisth</p>
      </div>
    </div>
  );
};

export default Footer;
