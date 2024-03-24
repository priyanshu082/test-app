import React from 'react'

const SharkCard = ({data}) => {
  return (
    <div className='group cursor-pointer flex flex-row w-[31vw] text-black'>
        <div className='overflow-hidden rounded-2xl'>
            <img src={data.image} className='w-[20vw] cardImg group-hover:scale-[105%] transition-all duration-500 ease-in-out'/>
        </div>
        <div className='w-[33vw] bg-white group-hover:bg-opacity-100 transition-all duration-500 ease-in-out bg-opacity-90 flex flex-col p-[1vw] rounded-xl items-center justify-center'>
            <div className='text-center text-[2.2vw] font-semibold '>
              {data.name}
            </div>
            <div className='text-[0.9vw] text-center'>
              {data.title}
            </div>

            <div className='mt-[2vw] text-center text-[1.2vw] font-medium bg-blue-100 p-[1vw] rounded-2xl'>
             Net-{data.net_worth}
            </div>
        </div>
    </div>
  )
}

export default SharkCard