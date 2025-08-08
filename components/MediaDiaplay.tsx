import Image from 'next/image';

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
      width={100}
      height={50}
      sizes="100vw"
      style={{ width: '100%', height: 'auto' }}
      className={className}
    />
  );
}
