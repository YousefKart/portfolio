'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ZoomIn } from 'lucide-react';
import { ModelType } from '@/lib/types/ModelType';
// import { Gallery } from './Gallery';
import { MediaDisplay } from './MediaDiaplay';

interface ModelItemProps {
  data: ModelType;
  index: number;
}

export function ModelItem({ data, index }: ModelItemProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.45,
          delay: (index % 4) * 0.07,
          ease: [0.16, 1, 0.3, 1],
        }}
        onClick={() => setIsOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-xl border border-border/60 bg-card"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <motion.div
            className="h-full w-full"
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <MediaDisplay
              src={data.image}
              title={data.title}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <ZoomIn className="h-5 w-5 text-white" />
          </div>
        </div>

        {/* Title */}
        <div className="px-3 py-2.5">
          <p className="truncate text-sm font-medium">{data.title}</p>
        </div>
      </motion.div>

      {/* <Gallery
        open={isOpen}
        title={data.title}
        startIndex={0}
        images={[data.image]}
        onClose={() => setIsOpen(false)}
      /> */}
    </>
  );
}
