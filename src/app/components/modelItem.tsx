const ModelItem = ({ title, image }: { title: string; image: string }) => {
  return (
    <li className="flex flex-col items-center">
      <img src={image} alt={title} className="rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{title}</h2>
    </li>
  );
};

export default ModelItem;
