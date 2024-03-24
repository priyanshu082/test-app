"use client";
import React from "react";
import Link from "next/link";

const Navbar = () => {



  return (
    <div className="flex-col flex p-[1vw] w-[100vw]">
      <div className="w-[100%] px-[2vw] flex flex-row bg-white bg-opacity-50 justify-between text-black border-zinc-700 rounded-2xl">
        <Link href="/">
          <img src="/logo.svg" className="h-[5vw] w-[5vw]" />
        </Link>

        <div className="flex flex-row justify-center items-center gap-[3vw] text-[1.3vw] ml-[2vw]">
          <Link href="/">Home</Link>
          <Link href="/Info">Buisness Terms</Link>
          <Link href="/sharks">Sharks</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



