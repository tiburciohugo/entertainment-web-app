import React from "react";
import Image from "next/image";
import Link from "next/link";
import HomeIcon from "../public/assets/icon-nav-home.svg";
import MoviesIcon from "../public/assets/icon-nav-movies.svg";
import TvIcon from "../public/assets/icon-nav-tv-series.svg";
import BookmarkIcon from "../public/assets/icon-nav-bookmark.svg";

const Navbar = () => {
  return (
    <div className="absolute top-0 flex items-center justify-between w-full p-4 bg-navy-blue">
      <Link href="/">
        <Image
          src={"/assets/logo.svg"}
          alt="logo"
          width={30}
          height={30}
          className="cursor-pointer hover:opacity-80"
        />
      </Link>

      <div className="flex items-center w-full justify-evenly">
        <ul className="flex space-x-4">
          <li>
            <Link href="/">
              <HomeIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <MoviesIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <TvIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
          <li>
            <Link href={"/"}>
              <BookmarkIcon className="text-steel-blue hover:text-white" />
            </Link>
          </li>
        </ul>
      </div>
      <Image
        src={"/assets/image-avatar.png"}
        alt="avatar"
        width={30}
        height={30}
        className="border-2 border-white rounded-full"
      />
    </div>
  );
};

export default Navbar;
