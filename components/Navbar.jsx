"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

   console.log(user)
  return (
    <div className="flex-col flex p-[1vw] w-[100vw]">

    <div className="w-[100%] px-[2vw] flex flex-row bg-white bg-opacity-50 justify-between text-black border-zinc-700 rounded-2xl">
 
     <Link href='/'>
      <img src="/logo.svg" className="h-[5vw] w-[5vw]" />
     </Link>

      <div className="flex flex-row justify-center items-center gap-[3vw] text-[1.3vw] ml-[2vw]">
        <Link href='/'>Home</Link>
        <Link href='/Info'>Buisness Terms</Link>
        <Link href='/sharks'>Sharks</Link>
      </div>

    </div>
    

    <div className=" flex-col w-[55vw] rounded-lg mt-[3vw] ">

      <div className=" shadow-2xl bg-black bg-opacity-20 shadow-zinc-900 h-[7vw] rounded-xl">
        
      </div>

    {isSignedIn ? (
          
          <div className="flex flex-col pl-[3vw] bg-zinc-200 rounded-xl mt-[0.3vw]  shadow-xl px-[1vw]">

            <img
              src={user.imageUrl}
              className="h-[11vw] w-[11vw] rounded-full border-[0.3vw] mt-[-6vw]"
            />

          <div className=" flex flex-col justify-between w-[100%] px-[2vw] py-[1vw]">
            <div className="text-[2vw] font-semibold">{user.fullName}</div>
            <Link href="/" className="bg-blue-500 p-[10px] text-[1.2vw] text-white font-semibold h-fit rounded-full w-fit">
              <SignOutButton />
            </Link>
            </div>
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
