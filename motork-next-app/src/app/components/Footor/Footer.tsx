"use client";

import { FC } from "react";
import motorkLogo from "../../assets/motork.svg";
import Image from "next/image";

export const Footer: FC = () => {
  return (
    <>
      <div
        className="static bottom-0  h-32 grid grid-flow-col p-6 place-content-between
        bg-gradient-to-r from-red-500 via-black/50 to-white 
        hover:bg-gradient-to-r hover:from-red-500  hover:to-red-500"
      >
        <div className="flex flex-col pl-20">
          <div className="flex flex-row">
            <div className="w-20">HELP</div>
            <div className="w-20">HELP</div>
            <div className="w-20">HELP</div>
          </div>
          <div className="flex flex-row">
            <div className="w-20">HELP</div>
            <div className="w-20">HELP</div>
            <div className="w-20">HELP</div>
          </div>
          <div className="flex flex-row">
            <div className="w-20">HELP</div>
            <div className="w-20">HELP</div>
            <div className="w-20">HELP</div>
          </div>
        </div>
        <div className=" place-self-end">
          <a href="/" target="_self">
            <Image
              priority={true}
              src={motorkLogo}
              className="md:h-10 h-5 w-auto "
              alt="logo"
            />
          </a>
        </div>
      </div>
    </>
  );
};
