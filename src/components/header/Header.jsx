import { useState } from "react";
import Avatar from "../Avatar";
import Logo from "../Logo";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";
import { FaBars } from "react-icons/fa6";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mb-12 flex h-20 w-full items-center gap-8 sm:px-10 lg:mb-[120px]">
      <Logo />
      <div className="hidden gap-8 md:flex">
        <NavLinks />
      </div>
      <div className="ml-auto hidden md:block">
        <Avatar path="avatar/avatar-olivia.webp" />
      </div>
      <div className="ml-auto md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-gray absolute left-0 top-16 flex w-full flex-col items-center gap-9 border bg-white p-9 md:hidden">
          <NavLinks />
          <Avatar path="avatar/avatar-olivia.webp" />
        </div>
      )}
    </header>
  );
}

export default Header;
