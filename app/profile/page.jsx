"use client";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import company from "../../utils/companyDetails.json";
import CompanyDetail from "@/components/CompanyDetail";
import Navbar from "@/components/Navbar";

const page = () => {
  

  return (
    <div className="flex flex-col h-[100vh] w-[100vw] overflow-scroll">
      <div className="flex flex-col p-[1.3vw] justify-center items-center ">
        {company.map((data,index) => (
          <div key={index}>
            <CompanyDetail data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
