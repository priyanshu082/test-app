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
    <div className=" flex flex-col sm:flex-row sm:flex-wrap sm:justify-center sm:items-center gap-[3vw] overflow-scroll h-[100vh] pt-[2vw] scrollbar-none">
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
