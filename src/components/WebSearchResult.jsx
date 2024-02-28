import Link from "next/link";
import Parser from "html-react-parser";
import React from "react";
import PaginationButton from "./PaginationButton";

export default function WebSearchResult({ result }) {
  return (
    <div className=" bg-[#F5F6F1] w-full mx-auto px-3 pb-24 sm:pl-[5%] sm:pb-24 md:pl-[14%] lg:pl-52">
      <p className=" text-gray-600 text-sm pb-6 pt-5">
        Over {result.searchInformation?.formattedTotalResults} results in (
        {result.searchInformation?.formattedSearchTime} seconds)
      </p>
      {result.items?.map((result) => (
        <div className=" mb-8 max-w-xl" key={result.link}>
          <div className=" group flex flex-col">
            <Link className=" text-sm font-medium truncate" href={result.link}>
              {result.formattedUrl}
            </Link>
            <Link
              className=" group-hover:underline 
                decoration-[#B81D23] text-xl font-bold truncate 
                 text-[#B81D23]"
              href={result.link}
            >
              {result.title}
            </Link>
          </div>
          <p className=" text-gray-900">{Parser(result.htmlSnippet)}</p>
          <Link
            className=" text-[#B81D23] text-xs font-normal truncate"
            href={result.link}
          >
            <span className="text-gray-900 text-xs font-medium">Source:</span>{" "}
            {result.displayLink}
          </Link>
        </div>
      ))}
      <PaginationButton />
    </div>
  );
}
