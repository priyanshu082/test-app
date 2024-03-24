import React from 'react'

const InfoCard = ({data}) => {
  return (
    <div className='flex flex-col bg-white bg-opacity-90 hover:bg-opacity-100 hover:scale-[101%] transition-all duration-500 ease-in-out h-[28vw] p-[2vw] w-[28vw] rounded-2xl shadow-lg shadow-blue-300'>
        <div  className='text-[2.5vw] font-bold leading-[2.8vw] mb-[2vw]'>
            {data.name}
        </div>
        <div className='font-light text-[1.4vw] '>
            {data.description}
        </div>
    </div>
  )
}

export default InfoCard