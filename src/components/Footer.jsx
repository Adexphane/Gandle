import React from "react";
import UsersCountry from "./UsersCountry";
import {BiRightArrowAlt} from "react-icons/bi"
import {AiOutlineGoogle} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="absolute bottom-0 text-sm text-[#f0f0f0] bg-[#21201E] w-full">
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-6 space-y-7 sm:space-y-0">
        <ul className="flex items-center">
          <li className="link"><AiOutlineGoogle className=" text-[30px] text-[#B81D23] hover:text-[#E50913] transition-all"/></li>
          
        </ul>
        <ul className="flex items-center space-x-8">
          <li className="link">About</li>
          <li className="link">Terms</li>
          <li className="link">Privacy</li>
        </ul>

        <ul className="flex items-center space-x-8">
          <li className="link flex items-center font-medium">Github<BiRightArrowAlt className=" ml-1 text-[18px]"/></li>
          
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
