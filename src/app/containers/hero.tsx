const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Hero() {
  return (
    <header className={`${commonStyles} bg-primary`}>
      <h1 className={titleStyles} data-aos="fade-up">
        YOUSEF KART
      </h1>
      <h2 className="text-2xl font-bold mt-4 mb-8" data-aos="fade-up">
        4th Year Computer Science Student
      </h2>
      <p className="w-2/5 text-center" data-aos="fade-up">
        Passionate about Software Development, Game Design, and 3D Modeling.
      </p>
    </header>
  );
}
