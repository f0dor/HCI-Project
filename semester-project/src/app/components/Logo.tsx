import { cn } from "../lib/utils";
import Image from "next/image";

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 500, height = 500 }: IconSize) => {
  return (
      <Image style={{width : '50px', height : '50px'}}
        src="/images/logo.png"
        alt="Logo"
        width={width}
        height={height}
        priority={true}/>
  );
};

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-start gap-2">
    <LogoIcon/>
    <span
      className={cn(
        "font-roboto-condensed tracking-wide font-bold text-2xl whitespace-nowrap",
        { "text-logo-font-color": !dark, "text-black": dark }
      )}
    >
      code matters.
    </span>
  </div>
);

export default Logo;