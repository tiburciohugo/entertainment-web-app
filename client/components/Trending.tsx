import React, { useEffect, useState } from "react";
import client, { urlFor } from "@/sanity";

interface Movie {
  poster: string;
  title: string;
}

const Trending = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "movie"][0..5]{title, poster}`)
      .then((data) => setMovies(data));
  }, [movies]);

  return (
    <>
      <div className="w-full py-6 overflow-x-hidden text-white lg:pl-32">
        <h1 className="text-xl tracking-wider">Trending</h1>

        <div className="flex w-full h-full gap-2 pb-4 mt-4 hover:overflow-x-auto h-scroll">
          {movies?.map((movie: Movie) => (
            <div
              id="hello"
              className="min-w-fit min-h-fit md:min-w-[29.5rem] md:h-60 max-w-60 relative pr-4 cursor-pointer"
            >
              <h2 className="absolute bottom-0 pb-2 pl-2 text-sm font-bold left-2">
                {movie.title}
              </h2>
              <img
                className="rounded-lg object-cover min-w-60 md:h-60 md:w-[29.5rem]"
                src={urlFor(movie.poster).width(240).height(140).url()}
              ></img>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trending;
