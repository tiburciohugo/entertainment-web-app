import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import Trending from "@/components/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen bg-midnight-blue lg:p-4">
        {/* Search bar */}
        <div className="flex w-full px-4 mt-24 h-8 space-x-4 lg:ml-28 lg:mt-6">
          <Image
            src="/assets/icon-search.svg"
            alt="search icon"
            width={30}
            height={30}
          />
          <input
            type="text"
            placeholder="Search for Movies or TV Series"
            className="outline-none w-full bg-midnight-blue text-xl text-white focus:border-b-2 focus:border-navy-blue pb-6 pt-4"
          />
        </div>
        {/* Search bar ends */}
        {/* Trending */}
        <Trending />
      </main>
    </>
  );
};

export default Home;
