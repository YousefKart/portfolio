const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

const ModelItem = ({ title, image }: { title: string; image: string }) => {
    return (
      <li className="flex flex-col items-center">
        <img src={image} alt={title} className="rounded-md" />
        <h2 className="text-2xl font-bold mt-4">{title}</h2>
      </li>
    );
  };

export default function Models() {
    return (
        <div id="models" className={`${commonStyles}`}>
            <h1 className={`${titleStyles} w-3/4 text-center`}>Models</h1>
            <ul className="grid grid-cols-4 gap-12 mt-4 mb-8">
              {[
                { title: 'Model 1', image: 'https://via.placeholder.com/250' },
                { title: 'Model 2', image: 'https://via.placeholder.com/250' },
                { title: 'Model 3', image: 'https://via.placeholder.com/250' },
                { title: 'Model 4', image: 'https://via.placeholder.com/250' },
                { title: 'Model 5', image: 'https://via.placeholder.com/250' },
                { title: 'Model 6', image: 'https://via.placeholder.com/250' },
                { title: 'Model 7', image: 'https://via.placeholder.com/250' },
                { title: 'Model 8', image: 'https://via.placeholder.com/250' },
                { title: 'Model 9', image: 'https://via.placeholder.com/250' },
                { title: 'Model 10', image: 'https://via.placeholder.com/250' },
              ].map((model) => (
                <ModelItem
                  key={model.title}
                  title={model.title}
                  image={model.image}
                />
              ))}
            </ul>
          </div>
    );
}