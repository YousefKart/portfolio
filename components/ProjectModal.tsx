'use client';

import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft } from 'lucide-react';
import { ProjectType } from '@/lib/types/ProjectType';
import { MediaDisplay } from './MediaDiaplay';

interface ProjectModalProps {
  data: ProjectType | null;
  open: boolean;
  onClose: () => void;
}

export function ProjectModal({ data, open, onClose }: ProjectModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [open, data]);

  return (
    <AnimatePresence>
      {open && data && (
        <motion.div
          key="modal-panel"
          ref={scrollRef}
          className="
            fixed inset-0 z-50 overflow-y-auto
            bg-background text-foreground
          "
          initial={{
            clipPath: 'inset(50% 50% 50% 50% round 24px)',
            opacity: 0,
          }}
          animate={{ clipPath: 'inset(0% 0% 0% 0% round 0px)', opacity: 1 }}
          exit={{
            clipPath: 'inset(50% 50% 50% 50% round 24px)',
            opacity: 0,
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="max-w-3xl mx-auto px-6 sm:px-8 mt-16">
            <div className="mb-4 flex justify-start">
              <button
                onClick={onClose}
                aria-label="Back"
                className="inline-flex items-center justify-center gap-1 my-2 text-muted-foreground hover:text-foreground transition-colors duration-100"
              >
                <ChevronLeft className="size-4" /> Back
              </button>
            </div>
            {data.images?.length ? (
              <div className="relative w-full overflow-hidden rounded-xl border border-border/40">
                <MediaDisplay
                  src={data.images[0]}
                  title={data.title}
                  className="w-full"
                />
              </div>
            ) : null}
          </div>

          {/* Content */}
          <div className="px-6 pb-10 pt-6 sm:px-8 sm:pb-12 max-w-3xl mx-auto">
            {/* Title + link + date */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.18,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex items-start justify-between gap-4 mb-1 flex-wrap"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <h2 className="text-2xl font-semibold tracking-tight leading-snug">
                  {data.title}
                </h2>
                {data.url && (
                  <a
                    href={data.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${data.title}`}
                    className="text-muted-foreground/50 hover:text-foreground transition-colors mt-1 shrink-0"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
              {data.date && (
                <span className="text-xs text-muted-foreground/60 shrink-0 pt-1.5 font-mono">
                  {data.date}
                </span>
              )}
            </motion.div>
            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px bg-border/50 mb-5 origin-left"
            />
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.28,
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-6"
            >
              {data.description}
            </motion.p>
            {/* Additional images gallery (2+) */}
            {data.images?.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.34,
                  duration: 0.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="grid grid-cols-2 gap-2 mb-6"
              >
                {data.images.slice(1).map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-lg border border-border/40 aspect-video"
                  >
                    <MediaDisplay
                      src={img}
                      title={`${data.title} ${i + 2}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            )}
            {/* Tools */}
            {data.tools?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.38,
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-wrap gap-1.5 pt-4 border-t border-border/40"
              >
                {data.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] px-2.5 py-1 rounded-full border border-border/50 text-muted-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
