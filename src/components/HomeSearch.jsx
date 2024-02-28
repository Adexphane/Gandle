"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  const router = useRouter();
  const [input, setInput] = useState("");
  const [randomSearchLoading, setRandomSearchLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  }
  async function randomSearch() {
    setRandomSearchLoading(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoading(false);
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex w-full mt-5 mx-auto max-w-[90%] border border-[#21201E] px-5 py-3 rounded-full hover:border-[#d7d7d7] hover:shadow-md focus-within:shadow-md transition-all sm:max-w-l lg:max-w-2xl"
      >
        <AiOutlineSearch className=" text-[20px] text-gray-500 mr-3" />
        <input
          type="text"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          className=" flex-grow focus:outline-none bg-transparent"
        />
        <BsFillMicFill className=" text-lg text-[20px] " />
      </form>
      <div className=" flex flex-col space-y-6 sm:space-y-0 sm:space-x-6 justify-center sm:flex-row mt-8">
        <button onClick={handleSubmit} className="btn">
          Gandle Search
        </button>
        <button
          disabled={randomSearchLoading}
          onClick={randomSearch}
          className="btn flex items-center justify-center disabled:opacity-80 "
        >
          {randomSearchLoading ? (
            <img
              src="spinner2.svg"
              alt="loading..."
              className="h-6 text-center"
            />
          ) : (
            "Im feeling lucky"
          )}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
