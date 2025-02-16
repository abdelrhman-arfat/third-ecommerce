import InputSearch from "./InputSearch";
import Logo from "./Logo";
import NavbarIcons from "./NavbarIcons";
import NavbarLinks from "./NavbarLinks";
import NavBarMenuLinks from "./PhoneMenu";

const Navbar = () => {
  return (
    <header className="flex gap-4 sm:gap-3 md:gap-4 justify-between w-full py-8 px-1 items-center ">
      <Logo />
      <InputSearch />
      <div className="flex items-center gap-3 xl:gap-5">
        {/* big screen  */}
        <NavbarIcons />
        <NavbarLinks />
        {/* big screen  */}
        {/* small screen */}
        <NavBarMenuLinks />
        {/* small screen */}
      </div>
    </header>
  );
};

export default Navbar;
