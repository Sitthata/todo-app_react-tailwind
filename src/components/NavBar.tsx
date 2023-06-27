import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";
import { useState } from "react";
import { useDarkMode } from "../Context/DarkModeProvider"; // Update this path according to your file structure

const NavBar = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  const handleClick = () => {
    setDarkMode(!darkMode);
    console.log(darkMode);
  };

  return (
    <div className="flex items-center justify-between py-5">
      <h1 className="text-4xl font-bold text-[#FFF] tracking-[.75rem]">TODO</h1>
      <button onClick={handleClick}>
        {darkMode ? (
          <img src={Sun} alt="Sun Icon" className="cursor-pointer" />
        ) : (
          <img src={Moon} alt="Moon Icon" className="cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default NavBar;
