"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";
import { Page } from "./Navbar";
import { HamburgerProps } from "./Hamburger";

type MobileNavProps = HamburgerProps & {
  pages: Page[];
};

const MobileNav = ({ pages, open, clickHandler }: MobileNavProps) => {
  const pathname = usePathname();

  return (
    <nav
      className={cn(
        "flex lg:hidden items-center justify-center p-20 w-screen absolute top-0 z-20 bg-sky-700 opacity-99 rounded-3xl",
        { hidden: !open }
      )}
      onClick={() => clickHandler(!open)}
    >
      <ul className="flex flex-col gap-8 items-center">
        {pages.map(({ href, title }) => (
          <li key={href}>
            <Link href={href}>
              <span
                className={cn(
                  "uppercase whitespace-nowrap font-roboto-condensed text-base px-5 py-3 rounded-sm text-nav-font-color bg-brand-purple-100 transition-transform hover:shadow-md hover:text-white",
                  {
                    "bg-brand-purple-700 text-nav-hovered-font-color pointer-events-none":
                      pathname === href,
                  }
                )}
              >
                {title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNav;