"use client";

import { FC } from "react";
import motorkLogo from "../../assets/motork.svg";
import Image from "next/image";
import { Facebook, Instagram } from "@mui/icons-material";

export const Footer: FC = () => {
  return (
    <>
      <div className="staic max-h-fit bottom-0 bg-zinc-900/80 text-white uppercase  flex md:flex-row flex-col md:px-12 px-6">
        <div className="basis-5/6 md:py-12 py-2 grid grid-cols-3">
          <div>
            <div className="font-bold">contact</div>
            <div>
              <Facebook />
            </div>
            <div>
              <Instagram />
            </div>
          </div>
          <div>
            <div className="font-bold">PRODUCTS</div>
            <div>SOLUTION</div>
            <div>USERCASE</div>
          </div>
          <div>
            <div className="font-bold">INFORMATION</div>
            <div>CAREER</div>
            <div>BUSINESS</div>
          </div>
          <div className="mt-6">@2023 HM CHEN</div>
        </div>
        <div className="basis-1/6 place-self-end md:h-fit h-10 w-1/2">
          <a href="/" target="_self">
            <Image
              priority={true}
              src={motorkLogo}
              className="w-full "
              alt="logo"
            />
          </a>
        </div>
      </div>
    </>
  );
};
