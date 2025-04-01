import React from 'react';

const Footer = () => {
  return (
    <div className="custom-green select-none w-full flex flex-col items-center text-center p-6 space-y-6">
      
      <div className="translucent-container p-2">
      <p className="text-lg">Have a project in mind?</p>
      <a
        href="mailto:kshitijvashisth@gmail.com"
        className="text-3xl sm:text-4xl inline-block mt-5 mb-4 hover:underline"
      >
        kshitijvashisth@gmail.com
      </a>
      </div>

      <div className="translucent-container p-2">
        <p className="text-muted-foreground">Copyright © 2025 Kshitij Vashisth</p>
      </div>
    </div>
  );
};

export default Footer;
