import Image from 'next/image';

const isVideo = (src: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
  return videoExtensions.some((ext) => src.toLowerCase().endsWith(ext));
};

export function MediaDisplay({ src, title }: { src: string; title: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        controls
        muted
        loop
        className="w-full h-auto object-cover flex-1 rounded-lg"
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
      layout="responsive"
      width={100}
      height={50}
      className="w-full h-auto object-cover flex-1 rounded-lg"
    />
  );
}
