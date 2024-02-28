"use client"

import React from 'react'
import { AiOutlineSearch, AiOutlineCamera } from "react-icons/ai"
import { usePathname, useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

const SearchHeaderOptions = () => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  function selectTab(tab) {
    router.push(`/search/${tab === "Images" ? "image" : "web"}?searchTerm${searchTerm}`)
    }
  
  return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
      <div 
        onClick={() => selectTab("All")} 
        className={` flex items-center space-x-1 border-b-4 border-transparent active:text-[#B81D23] cursor-pointer pb-3 px-2 
        ${pathname === "/search/web" && "!text-[#B81D23] !border-[#B81D23]"}`} >
        <AiOutlineSearch className=' text-[18px]'/>
        <p>All</p>
      </div>

      <div 
        onClick={() => selectTab("Images")} 
        className={` flex items-center space-x-1 border-b-4 border-transparent active:text-[#B81D23] cursor-pointer pb-3 px-2 
        ${pathname === "/search/image" && "!text-[#B81D23] !border-[#B81D23]"}`} >
        <AiOutlineCamera className=' text-[18px]'/>
        <p>Image</p>
      </div>
    </div>
  )
}

export default SearchHeaderOptions