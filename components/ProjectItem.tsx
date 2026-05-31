'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, ZoomIn } from 'lucide-react';
import { ProjectType } from '@/lib/types/ProjectType';
import { MediaDisplay } from './MediaDiaplay';
import { Gallery } from './Gallery';
import WorkInProgress from './WorkInProgress';

interface ProjectItemProps {
  data: ProjectType;
  index: number;
}

export function ProjectItem({ data, index }: ProjectItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const row = Math.floor(index / 2);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80, y: 24 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{
          duration: 0.65,
          delay: row * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="overflow-hidden rounded-xl border border-border/60 bg-card flex flex-col"
      >
        {/* Image */}
        {data.images?.length ? (
          <button
            className="group relative block w-full cursor-pointer overflow-hidden"
            onClick={() => {
              setCurrentIndex(0);
              setLightboxOpen(true);
            }}
            aria-label={`Open gallery for ${data.title}`}
          >
            <motion.div
              className="h-64 w-full sm:h-96"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <MediaDisplay
                src={data.images[0]}
                title={data.title}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              <ZoomIn className="h-5 w-5 text-white" />
            </div>
          </button>
        ) : (
          <div className="h-64 sm:h-96 border-b border-border/40">
            <WorkInProgress />
          </div>
        )}

        {/* Content */}
        <div className="p-4 sm:p-5 flex flex-col gap-4 flex-1">
          {/* Title row */}
          <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
            <div className="flex items-center gap-2 min-w-0">
              <h2 className="text-base font-semibold leading-snug">
                {data.title}
              </h2>
              {data.url && (
                <a
                  href={data.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${data.title}`}
                  className="text-muted-foreground/50 hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
            <span className="text-xs text-muted-foreground/60 shrink-0 pt-0.5">
              {data.date}
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
            {data.description}
          </p>

          {/* Tools */}
          {data.tools?.length > 0 && (
            <div className="mt-auto flex flex-wrap gap-1.5 pt-3 border-t border-border/40">
              {data.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-[11px] px-2.5 py-1 rounded-full border border-border/50 text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.div>

      <Gallery
        open={lightboxOpen}
        images={data.images}
        startIndex={currentIndex}
        title={data.title}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
