"use client";
import Link from "next/link";
import company from "../utils/companyDetails.json";
import CompanyDetail from "@/components/CompanyDetail";
import { useUser } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";

const Page = () => {
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex flex-col">
      <div className=" ml-[1vw] flex justify-center sm:justify-start">
        <div className=" flex-col w-[82vw] sm:w-[55vw] rounded-lg mt-[3vw] ">
          <div className=" shadow-2xl bg-black bg-opacity-20 shadow-zinc-900 h-[12vw] sm:h-[7vw] rounded-xl"></div>

          {isSignedIn ? (
            <div className="flex flex-col pl-[3vw] bg-zinc-200 rounded-xl mt-[0.3vw] shadow-xl px-[1vw]">
              <img
                src={user.imageUrl}
                className="sm:h-[11vw] sm:w-[11vw] h-[20vw] w-[20vw] rounded-full border-[0.3vw] mt-[-6vw]"
              />

              <div className=" flex flex-col gap-[1vw] w-[100%] px-[2vw] py-[1vw]">
                <div className="sm:text-[2vw] text-[4vw] font-semibold">{user.fullName}</div>
                <Link
                  href="/"
                  className="bg-blue-500 p-[1vw] px-[2vw] text-[2vw] sm:text-[1.2vw] text-white font-semibold rounded-full w-fit "
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

export default Page;
