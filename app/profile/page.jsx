'use client'
import { useUser } from '@clerk/nextjs'
import { SignOutButton } from "@clerk/nextjs";
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import company from '../../utils/companyDetails.json'
import CompanyDetail from '@/components/CompanyDetail';

const page = () => {

const { isLoaded, isSignedIn, user } = useUser();
const [data, setData] = useState({
  username:"",
  email:"",
  name:"",
  imageURL:""
})
const [loading,setLoading]=useState(false)

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  if(isLoaded){
    const handleData=async()=>{

      try {
        const response=await axios.post('/api/user/signup',data)
        console.log(response.data.message)
      } catch (error) {
        
      }
    }
  }
  console.log(user)
 
  return ( 
    <div className='flex flex-col'>
    <div className='w-[100vw] flex flex-row justify-end'>
      
        <div className='flex flex-col pt-[30px] mr-[40px]' >
        <img src={user.imageUrl} className='h-[70px] w-[70px] rounded-full'/>
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

    <div className='flex flex-col justify-center mt-[30px]'>
      {company.map((data)=>(
        <div key={data.id} className='flex justify-center mt-[20px]'>
          <CompanyDetail data={data}/>
          </div>
      ))}
    </div>

    </div>
  )
}

export default page