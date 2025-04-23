const hover =
  'hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out';

const CertificateItem = ({
  year,
  title,
  provider,
  description,
}: {
  year: string;
  title: string;
  provider: string;
  description?: string;
}) => {
  return (
    <li
    className="items-center w-3/4 lg:w-1/2"
    data-aos="fade-up"
  >
    <div className="flex flex-col lg:flex-row w-full justify-between">
      <div className="flex flex-col lg:w-1/2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="flex flex-col lg:w-1/2 items-end">
        <p className="text-tertiary text-lg ml-2">{provider}</p>
        <p className="text-md ml-2">
          {year}
        </p>
      </div>
    </div>
  </li>
  );
};

export default CertificateItem;
