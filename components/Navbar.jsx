"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {



  return (
    <div className="flex-col flex p-[1vw] justify-center w-[100vw]">
      <div className=" sm:w-[100%] px-[2vw] flex flex-row bg-white bg-opacity-50 justify-between text-black border-zinc-700 rounded-2xl">
        <Link href="/">
          <img src="/logo.svg" className="sm:h-[5vw] sm:w-[5vw] h-[10vw] w-[10vw]" />
        </Link>

        <div className="flex flex-row justify-center items-center gap-[3vw] text-[2.5vw] sm:text-[1.3vw] ml-[2vw]">
          <Link href="/">Home</Link>
          <Link href="/Info">Buisness Terms</Link>
          <Link href="/sharks">Sharks</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



