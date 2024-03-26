"use client";
import Link from "next/link";
import company from "../utils/companyDetails.json";
import CompanyDetail from "@/components/CompanyDetail";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

const page = () => {

  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="flex flex-col">

      <div className=" ml-[1vw]">
        <div className=" flex-col w-[55vw] rounded-lg mt-[3vw] ">
          <div className=" shadow-2xl bg-black bg-opacity-20 shadow-zinc-900 h-[7vw] rounded-xl"></div>

          {isSignedIn ? (
            <div className="flex flex-col pl-[3vw] bg-zinc-200 rounded-xl mt-[0.3vw]  shadow-xl px-[1vw]">
              <img
                src={user.imageUrl}
                className="h-[11vw] w-[11vw] rounded-full border-[0.3vw] mt-[-6vw]"
              />

              <div className=" flex flex-col justify-between w-[100%] px-[2vw] py-[1vw]">
                <div className="text-[2vw] font-semibold">{user.fullName}</div>
                <Link
                  href="/"
                  className="bg-blue-500 p-[10px] px-[15px] text-[1.2vw] text-white font-semibold h-fit rounded-full w-fit"
                >
                  <SignOutButton />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-row justify-center items-center gap-[2vw]">
              <Link
                href="/sign-up"
                className="bg-blue-400  py-[8px] px-[15px] rounded-3xl"
              >
                SignUp
              </Link>
            </div>
          )}
        </div>
        
      </div>

{isSignedIn && (
  <div className="flex flex-col h-[100vh] w-[100vw] overflow-scroll">
        <div className="flex flex-col p-[1.3vw] justify-center items-center ">
          {company.map((data, index) => (
            <div key={index}>
              <CompanyDetail data={data} />
            </div>
          ))}
        </div>
      </div>
)}
      
    </div>
  );
};

export default page;

