import Image from "next/image";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
const Nav = () => {
  return (
    <div className="h-[6rem] flex justify-between items-center py-2 px-[5rem]">
      <Image src={"/Fullbeauty.svg"} alt="logo" height={500} width={500} className="w-[6%]" />
      <div className="flex items-center gap-8">
        <div className="relative cursor-pointer">
          <IoNotifications fontSize={35} className="text-dark-gold" />
          <div className="bg-white absolute top-1 right-1 rounded-full p-[1px]">
            <div className="size-2 bg-red-700 rounded-full shadow" />
          </div>
        </div>
        <div className="flex items-end gap-2">
          <FaUserAlt fontSize={30} className="text-dark-gold" />
          <span className="text-dark-green font-semibold">Alexander</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
