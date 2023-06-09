import HeroJpg from "../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section
      className="w-full bg-no-repeat bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: `url(${HeroJpg})`,
      }}
    >
      <div className="flex items-center text-center justify-center flex-col pt-20 pb-6 absolute inset-x-0 bottom-0 right-0 text-white">
        <h1 className="text-4xl md:text-7xl mb-1 font-bold mt-10">
          Claudio <strong className="text-yellow-500">Ivan</strong> hribernik
        </h1>
        <p className="text-base font-medium mb-4">
          Analista de sistemas y web developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
