import React from 'react'

const InfoCard = ({data}) => {
  return (
    <div className='flex flex-col bg-white bg-opacity-90 hover:bg-opacity-100 hover:scale-[101%] transition-all duration-500 ease-in-out sm:h-[28vw] p-[3vw] sm:p-[2vw] w-[75vw] sm:w-[28vw] rounded-2xl shadow-lg shadow-blue-300 h-fit min-h-[30vw]'>
        <div  className='text-[5vw] sm:text-[2.5vw] font-bold leading-[4.5vw] sm:leading-[2.8vw] mb-[2vw]'>
            {data.name}
        </div>
        <div className='font-light text-[2.5vw] sm:text-[1.4vw] '>
            {data.description}
        </div>
    </div>
  )
}

export default InfoCard