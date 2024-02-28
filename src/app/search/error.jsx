"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error: ", error);
  }, [error]);
  return (
    <div className=" flex flex-col justify-center items-center pt-28">
      <h1 className=" text-[#B81D23] text-4xl font-bold mb-2">Gandle Error</h1>
      <h1 className="text-3xl mb-4">Did you know something went wrong</h1>
      <button className="text-[#B81D23] font-bold underline-offset-2 underline" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
