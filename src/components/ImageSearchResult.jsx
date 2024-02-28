"use client"

import Link from "next/link";
import Image from "next/image";
import PaginationButton from "./PaginationButton";
import { usePathname } from "next/navigation";

export default function ImageSearchResult({ result }) {
  const pathname = usePathname();

  console.log(result);
  return (
    <div>
      {pathname !== "/search/image" ? (
        <div className=" sm:pb-24 pb-40 mt-4">
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
          {result.items.map((result) => (
            <div key={result.link} className=" mb-8">
              <div className=" group">
                <Link href={result.image.contextLink}>
                  <img
                    className=" h-69 group-hover:shadow-xl w-full object-contain transition-shadow"
                    src={result.link}
                    alt={result.title}
                  />
                </Link>
                <Link href={result.image.contextLink}>
                  <h2 className=" group-hover:underline truncate text-gray-800 font-semibold text-lg">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className=" group-hover:underline text-sm text-gray-600">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className=" ml-16">
          <PaginationButton />
        </div>
      </div>
      ) : (
        <div className=" flex flex-col justify-center items-center pt-28">
        <h1 className=" text-[#B81D23] text-4xl font-bold mb-2">
          No vex boss
        </h1>
        <p className=" text-lg">This image section dey under serious development </p>
        <p className=" text-sm pt-3">
          <Link href="/" className="text-[#B81D23] font-bold underline-offset-2 underline">
            Home
          </Link>
        </p>
      </div>
      )}
      
    </div>
  );
}
