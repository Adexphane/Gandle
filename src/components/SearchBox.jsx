"use client";

import { useSearchParams, useRouter } from "next/navigation";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { CgSearch } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex border border-gray-200 rounded-full shadow-sm focus:shadow-lg px-3 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
    >
      <input
        type="text"
        placeholder="What are you looking for ..."
        className=" w-full focus:outline-none ml-3 text-[14px] font-medium bg-transparent"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        onClick={() => setTerm("")}
        className=" text-[25px] text-[#21201E] cursor-pointer sm:mr-2 "
      />
      <AiOutlineSearch onClick={handleSubmit} className=" hidden sm:inline-flex text-[25px] font-bold text-[#21201E] border-gray-300 mr-3 cursor-pointer" />
      
    </form>
  );
};

export default SearchBox;
