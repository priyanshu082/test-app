"use client";
import React from "react";
import Link from "next/link";

const CompanyDetail = ({ data }) => {
  return (
    <div
      key={data.id}
      className="flex flex-col sm:flex-row bg-blue-300 bg-opacity-7 bg-opacity-100 shadow-lg items-center w-[80vw] sm:w-[98vw] sm:px-[20px] p-[10px] rounded-lg justify-center hover:scale-[101%] transition-all duration-1000 ease-out poppins text-zinc-800 mt-[4vw] sm:mt-[1.5vw] shadow-black"
    >
      <div className="sm:text-[2vw] text-[6vw] mb-[20px] text-center sm:text-start sm:mb-[0px] font-semibold sm:w-1/3 text-blue-950">
        {data.id}.{data.company}
      </div>

      <div className="flex flex-col gap-1 sm:w-1/3 text-[3.5vw] sm:text-[1.25vw]">
        <div>
          <span className="text-zinc-900 overflow-scroll font-bold ">Business:-</span>{" "}
          {data.business ? data.business : "N/A"}
        </div>

        <div className="flex flex-row">
          <span className="text-zinc-900 font-bold">Sectors:-</span>

          {data && data.sectors ? (
            <div className="flex flex-row">
              {data.sectors.map((items, index) => (
                <div key={index} className="mr-[5px]">
                  {items}
                </div>
              ))}
            </div>
          ) : (
            <div>N/A</div>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:w-1/3 gap-[2px] text-[3vw] sm:text-[1.25vw] mt-[20px] sm:mt-[0px]">
        <div className=" text-[4vw]  sm:text-[1.30vw] font-bold">
          Funding Detail
        </div>

        <div>
          <div className="flex flex-row gap-1">
            <span className="text-zinc-900">Amount:-</span>{" "}
            {data.sharkTankFunding.amount ? (
              <div>{data.sharkTankFunding.amount}</div>
            ) : (
              <div>N/A</div>
            )}
          </div>

          <div className="flex flex-row gap-1">
            <span className="text-zinc-900">equity:-</span>{" "}
            {data.sharkTankFunding.equity ? (
              <div>{data.sharkTankFunding.equity}</div>
            ) : (
              <div>N/A</div>
            )}
          </div>
          <div>
            <span className="text-zinc-900">Investors:-</span> Ashneer, Aman
          </div>
        </div>
      </div>

      <Link
        href={data.website}
        className="py-[7px] px-[3vw] sm:text-[1.5vw] text-[2vw] rounded-lg border-[1px] border-slate-200 hover:bg-slate-200 text-center transition-all duration-400 ease-in-out hover:scale-105 sm:w-1/8 hover:text-black sm:mt-0 mt-[20px]"
      >
        Website
      </Link>
    </div>
  );
};

export default CompanyDetail;
