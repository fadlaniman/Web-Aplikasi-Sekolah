import { useGlobalState } from "./brand";
import Brand from "./brand";
import React from "react";

const Navbar = () => {
  const [toggleNavigation] = useGlobalState("type");
  return ( 
    <div className="grid xl:px-20 2xl:h-max">
      <div className="flex justify-between px-3 py-1 bg-white">
        <Brand />
        <Brand.Menu/>
      </div>
      <div
        className={
          toggleNavigation
            ? "grid bg-white 2xl:relative xl:translate-x-0 opacity-95 fixed 2xl:w-max  w-full h-full 2xl:mx-auto"
            : "2xl:my-auto hidden 2xl:flex 2xl:mx-auto"
        }
      >
        <Brand.Navigation />
      </div>
    </div> 
  );
};

export default Navbar;
