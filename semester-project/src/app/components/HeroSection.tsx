import "../custom.css";

const HeroSection = () => {
  return (
    <div className="text-white py-20 flex">
      <div className="container mx-auto text-left flex-1">
        <h1 className="text-4xl font-roboto-mono mb-4">Welcome to Our Website</h1>
        <p className="text-3xl whitespace-wrap font-roboto-mono">Diving into the world of code and circuits.
          I'm <span className="text-logo-font-color font-roboto-mono tracking-widest font-bold text-3xl whitespace-nowrap">&lt;f0dor/&gt;</span>, a tech enthusiast with a vision to engineer the future. 
          Join me on this technological adventure.</p>
        {/* Add more content as needed */}
      </div>
      <div className="flex-1">
        {/* Add your image here */}
        <img src="../images/hsimage.png" alt="Hero section image" className="w-full h-auto" />
      </div>
    </div>
  );
};


  export default HeroSection;