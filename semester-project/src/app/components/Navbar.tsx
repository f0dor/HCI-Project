"use client";
import { useState } from "react";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Hamburger from "./Hamburger";
import MobileNav from "./MobileNav";

export type Page = {
  href: string;
  title: string;
};

// Get this info from some external source (e.g. CMS)
const pages: Page[] = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/skills", title: "Skills" },
  { href: "/blog", title: "Blog" },
  { href: "/contact", title: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-around mx-20 my-5 custom-background">
      <Logo />
      <MainNav pages={pages} />
      <Hamburger open={open} clickHandler={setOpen} />
      <MobileNav open={open} clickHandler={setOpen} pages={pages} />
    </div>
  );
};

export default Navbar;