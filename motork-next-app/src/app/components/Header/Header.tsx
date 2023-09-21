"use client";

import { FC } from "react";
import motorkLogo from "../../assets/motork.svg";
import Image from "next/image";
import MenuPopupState from "./MenuPopup";

export const Header: FC = () => {
  return (
    <>
      <div
        className="fixed md:px-6 p-4 grid grid-cols-2  
        place-content-between w-screen z-50 
        bg-gradient-to-r from-red-500 via-black/50 to-white 
        hover:from-red-500  hover:to-red-500"
      >
        <div className="grid content-center">
          <a href="/" target="_self">
            <Image
              priority={true}
              src={motorkLogo}
              className="md:h-10 h-5 w-auto "
              alt="logo"
            />
          </a>
        </div>
        <div className="grid content-center place-items-end">
          <MenuPopupState />
        </div>
      </div>
    </>
  );
};
