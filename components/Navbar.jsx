'use client'
import React from 'react'
import { useUser } from '@clerk/nextjs'
import { SignOutButton } from "@clerk/nextjs";
import Link from 'next/link';

const Navbar = () => {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
      }

  return (
    <div className='flex flex-row bg-transparent justify-center text-white'>

        <img src='/logo.svg' className='h-[100px] w-[100px]'/>

        

        <div className='flex flex-row justify-center items-center gap-[3vw] text-[1.5vw] ml-[2vw]'>
            <div>
                Home
            </div>
            <div>
                Home
            </div>
            <div>
                Home
            </div>
            
            <div>{user.fullName}</div>
      <div className='flex flex-row-reverse gap-[2vw] justify-center items-center' >
      <img src={user.imageUrl} className='h-[50px] w-[50px] rounded-full'/>
      {isSignedIn ? (
          <Link href='/'>
              <SignOutButton/>
         </Link>
      ) : (
      <div>
              
      </div>
      )}
      </div>




        </div>
    </div>
  )
}

export default Navbar