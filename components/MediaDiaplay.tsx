import Image from 'next/image';
import { cn } from '@/lib/utils';

const isVideo = (src: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
  return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
};

interface MediaDisplayProps {
  src: string;
  title: string;
  className?: string;
}

export function MediaDisplay({ src, title, className }: MediaDisplayProps) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        controls
        muted
        loop
        className={className}
        preload="metadata"
      >
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <Image
      src={src}
      alt={title + ' Image'}
      width={1920}
      height={1080}
      sizes="100vw"
      className={cn('w-full h-auto', className)}
    />
  );
}
