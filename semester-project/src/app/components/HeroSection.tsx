import "../custom.css";
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="text-white py-20 hero-flex">
      <div className="container mx-auto text-left flex-1 py-40 px-40 max-sm:px-5 max-md:px-10 max-lg:px-20">
        <p className="text-3xl text-left whitespace-wrap font-roboto-mono mx-auto sm:px-2 md:px-5 lg:px-10 max-sm:text-md max-md:text-xl">Diving into the world of code and circuits.
          I&apos;m <span className="text-logo-font-color font-roboto-mono tracking-widest font-bold text-3xl whitespace-nowrap">&lt;f0dor/&gt;</span>, a tech enthusiast with a vision to engineer the future. 
          Join me on this technological adventure.</p>
      </div>

      <div className="">
        <Image src="/images/hsimage.png" alt="Hero section image" width={500} height={500}/>
      </div>
    </div>
  );
};

export default HeroSection;