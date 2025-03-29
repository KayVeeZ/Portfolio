import React, { useEffect, useRef } from "react";

const MatrixRainingCode = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let columns = Math.floor(width / 20);
    const characters = `abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%"'#&_(),.;:?!\\|{}<>[]^~`;
    const charArray = characters.split("");
    let drops = Array(columns).fill(1);
    let frameRate = 25;
    let lastFrameTime = Date.now();

    // Load custom font
    const loadFont = async () => {
      const font = new FontFace("MatrixFont", "url(/fonts/matrixFont.ttf)"); // Adjust path
      await font.load();
      document.fonts.add(font);
    };

    loadFont().then(() => {
      ctx.font = "15px MatrixFont";

      const draw = () => {
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, width, height);
        ctx.font = "18px MatrixFont";

        for (let i = 0; i < drops.length; i++) {
          const text = charArray[Math.floor(Math.random() * charArray.length)];
          const x = i * 20;
          const y = drops[i] * 20;

          // Calculate opacity for last 6 characters
          let index = Math.floor(y / 20);
          let opacity = index < 6 ? 0.1 + index * 0.15 : 1;

          if (drops[i] * 20 > height || Math.random() > 0.975) {
            drops[i] = 0;
          }

          // Set color and opacity
          if (y + 20 >= height || drops[i] === 1) {
            ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`; // White for last character
          } else {
            ctx.fillStyle = "#20C20E"; // Green for others
          }

          ctx.fillText(text, x, y);
          drops[i]++;
        }
      };

      const animate = () => {
        const currentTime = Date.now();
        if (currentTime - lastFrameTime > 1000 / frameRate) {
          draw();
          lastFrameTime = currentTime;
        }
        requestAnimationFrame(animate);
      };

      animate();
    });

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / 20);
      drops = Array(columns).fill(1);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas className="matrix-canvas fixed top-0 left-0 z-[-1]" ref={canvasRef}></canvas>;
};

export default MatrixRainingCode;
