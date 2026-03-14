'use client';

import { ProjectType } from '@/lib/types/ProjectType';
import { MediaDisplay } from './MediaDiaplay';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import useGlowBorder from '@/hooks/use-glow-border';
import { Gallery } from './Gallery';

interface ProjectItemProps {
  data: ProjectType;
  index: number;
}

export function ProjectItem({ data, index }: ProjectItemProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const glow = useGlowBorder({ size: 400 });

  const openLightbox = (imageIndex: number) => {
    setCurrentIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  return (
    <>
      <div
        {...glow.props}
        className={cn(
          'flex flex-col sm:flex-row justify-start gap-8 sm:rounded-2xl p-4 backdrop-blur sm:max-h-[45vh]',
          index % 2 === 1 ? 'sm:flex-row-reverse' : ''
        )}
      >
        <div className="flex-1 flex flex-col gap-4 w-full min-w-0">
          <div className="flex items-center justify-between w-full text-lg font-semibold">
            <h2 className="font-bold text-2xl">{data.title}</h2>
            <p className="text-muted-foreground">{data.date}</p>
          </div>

          <div className="flex gap-2 flex-wrap text-muted-foreground border-b border-border/60 pb-2">
            {data.tools.map((tool, index) => (
              <div key={index} className="flex gap-2 items-center flex-wrap">
                <span key={index} className="px-2 rounded text-sm">
                  {tool}
                </span>
              </div>
            ))}
          </div>

          {data.description}
        </div>

        <div
          className="flex-1 max-h-128 w-full min-w-0 cursor-zoom-in overflow-hidden rounded-lg"
          role="button"
          tabIndex={0}
          aria-label={`Open gallery for ${data.title}`}
          onClick={() => openLightbox(0)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              openLightbox(0);
            }
          }}
        >
          <MediaDisplay
            src={data.images[0]}
            title={data.title}
            className="h-full w-full min-w-0 object-cover"
          />
        </div>
      </div>

      <Gallery
        open={lightboxOpen}
        images={data.images}
        startIndex={currentIndex}
        title={data.title}
        onClose={closeLightbox}
      />
    </>
  );
}
