"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
  color: string;
};

const COLORS = ["#4a6c8f", "#c08a2e", "#7c9885"];

export default function CursorEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!canvas || !dot || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let ringScale = 1;
    let lastX = -100;
    let lastY = -100;
    let lastEmit = 0;
    const particles: Particle[] = [];
    const trail: { x: number; y: number }[] = [];
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const emit = (x: number, y: number, speed: number) => {
      const count = speed > 12 ? 3 : speed > 4 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: x + (Math.random() - 0.5) * 6,
          y: y + (Math.random() - 0.5) * 6,
          vx: (Math.random() - 0.5) * 1.4,
          vy: (Math.random() - 0.5) * 1.4 - 0.3,
          life: 1,
          maxLife: 0.7 + Math.random() * 0.6,
          size: 1 + Math.random() * 2.2,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
      if (particles.length > 140) particles.splice(0, particles.length - 140);
    };

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dot.style.opacity !== "1") {
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
        lastX = mouseX;
        lastY = mouseY;
      }

      const speed = Math.hypot(mouseX - lastX, mouseY - lastY);
      const now = performance.now();
      if (now - lastEmit > 16) {
        lastEmit = now;
        emit(mouseX, mouseY, speed);
      }
      lastX = mouseX;
      lastY = mouseY;

      const target = e.target as HTMLElement | null;
      const overField = target?.closest("input,textarea,select");
      const overInteractive = target?.closest("a,button,[role='button']");
      ringScale = overField ? 0 : overInteractive ? 1.7 : 1;
      dot.style.opacity = overField ? "0" : "1";
      ring.style.opacity = overField ? "0" : "1";
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      trail.push({ x: mouseX, y: mouseY });
      if (trail.length > 18) trail.shift();
      if (trail.length > 2) {
        for (let i = 1; i < trail.length; i++) {
          const t = i / trail.length;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.strokeStyle = `rgba(74,108,143,${0.16 * t})`;
          ctx.lineWidth = 2.5 * t;
          ctx.lineCap = "round";
          ctx.stroke();
        }
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.97;
        p.vy *= 0.97;
        p.life -= 0.016;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        const alpha = Math.max(p.life / p.maxLife, 0);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      dot.style.transform = `translate3d(${mouseX - 5}px, ${mouseY - 5}px, 0)`;
      ring.style.transform = `translate3d(${ringX - 20}px, ${ringY - 20}px, 0) scale(${ringScale})`;

      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    raf = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[70] hidden lg:block"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_0_3px_rgba(255,255,255,0.7)] opacity-0 lg:block"
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-10 w-10 rounded-full border-2 border-accent/50 bg-accent/[0.06] opacity-0 transition-[border-color,background-color] duration-300 lg:block lg:hover:border-honey"
      />
    </>
  );
}
