'use client'
import React from 'react'
import Link from 'next/link'

const CompanyDetail = ({data}) => {
  return (
    <div className='flex flex-row h-[130px] bg-zinc-700 items-center w-[90vw] text-white px-[20px] rounded-lg justify-between'>


        <div className='text-[30px] font-semibold w-1/3'>
        {data.id}. {data.company}
        </div>


       <div className='flex flex-col gap-1 w-1/3'>
    <div>
        <span className='text-cyan-500 overflow-scroll '>Business:-</span> { data.business ? data.business : "N/A"}
    </div>

    <div className='flex flex-row'>
    <span className='text-cyan-500'>Sectors:-</span>
   
    { data && data.sectors ? (<div className='flex flex-row'>
        {data.sectors.map((items)=>(
            <div className='mr-[5px]'>{items}</div>
        ))}
    </div>
    ) : (
        <div>
            N/A
        </div>
    )
    
    }

    </div>
       </div>
    

    <div className='flex flex-col w-1/3 gap-[2px]'>
        <div className='text-white text-[18px] font-bold'>
       Funding Detail
        </div>

        <div>
            <div className='flex flex-row gap-1'>
                <span className='text-cyan-500'>Amount:-</span> {data.sharkTankFunding.amount ? (
                    <div>
                    {data.sharkTankFunding.amount}
                </div>
                ):(
                    <div>
                    N/A
                </div>  
                )} 
            </div>

            <div className='flex flex-row gap-1'>
                <span className='text-cyan-500'>equity:-</span> {data.sharkTankFunding.equity ? (
                    <div>
                        {data.sharkTankFunding.equity}
                    </div>
                ): (
                    <div>
                        N/A
                    </div>
                )}
            </div>
            <div >
                <span className='text-cyan-500'>Investors:-</span> Ashneer, Aman
            </div>

        </div>
    </div>

    <Link href={data.website} className='py-[7px] px-[30px]  rounded-lg border-[1px] border-cyan-500 hover:bg-cyan-500 transition-all duration-400 ease-in-out  hover:scale-105 w-1/8'>
        Website
    </Link>

        
    </div>
  )
}

export default CompanyDetail