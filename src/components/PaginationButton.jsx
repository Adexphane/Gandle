"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function PaginationButtons() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className=" flex mb-24 space-x-5  ">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex items-center justify-center px-4 h-12 me-3 text-base font-medium text-[#ffffff] hover:text-white bg-[#B81D23] hover:bg-[#da1313] rounded-lg transition-all">
            <BsChevronLeft className="h-5 me-1" />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex items-center justify-center px-4 h-12 text-base font-medium text-[#ffffff] hover:text-white bg-[#B81D23] hover:bg-[#da1313] rounded-lg transition-all">
            <p>Next</p>
            <BsChevronRight className="h-5 ms-1" />
          </div>
        </Link>
      )}
    </div>
  );
}
