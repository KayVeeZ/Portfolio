import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const StreamerText = ({ texts, direction = 1, speed = 1.2 }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [textWidth, setTextWidth] = useState(0);

  // Add a single bullet point after each string
  const sandwichedText = texts.map((text) => `${text} •`).join("\u00A0");

  const repeatedText = Array(50).fill(sandwichedText).join("\u00A0");

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth / 2); // Get full text width
    }
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      setOffset((prev) => {
        let newOffset = prev + event.deltaY * 0.5 * direction * speed; // Adjust scroll speed
        if (newOffset > textWidth) return newOffset - textWidth; // Wrap around for forward scroll
        if (newOffset < 0) return textWidth + newOffset; // Wrap for reverse scroll
        return newOffset;
      });
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [direction, textWidth, speed]);

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-black flex items-center">
      <motion.div
        ref={textRef}
        className="flex text-2xl font-bold custom-green transition-all ease-in-out duration-300"
        style={{
          transform: `translateX(${-offset}px)`, // Apply the scrolling effect via transform
          whiteSpace: "nowrap",
        }}
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};

export default StreamerText;
