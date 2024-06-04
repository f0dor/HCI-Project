import "../custom.css";
import Image from 'next/image'
import { ButtonWhite, ButtonBlue } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="text-white py-20 hero-flex">
      <div className="container mx-auto text-left flex-1 pt-20 px-4 md:px-5 lg:px-20 max-lg:py-2">
        <div className="text-xl text-left line-height whitespace-wrap mx-auto sm:px-2 md:px-5 lg:px-20 max-sm:text-md max-md:text-xl text-logo-font-color font-bold">Hello, my name is Marko</div>
        <div className="text-5xl text-left line-height whitespace-wrap mx-auto sm:px-2 md:px-5 lg:px-20 py-10 max-sm:text-md max-md:text-xl">I do computer engineering stuff.</div>
        <div className="text-xl text-left line-height whitespace-wrap mx-auto sm:px-2 md:px-5 lg:px-20 max-sm:text-md max-md:text-xl">
          I am currently enrolled in the graduate program of <span className="text-logo-font-color tracking-widest font-bold text-xl whitespace-nowrap">Computer Science</span> at <span className="text-logo-font-color font-roboto-mono tracking-widest font-bold text-xl whitespace-nowrap">FESB</span>.
          <br />I've done projects in areas such as <span className="whitespace-wrap text-logo-font-color tracking-widest font-bold text-xl whitespace-nowrap">machine learning</span>, <span className="text-logo-font-color font-roboto-mono tracking-widest font-bold text-xl whitespace-nowrap"> data science</span>, <span className="text-logo-font-color font-roboto-mono tracking-widest font-bold text-xl whitespace-nowrap"> web-dev</span>, <span className="text-logo-font-color font-roboto-mono tracking-widest font-bold text-xl whitespace-nowrap"> embedded computing</span>, etc.
        </div>

      </div>
    </div>
  );
};

export default HeroSection;