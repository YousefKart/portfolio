const commonStyles = 'w-full flex flex-col items-center';
const titleStyles = 'border-b-2 border-tertiary text-4xl font-bold mt-16 mb-4';

export default function Hero() {
  return (
    <header className={`${commonStyles} bg-primary`}>
      <h1 className={titleStyles} data-aos="fade-up">
        YOUSEF KART
      </h1>
      <h2 className="text-2xl font-bold mt-4 mb-8 text-center" data-aos="fade-up">
        Software Developer, Game Designer, and 3D Modeller
      </h2>
      <p className="lg:w-2/5 text-center" data-aos="fade-up">
        Honours Graduate in Computer Science from the University of Windsor.
      </p>
    </header>
  );
}
