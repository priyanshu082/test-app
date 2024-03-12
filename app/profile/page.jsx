'use client'
import { useAuth,useUser } from '@clerk/nextjs'
import { SignOutButton } from "@clerk/nextjs";
import Link from 'next/link';

const page = () => {

const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }
  console.log(user)
 
  return (
    <div className='w-[100vw] flex flex-row justify-end'>
        <div className='flex flex-col pt-[30px] mr-[40px]' >
        <img src={user.imageUrl} className='h-[100px] w-[100px] rounded-full'/>
        <div>{user.fullName}</div>
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
  )
}

export default page