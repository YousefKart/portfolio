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
  quality?: number;
  sizes?: string;
  priority?: boolean;
  unoptimized?: boolean;
}

export function MediaDisplay({
  src,
  title,
  className,
  quality,
  sizes = '100vw',
  priority = false,
  unoptimized = false,
}: MediaDisplayProps) {
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
      sizes={sizes}
      quality={quality}
      priority={priority}
      unoptimized={unoptimized}
      className={cn('w-full h-auto', className)}
    />
  );
}
