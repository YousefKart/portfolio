const ProjectItem = ({
  year,
  title,
  links,
  images,
  description,
}: {
  year: string;
  title: string;
  links: { icon: JSX.Element; url: string }[];
  images: string[];
  description: string;
}) => {
  return (
    <li className="w-full flex flex-col items-center">
      <div className="flex w-2/5 relative mb-28">
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
              target="#"
              aria-label={`Link for ${title}`}
              className="h-8 w-8 flex items-center justify-center"
            >
              <span className="text-2xl">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>
      <div className="flex gap-8 mt-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`${title} screenshot ${index + 1}`}
            className="rounded-md w-64 h-64 object-cover"
          />
        ))}
      </div>
      <p className="w-2/5 text-center mt-8">{description}</p>
    </li>
  );
};

export default ProjectItem;
