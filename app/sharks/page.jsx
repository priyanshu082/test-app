'use client'
import SharkCard from '../../components/SharkCard'
import { sharks } from '@/utils/data'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='text-[10vw] sm:text-[4vw] font-semibold'>
          Sharks
        </div>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-[2vw] justify-center items-center mt-[2vw] sm:mt-[1vw] p-[1vw]'>
          {sharks.map((data,index)=>(
            <div key={index} className=''>
              <SharkCard data={data}/>
            </div>
          ))}
        </div> 

    </div>
  )
}

export default Page