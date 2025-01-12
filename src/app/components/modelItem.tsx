const ModelItem = ({ title, image }: { title: string; image: string }) => {
  return (
    <li className="flex flex-col items-center" data-aos="fade-up">
      <img
        src={image}
        alt={title}
        className="rounded-md w-128 h-64 object-cover"
      />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
    </li>
  );
};

export default ModelItem;
