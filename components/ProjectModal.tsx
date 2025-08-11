'use client';

import { useEffect, useState } from 'react';
import { ProjectType } from '@/lib/types/ProjectType';
import { MediaDisplay } from './MediaDiaplay';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Calendar, Code2, ImageIcon, Clock, FileText } from 'lucide-react';
import { ToolItem } from './toolItem';
import { Gallery } from './Gallery';

interface ProjectModalProps {
  data: ProjectType;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ data, isOpen, onClose }: ProjectModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  // Ensure lightbox closes if parent modal closes
  useEffect(() => {
    if (!isOpen) setLightboxOpen(false);
  }, [isOpen]);

  // Lightbox keyboard/navigation is handled in ImageLightbox

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="!w-[90vw] !max-w-[800px] max-h-[90vh] overflow-auto dark:bg-slate-900 rounded-2xl">
          <DialogHeader className="space-y-2">
            <div className="flex items-center gap-3 justify-center">
              <DialogTitle className="text-3xl font-bold text-center">
                {data.title}
              </DialogTitle>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <DialogDescription className="text-center text-lg font-medium">
                {data.date}
              </DialogDescription>
              <span className="text-muted-foreground mx-2">•</span>
              <Clock className="h-4 w-4 text-muted-foreground" />
              <DialogDescription className="text-center text-lg font-medium">
                {data.duration}
              </DialogDescription>
            </div>
          </DialogHeader>

          <div className="overflow-auto space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                About This Project
              </h3>
              <p className="leading-relaxed text-base">{data.description}</p>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <ImageIcon className="h-5 w-5 text-primary" />
                Gallery
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {data.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video overflow-hidden rounded-lg bg-muted/20 flex justify-center items-center cursor-zoom-in hover:opacity-90 transition"
                    role="button"
                    tabIndex={0}
                    aria-label={`Open image ${index + 1} of ${
                      data.images.length
                    }`}
                    onClick={() => openLightbox(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                      }
                    }}
                  >
                    <MediaDisplay
                      src={image}
                      title={`${data.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Code2 className="h-5 w-5 text-primary" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {data.tools.map((tool, index) => (
                  <ToolItem key={index} tool={tool} />
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="pt-6 border-t">
            <div className="w-full text-center">
              <p className="text-sm text-muted-foreground">
                This project was created for recreational purposes.
              </p>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>

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
