'use client'
import React from "react";
import { terms } from "@/utils/data";
import InfoCard from "@/components/InfoCard";

const Page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-[1vw] mt-[1vw]'>
        <div className='text-center text-[4vw] font-bold '>
            Terms To Know
        </div>
    <div className=" flex flex-row flex-wrap justify-center items-center gap-[3vw] overflow-scroll h-[80vw] pt-[2vw] scrollbar-none">
      {terms.map((data, index) => (
        <div key={index}>
            <InfoCard data={data}/>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Page;
