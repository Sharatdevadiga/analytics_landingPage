import { FaAngleDown } from "react-icons/fa6";
import NavButton from "./NavButton";

function NavLinks() {
  return (
    <>
      <NavButton text="Home" />
      <NavButton text="Products" icon={<FaAngleDown />} />
      <NavButton text="Resources" icon={<FaAngleDown />} />
      <NavButton text="Pricing" />
    </>
  );
}

export default NavLinks;
