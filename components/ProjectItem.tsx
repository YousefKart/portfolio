'use client';

import { useRef, useState } from 'react';
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from 'framer-motion';
import { ProjectType } from '@/lib/types/ProjectType';
import { MediaDisplay } from './MediaDiaplay';
import WorkInProgress from './WorkInProgress';
import { ProjectModal } from './ProjectModal';

interface ProjectItemProps {
  data: ProjectType;
  index: number;
}

export function ProjectItem({ data, index }: ProjectItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [modalOpen, setModalOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Magnetic tilt on hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { stiffness: 140, damping: 18, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [4, -4]), springCfg);
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-5, 5]), springCfg);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  }
  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  const col = index % 3;
  const row = Math.floor(index / 3);
  const delay = row * 0.07 + col * 0.1;
  const label = String(index + 1).padStart(2, '0');

  // Primary tool category shown on card
  const category = data.tools?.[0] ?? null;

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 36 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
        style={{ perspective: 800 }}
        className="cursor-pointer"
        onClick={() => setModalOpen(true)}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleMouseLeave}
        role="button"
        tabIndex={0}
        aria-label={`View ${data.title}`}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setModalOpen(true);
          }
        }}
      >
        <motion.div
          className="relative flex flex-col bg-card overflow-hidden select-none"
          /*
           * The signature shape: a notch cut from the bottom-right corner.
           * clip-path polygon draws the card outline clockwise,
           * skipping the corner to create a chamfered cut.
           */
          css-clip="chamfer"
          // We apply via inline style so Tailwind purge doesn't strip it
          style={{
            clipPath:
              'polygon(0 0, 100% 0, 100% calc(100% - 22px), calc(100% - 22px) 100%, 0 100%)',
            rotateX,
            rotateY,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ── Ambient border (drawn as outline, respects clip-path via box-shadow trick) ── */}
          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            style={{
              clipPath: 'inherit',
              outline: hovered
                ? '1.5px solid hsl(var(--foreground) / 0.35)'
                : '1px solid hsl(var(--border) / 0.6)',
              transition: 'outline 0.3s ease',
            }}
          />

          {/* ── Image area ── */}
          <div
            className="relative overflow-hidden"
            style={{ aspectRatio: '16 / 10' }}
          >
            {data.images?.length ? (
              <div className="absolute inset-0">
                <MediaDisplay
                  src={data.images[0]}
                  title={data.title}
                  className="h-full w-full object-cover"
                />
              </div>
            ) : (
              <WorkInProgress />
            )}

            {/* Scrim */}
            <motion.div
              className="absolute inset-0 bg-black pointer-events-none"
              animate={{ opacity: hovered ? 0.18 : 0.04 }}
              transition={{ duration: 0.3 }}
            />

            {/* Index badge — top-right, etched look */}
            <div className="absolute top-3 right-3 z-10">
              <span
                className="text-[10px] font-mono tracking-[0.2em] text-white/50
                            px-2 py-0.5 rounded-sm"
                style={{
                  background: 'hsl(0 0% 0% / 0.35)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                {label}
              </span>
            </div>
          </div>

          {/* ── Footer ── */}
          <div className="relative px-4 pt-3 pb-4 flex items-end justify-between gap-3 bg-card">
            {/* Title */}
            <div className="min-w-0">
              <motion.h2
                className="text-sm font-semibold leading-snug tracking-tight truncate"
                animate={{ x: hovered ? 3 : 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {data.title}
              </motion.h2>
              {category && (
                <span className="mt-1 block text-[11px] text-muted-foreground/60 font-mono">
                  {category}
                </span>
              )}
            </div>

            {/* Arrow indicator — slides in on hover */}
            <motion.div
              className="shrink-0 w-7 h-7 rounded-full border border-border/50
                          flex items-center justify-center text-muted-foreground"
              animate={{
                scale: hovered ? 1 : 0.85,
                opacity: hovered ? 1 : 0.4,
                borderColor: hovered
                  ? 'hsl(var(--foreground) / 0.4)'
                  : 'hsl(var(--border) / 0.5)',
              }}
              transition={{ duration: 0.25 }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                className="stroke-current"
                strokeWidth="1.5"
              >
                <motion.line
                  x1="2"
                  y1="10"
                  x2="10"
                  y2="2"
                  animate={{ x2: hovered ? 10 : 9, y2: hovered ? 2 : 3 }}
                  transition={{ duration: 0.2 }}
                />
                <polyline points="4,2 10,2 10,8" />
              </svg>
            </motion.div>
          </div>

          {/* ── Chamfer corner accent — a tiny triangle fill matching card bg ── */}
          {/* This fills the notch so there's no transparent gap */}
          <div
            className="absolute bottom-0 right-0 z-10 pointer-events-none"
            style={{
              width: 22,
              height: 22,
              background: `linear-gradient(
                135deg,
                transparent 50%,
                hsl(var(--border) / ${hovered ? '0.5' : '0.3'}) 50%
              )`,
              transition: 'background 0.3s ease',
            }}
          />
        </motion.div>
      </motion.div>

      <ProjectModal
        data={data}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
