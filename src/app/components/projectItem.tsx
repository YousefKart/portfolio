const hover =
  'hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out';

const ProjectItem = ({
  year,
  title,
  links,
  media,
  description,
  imageWidth = 'w-64',
}: {
  year: string;
  title: string;
  links: { icon: JSX.Element; url: string }[];
  media: string[];
  description: string;
  imageWidth?: string;
}) => {
  return (
    <li className="w-full flex flex-col items-center" data-aos="fade-up">
      <div className="flex w-4/5 sm:w-3/4 md:w-3/5 lg:w-2/5 relative mb-28">
        <h2 className="text-xl font-bold mt-16 absolute left-0 top-2">
          {year}
        </h2>
        <h2 className="border-b-2 border-tertiary text-2xl font-bold mt-16 mb-4 absolute left-1/2 transform -translate-x-1/2">
          {title}
        </h2>
        <div className="flex gap-4 h-8 mt-16 absolute right-0">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              aria-label={`Link for ${title}`}
              className={`h-8 w-8 flex items-center justify-center ${hover}`}
            >
              <span className="text-2xl">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mt-4">
        {media.map((src, index) => {
          const isVideo = /\.(mp4|webm|ogg)$/i.test(src);
          return isVideo ? (
            <video
              key={index}
              src={src}
              controls
              className={`rounded-md ${imageWidth} h-64 object-cover`}
            />
          ) : (
            <img
              key={index}
              src={src}
              alt={`${title} screenshot ${index + 1}`}
              className={`rounded-md ${imageWidth} h-64 object-cover`}
            />
          );
        })}
      </div>

      <p className="w-4/5 sm:w-3/4 md:w-3/5 lg:w-2/5 text-center mt-8">
        {description}
      </p>
    </li>
  );
};

export default ProjectItem;
