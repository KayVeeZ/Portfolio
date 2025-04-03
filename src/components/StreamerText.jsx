import React, { useState, useEffect, useRef } from "react";

const StreamerText = ({ texts, direction = 1 }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const [textWidth, setTextWidth] = useState(0);
  
  // Generate enough words to cover screen fully
  const repeatedText = Array(50).fill(texts.join("\u00A0")).join("\u00A0");

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.scrollWidth / 2); // Get the full text width
    }
  }, []);

  useEffect(() => {
    const handleScroll = (event) => {
      setOffset((prev) => {
        let newOffset = prev + event.deltaY * 0.5 * direction;
        if (newOffset > textWidth) return newOffset - textWidth; // Wrap correctly for forward scroll
        if (newOffset < 0) return textWidth + newOffset; // Wrap correctly for reverse scroll
        return newOffset;
      });
    };

    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [direction, textWidth]);

  return (
    <div ref={containerRef} className="relative w-full custom-green overflow-hidden text-xl bg-black flex items-center">
      <div
        ref={textRef}
        className="flex"
        style={{
          transform: `translateX(${-offset}px)`,
          whiteSpace: "nowrap",
        }}
      >
        {repeatedText}
      </div>
    </div>
  );
};

export default StreamerText;
