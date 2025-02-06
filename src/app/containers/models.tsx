import ModelItem from '../components/modelItem';

const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Models() {
  return (
    <div id="models" className={`${commonStyles}`}>
      <h1 className={`${titleStyles} w-3/4 text-center`} data-aos="fade-up">Models</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-4 mb-8">
        {[
        { title: 'Cafe', image: 'images/models/Cafe0_Render.jpg' },
        { title: 'Cargo', image: 'images/models/Cargo.png' },
        { title: 'Space Shuttle', image: 'images/models/WIP Shuttle.png' },
        { title: 'Vehicles', image: 'images/models/Low Poly Vehicles 1.1.png' },
        { title: 'Sci-Fi Weapons', image: 'images/models/Low poly Sci-Fi Weapons.png' },
        { title: 'Curtiss Cb', image: 'images/models/Curtiss Cb.png' },
        { title: 'Coins and Diamonds', image: 'images/models/Coins and Diamonds.png' },
        { title: 'StarWars Speeder', image: 'images/models/SW Speeder.png' },
        { title: 'Coin Store', image: 'images/models/Coin Store.png' },
        { title: 'Jetskis', image: 'images/models/Ivas\'s Jetskis.png' },
        { title: 'Scanners', image: 'images/models/Captio\'s Airport Module 1.png' },
        { title: 'Gates', image: 'images/models/Captio\'s Airport Module 2.png' },
        { title: 'Church', image: 'images/models/Church.png' },
        { title: 'Generic Store', image: 'images/models/Generic Store.png' },
        { title: 'Roblox Armour', image: 'images/models/Legend Studio Armour.png' },
        { title: 'HL1 Weapons', image: 'images/models/Low Poly Guns.png' },
        { title: 'Low Poly Guns', image: 'images/models/Low Poly Untextured Guns.png' },
        { title: 'Neighbourhood', image: 'images/models/neighbourhood.png' },
        { title: 'S5 Wheel', image: 'images/models/Vehicle Wheel.png' },
        { title: 'Wooden Boats', image: 'images/models/Wooden Boats.png' },
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
