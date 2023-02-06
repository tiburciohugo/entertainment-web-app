import Navbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Trending from "@/components/Trending";
import client, { urlFor } from "@/sanity";
import Head from "next/head";

interface Movie {
  poster: string;
  title: string;
}

type value = string | void | number;

const useDebounceValue = (value: string, time = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, time);

    return () => {
      clearTimeout(handler);
    };
  }, [value, time]);

  return debouncedValue;
};

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const debouncedValue = useDebounceValue(query);

  /* Sanity Query */
  useEffect(() => {
    client
      .fetch(`*[_type == "movie"]{title, poster}`)
      .then((data) => setMovies(data));
  }, [movies]);

  /* Search Query */
  useEffect(() => {
    (async () => {
      if (debouncedValue.length > 0) {
        const data = await client.fetch(
          `*[_type == "movie" && title match "${debouncedValue}*"]{title, poster}`
        );
        setSuggestions(data.map((d: Movie[]) => d));
      } else {
        setSuggestions([]);
      }
    })();
  }, [debouncedValue]);

  console.log(suggestions);

  return (
    <>
      <Head>
        <title>Home | Entertainment Web App</title>
      </Head>

      <Navbar />
      <main className="w-full h-full px-4 pb-4 bg-midnight-blue lg:p-4">
        {/* Search bar */}
        <div className="flex w-full h-8 mt-24 space-x-4 lg:ml-28 lg:mt-6">
          <Image
            src="/assets/icon-search.svg"
            alt="search icon"
            width={30}
            height={30}
          />
          <input
            type="text"
            placeholder="Search for Movies or TV Series"
            className="w-full pt-4 pb-6 text-xl text-white outline-none bg-midnight-blue focus:border-b-2 focus:border-navy-blue"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {/* Trending */}
        <Trending />

        {/* Recommended */}
        <h2 className="text-xl tracking-wider text-white lg:pl-32">
          Recommended for you
        </h2>
        <div className="grid w-full grid-cols-2 gap-4 mt-4 md:grid-cols-3 lg:grid-cols-4 grid-rows-max h-fit lg:pl-32">
          {suggestions.length
            ? suggestions.map((suggestion: Movie) => {
                return (
                  <div
                    className="relative cursor-pointer"
                    key={suggestion.title}
                  >
                    <h2 className="absolute bottom-0 text-sm font-bold text-white left-2">
                      {suggestion.title}
                    </h2>
                    <img
                      className="rounded-lg object-cover min-w-60 md:h-60 md:w-[29.5rem]"
                      src={
                        suggestion.poster
                          ? urlFor(suggestion?.poster)
                              .width(240)
                              .height(140)
                              .url()
                          : "/assets/no-image.webp"
                      }
                    ></img>
                  </div>
                );
              })
            : movies.map((movie) => {
                return (
                  <div className="relative cursor-pointer">
                    <h2 className="absolute bottom-0 text-sm font-bold text-white left-2">
                      {movie.title}
                    </h2>
                    <img
                      className="rounded-lg object-cover min-w-60 md:h-60 md:w-[29.5rem]"
                      src={urlFor(movie.poster).width(240).height(140).url()}
                    ></img>
                  </div>
                );
              })}
        </div>
      </main>
    </>
  );
};

export default Home;
