'use client'
import SharkCard from '../../components/SharkCard'
import { sharks } from '@/utils/data'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-[4vw] font-semibold'>
          {/* <img src='https://www.daalchini.co.in/blog/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-18-at-3.25.30-PM-1.jpeg' className='w-[70vw] rounded-3xl'/> */}
          Sharks
        </div>
        <div className='flex flex-row flex-wrap gap-[2vw] justify-center items-center mt-[1vw] p-[1vw]'>
          {sharks.map((data,index)=>(
            <div key={index}>
              <SharkCard data={data}/>
            </div>
          ))}
        </div> 

    </div>
  )
}

export default Page