import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex items-center justify-around w-full mt-32">
      <div className="flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-3xl font-bold">
          Software Developer and 3D Modeller
        </h1>
        <p>
          Honours Graduate in Computer Science from the University of Windsor
        </p>
      </div>

      <div className="rounded-4xl overflow-hidden shadow-[0_0_15px_5px_rgba(0,0,0,0.3)] dark:shadow-[0_0_15px_5px_rgba(255,255,255,0.3)]">
        <div className="relative w-[400px] h-[512px]">
          <Image
            src="/Yousef_Kart_Portrait.jpg"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
}
