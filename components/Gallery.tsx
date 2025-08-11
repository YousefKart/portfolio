'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MediaDisplay } from './MediaDiaplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  open: boolean;
  images: string[];
  startIndex?: number;
  title?: string;
  onClose: () => void;
}

export function Gallery({
  open,
  images,
  startIndex = 0,
  title,
  onClose,
}: GalleryProps) {
  const [index, setIndex] = useState<number>(startIndex);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  const hasImages = images && images.length > 0;
  const next = () => {
    if (!hasImages) return;
    setIndex((prev) => (prev + 1) % images.length);
  };
  const prev = () => {
    if (!hasImages) return;
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, images.length]);

  return (
    <Dialog open={open} onOpenChange={(o) => (!o ? onClose() : void 0)}>
      <DialogContent className="!w-[96vw] !max-w-[1200px] bg-transparent border bg-accent dark:bg-slate-800 shadow-none p-0">
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Prev button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Previous image"
            onClick={prev}
            className="absolute left-2 md:left-3 z-10 rounded-full bg-black/60 hover:bg-black/80 text-white p-2 md:p-3"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Next button */}
          <Button
            variant="ghost"
            size="icon"
            aria-label="Next image"
            onClick={next}
            className="absolute right-2 md:right-3 z-10 rounded-full bg-black/60 hover:bg-black/80 text-white p-2 md:p-3"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex items-center justify-center w-full">
            {hasImages && (
              <MediaDisplay
                src={images[index]}
                title={`${title ?? 'Image'} - ${index + 1} (enlarged)`}
                className="max-h-[80vh] max-w-[92vw] object-contain rounded-lg"
              />
            )}
          </div>

          {/* Counter */}
          {hasImages && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 text-sm bg-black/50 px-3 py-1 rounded-full">
              {index + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
