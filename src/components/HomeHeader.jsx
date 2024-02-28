import Link from "next/link";
import React from "react";
import { TbGridDots } from "react-icons/tb";
import { ImLocation } from "react-icons/im";
import UsersCountry from "./UsersCountry";

const HomeHeader = () => {
  return (
    
    <header className=" flex justify-between px-8 py-5 text-sm bg-[#21201E]">
      <div className=" flex text-sm items-center">
        <ImLocation className=" bg-transparent text-[#F5F6F1] text-[40px] p-2" />
        <div
          href="https://mail.google.com"
          className="text-lg font-semibold text-[#F5F6F1]"
        >
          <UsersCountry />
        </div>
      </div>
      <div className=" flex space-x-4 items-center">
        <Link
          href="https://mail.google.com"
          className=" hover:underline text-lg font-semibold text-[#F5F6F1]"
        >
          Images
        </Link>
        {/* <Link href="https://image.google.com" className=" hover:underline">
          Images
        </Link>
        <TbGridDots className=" bg-transparent hover:bg-slate-200 rounded-full text-4xl p-2" />
        <button className=" bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-110 hover:shadow-md transition-shadow">
          Sign in
        </button> */}
      </div>
    </header>
  );
};

export default HomeHeader;
