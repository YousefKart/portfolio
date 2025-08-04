'use client';

import { useRef, useEffect } from 'react';

export default function LightBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let particles: {
      x: number;
      y: number;
      r: number;
      dx: number;
      dy: number;
      opacity: number;
    }[] = [];

    const init = () => {
      const { width, height } = canvas;
      particles = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.2,
      }));
    };

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        // Update position
        particle.x += particle.dx;
        particle.y += particle.dy;

        // Wrap around edges
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        // Draw particle
        ctx.globalAlpha = particle.opacity;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = '#64748b'; // Slate color for light theme
        ctx.fill();
      });

      ctx.globalAlpha = 1;
      requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
    />
  );
}
