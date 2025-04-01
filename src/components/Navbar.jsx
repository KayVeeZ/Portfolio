import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="group flex items-center justify-center gap-2 px-3 py-2 bg-white/10 border border-white/10 rounded-2xl backdrop-blur-md shadow-md">
        {[
          { name: "Home", link: "/" },
          { name: "Work", link: "/project" },
          { name: "About", link: "/about" },
          { name: "Blog", link: "/blog" },
        ].map((item, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1 }}>
            <a
              href={item.link}
              className="px-4 py-1.5 text-sm font-light text-white/70 transition-all duration-300 hover:text-white/85 rounded-2xl"
            >
              {item.name}
            </a>
          </motion.li>
        ))}
        {/* More Dropdown */}
        <motion.li whileHover={{ scale: 1.1 }}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="px-4 py-1.5 text-sm font-light text-white/70 transition-all duration-300 hover:text-white/85"
          >
            More
          </button>
        </motion.li>
        {/* Call to Action Button */}
        <motion.li whileHover={{ scale: 1.1 }}>
          <button className="relative px-4 py-1.5 text-sm font-light bg-white/10 text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white/90 rounded-2xl">
            Book a Call
            <div className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-2xl bg-white opacity-30 blur-sm"></div>
          </button>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
