"use client";

import React from "react";
import UsersCountry from "./UsersCountry";
import { BiRightArrowAlt } from "react-icons/bi";
import { AiOutlineGoogle } from "react-icons/ai";
import { ImLocation } from "react-icons/im";

import { usePathname, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const handleAbout = (e) => {
    e.preventDefault();
    router.push("/gandleinfo/about");
  };
  const handleTerms = (e) => {
    e.preventDefault();
    router.push("/gandleinfo/terms");
  };
  const handlePrivacy = (e) => {
    e.preventDefault();
    router.push("/gandleinfo/privacy");
  };

  return (
    <footer className="absolute bottom-0 text-sm text-[#f0f0f0] bg-[#21201E] w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-6 space-y-7 sm:space-y-0">
        <ul className="flex items-center">
          {pathname === "/search/web" || pathname === "/search/image" ? (
            <li className="flex text-sm items-center">
              <ImLocation className=" bg-transparent text-[#F5F6F1] text-[40px] p-2" />
              <p className="text-lg font-semibold text-[#F5F6F1]">hello</p>
            </li>
          ) : (
            <li className="link">
              <AiOutlineGoogle className=" text-[30px] text-[#B81D23] hover:text-[#E50913] transition-all" />
            </li>
          )}
        </ul>
        <ul className="flex items-center space-x-8">
          <li className="link" onClick={handleAbout}>
            About
          </li>
          <li className="link" onClick={handleTerms}>
            Terms
          </li>
          <li className="link" onClick={handlePrivacy}>
            Privacy
          </li>
        </ul>

        {pathname !== "/search/web" && pathname !== "/search/image" && (
          <ul className="flex items-center space-x-8">
            <li className="link flex items-center font-medium">
              Github
              <BiRightArrowAlt className=" ml-1 text-[18px]" />
            </li>
          </ul>
        )}
      </div>
    </footer>
  );
};
export default Footer;
