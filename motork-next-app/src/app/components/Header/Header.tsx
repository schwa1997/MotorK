import { FC } from "react";
import motorkLogo from "../../assets/motork.svg";
import Image from "next/image";

export const Header: FC = () => {
  return (
    <>
      <div className="w-screen z-50 left-0 fixed h-20 top-0 pl-5 pt-5 bg-opacity-40">
        <a href="/" target="_self" >
          <Image priority={true} src={motorkLogo} className="h-10 w-auto" alt="logo" />
        </a>
      </div>
    </>
  );
};
