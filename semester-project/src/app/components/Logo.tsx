import { cn } from "../lib/utils";
import Image from "next/image";

type IconSize = {
  width?: number;
  height?: number;
};

const LogoIcon = ({ width = 84, height = 84 }: IconSize) => {
  return (
      <Image
        src="/images/logo.png"
        alt="Logo"
        width={width}
        height={height}
        priority={true}/>
  );
};

const Logo = ({ dark = false }) => (
  <div className="flex items-center justify-between gap-2">
    <LogoIcon/>
    <span
      className={cn(
        "font-roboto-condensed tracking-wide font-bold text-2xl whitespace-nowrap max-lg:hidden",
        { "text-logo-font-color": !dark, "text-black": dark }
      )}
    >
      code matters.
    </span>
  </div>
);

export default Logo;