import Moon from "../assets/images/icon-moon.svg";
import Sun from "../assets/images/icon-sun.svg";
import { useState } from "react";

const NavBar = () => {
  
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex items-center justify-between py-5">
      <h1 className="text-4xl font-bold text-[#FFF] tracking-[.75rem]">TODO</h1>
      <button onClick={handleClick}>
        {toggle ? (
          <img src={Moon} alt="Moon Icon" className="cursor-pointer" />
        ) : (
          <img src={Sun} alt="Sun Icon" className="cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default NavBar;
