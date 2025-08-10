export default function Hero() {
  return (
    <div
      id="hero"
      className="flex items-center justify-around w-full scroll-mt-64 px-4"
    >
      <div className="flex-col items-center justify-center text-center space-y-4">
        <h1 className="text-4xl font-bold border-b-2 border-muted-foreground mb-8 pb-2">
          Yousef Kart
        </h1>
        <h2 className="text-2xl font-semibold">
          Software Developer and 3D Modeller
        </h2>
        <p>
          Computer Science (Honours) Graduate from the University of Windsor
        </p>
      </div>

      {/*
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
      */}
    </div>
  );
}
