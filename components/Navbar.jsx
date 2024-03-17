"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();


  return (
    <div className="flex flex-row bg-transparent justify-around text-white border-b-[1px] border-zinc-600">
     <Link href='/'>
      <img src="/logo.svg" className="h-[100px] w-[100px]" />
     </Link>

      <div className="flex flex-row  justify-center items-center gap-[3vw] text-[1.3vw] ml-[2vw]">
        <div>Home</div>
        <div>AboutUs</div>
        <div>Service</div>

        {isSignedIn ? (
          <div className="flex flex-row justify-center items-center gap-[2vw]">
            <div>{user.fullName}</div>
            <img
              src={user.imageUrl}
              className="h-[50px] w-[50px] rounded-full"
            />
            <Link href="/">
              <SignOutButton />
            </Link>
          </div>
        ) : (
          <div className="flex flex-row justify-center items-center gap-[2vw]">
                 <Link href="/sign-up" className="bg-blue-400  py-[8px] px-[15px] rounded-3xl">SignUp</Link>
                 {/* <Link href="/sign-in">LogIn</Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
