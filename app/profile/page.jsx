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
  const { isLoaded, isSignedIn, user } = useUser();
  // const [data, setData] = useState({
  //   username:"",
  //   email:"",
  //   name:"",
  //   imageURL:""
  // })

  //   if(isLoaded){
  //     const handleData=async()=>{

  //       try {
  //         const response=await axios.post('/api/user/signup',data)
  //         console.log(response.data.message)
  //       } catch (error) {

  //       }
  //     }
  //   }
  //   console.log(user)

  return (
    <div className="flex flex-col h-[100vh] overflow-scroll">
      <div className="flex flex-col p-[40px] mt-[5vh] ">
        {company.map((data, index) => (
          <div key={index} className="flex justify-center mt-[30px]">
            <CompanyDetail data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
