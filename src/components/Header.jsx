import {
  faHome,
  faMagnifyingGlass,
  faPlus,
  faStar,
  faFilm,
  faTv,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./../assets/Disney.png";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  const icons = [
    { name: "Home", icon: faHome },
    { name: "Search", icon: faMagnifyingGlass },
    { name: "Watch List", icon: faPlus },
    { name: "Originals", icon: faStar },
    { name: "Movies", icon: faFilm },
    { name: "Series", icon: faTv },
  ];

  return (
    <header className="flex flex-row p-4 items-center justify-between relative">
      <div className="flex flex-row gap-8">
        <img
          src={Logo}
          className="w-[63px] h-[38px] md:w-[79px] md:h-[48px] object-cover"
        ></img>
        <div className="hidden md:flex md:flex-row gap-8">
          {icons.map((icon, index) => {
            return <HeaderItem name={icon.name} icon={icon.icon} key={index} />;
          })}
        </div>
        <div className="flex flex-row md:hidden gap-6 items-center z-10 overflow-hidden">
          {icons.map(
            (icon, index) =>
              index < 3 && <HeaderItem name={""} icon={icon.icon} key={index} />
          )}
          <div className="md:hidden overflow-hidden" onClick={handleToggle}>
            <HeaderItem name={""} icon={faEllipsisVertical} />
            {toggle ? (
              <div className="absolute mt-3 flex flex-col justify-start gap-3 bg-[#131313] border-gray-700 pl-4 pr-8 py-3 border-[1px] rounded-sm">
                {icons.map(
                  (icon, index) =>
                    index > 2 && (
                      <HeaderItem
                        name={icon.name}
                        icon={icon.icon}
                        key={index}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div
        onMouseOver={() => setDropdown(true)}
        className="flex gap-4 items-center z-20"
      >
        <p className="hidden md:block z-20 md:text-white">My Profile</p>
        <img
          className="w-[40] h-[40px] rounded-full cursor-pointer"
          src="https://ps.w.org/3d-avatar-user-profile/assets/icon-256x256.png"
        ></img>
      </div>
      <div
        onMouseLeave={() => setDropdown(false)}
        className={`h-[fit right-0 p-2 pb-8 rounded-[.250rem] border-[#414141] border-[2px] bg-[#131313] duration-200 ease-in-out z-[10] absolute ${
          dropdown ? "top-0" : "top-[-500%]"
        }`}
      >
        <ul className="pt-[90px] w-[230px] px-4 flex flex-col gap-4 ">
          <li className="text-[#C5C5C5] cursor-pointer hover:text-white">
            Edit Profile
          </li>
          <li className="text-[#C5C5C5] cursor-pointer hover:text-white">
            App Settings
          </li>
          <li className="text-[#C5C5C5] cursor-pointer hover:text-white">
            Account
          </li>
          <li className="text-[#C5C5C5] cursor-pointer hover:text-white">
            Help
          </li>
          <li className="text-[#C5C5C5] cursor-pointer hover:text-white">
            Log Out
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
