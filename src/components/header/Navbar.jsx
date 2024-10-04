import { FaAngleDown } from "react-icons/fa";
import Avatar from "../Avatar";
import NavButton from "./NavButton";

function Navbar() {
  return (
    <>
      <div className="flex gap-8">
        <NavButton text="Home" />
        <NavButton text="Products" icon={<FaAngleDown />} />
        <NavButton text="Resources" icon={<FaAngleDown />} />
        <NavButton text="Pricing" />
      </div>

      <div className="ml-auto">
        <Avatar path="avatar/avatar-olivia.webp" />
      </div>
    </>
  );
}

export default Navbar;
