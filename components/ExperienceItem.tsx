'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExperienceType } from '@/lib/types/ExperienceType';

interface ExperienceItemProps {
  data: ExperienceType;
  index: number;
  isLast: boolean;
}

export function ExperienceItem({ data, index, isLast }: ExperienceItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative flex items-stretch group">
      <motion.div
        initial={{ opacity: 0, x: -8 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.08 + 0.05,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="flex-1 min-w-0 mb-2 mt-6 z-50"
      >
        <div className="flex items-baseline justify-between gap-3 flex-wrap">
          <h2 className="font-medium leading-snug">{data.title}</h2>
          <span className="text-sm text-muted-foreground/70 tabular-nums shrink-0">
            {data.date}
          </span>
        </div>
        <div className="flex items-center justify-between gap-3 mt-1 flex-wrap">
          <span className="text-md text-muted-foreground">{data.company}</span>
          {data.location && (
            <span className="text-sm text-muted-foreground/60">
              {data.location}
            </span>
          )}
        </div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{
          duration: 0.8,
          delay: index * 0.1 + 0.05,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute left-0 bottom-0 h-px w-full origin-left bg-border transition-colors duration-300 ease-out group-hover:bg-foreground"
      />
    </div>
  );
}
