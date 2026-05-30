"use client";

import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const chars =
      "アイウエオカキクケコサシスセソタチツテト0123456789ABCDEF{}[]<>/$#@!*".split("");
    const fontSize = 14;
    let w = 0;
    let h = 0;
    let drops: number[] = [];

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      const cols = Math.floor(w / fontSize);
      drops = Array(cols).fill(1);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
    };

    const draw = () => {
      ctx.fillStyle = "rgba(10, 14, 20, 0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#00ff9c";
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    resize();
    window.addEventListener("resize", resize);
    const id = window.setInterval(draw, 55);
    return () => {
      window.removeEventListener("resize", resize);
      window.clearInterval(id);
    };
  }, []);

  return <canvas id="matrix" ref={canvasRef} />;
}
