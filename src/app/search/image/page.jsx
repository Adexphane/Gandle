import Link from "next/link";
import ImageSearchResult from "@/components/ImageSearchResult";

export default async function ImageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CONTEXT_API_KEY}&q=${searchParams.searchTerm}}&searchType=image&start=${startIndex}`
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  const data = await response.json();

  const results = data.items;

  if (!results) {
    return (
      <div className=" flex flex-col justify-center items-center pt-28">
        <h1 className=" text-[#B81D23] text-4xl font-bold mb-2">
          No result found
        </h1>
        <p className=" text-lg">Try looking for something else. </p>
        <p className=" text-sm pt-3">
          <Link href="/" className="text-[#B81D23] font-bold underline-offset-2 underline">
            Home
          </Link>
        </p>
      </div>
    );
  }

  return <>{results && <ImageSearchResult result={data} />}</>;
}
