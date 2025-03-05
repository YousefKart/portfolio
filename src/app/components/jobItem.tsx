const hover =
  'hover:-translate-y-1 hover:scale-110 transition-transform duration-300 ease-in-out';

const JobItem = ({ start, end, title, company, description, links, images }: { start: string; end: string; title: string; company: string; description: string; links: { icon: JSX.Element; url: string }[], images: string }) => {
    return (
        <li className="flex flex-col items-center w-1/2" data-aos="fade-up">
            <div className="flex w-full justify-between">
                <div className="flex flex-col w-1/2">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <p>{description}</p>
                </div>
                <div className="flex flex-col w-1/2 items-end">
                    <p className="text-tertiary text-lg ml-2">{company}</p>
                    <p className="text-md ml-2">{start} - {end}</p>
                    <ul className="flex gap-4 mt-2">
                        {links.map((link, index) => (
                            <li key={index} className={`${hover}`}>
                                <a href={link.url} target="_blank" rel="noreferrer" className="text-xl">
                                    <span>{link.icon}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
            </div>
        </li>
    );
};

export default JobItem;
