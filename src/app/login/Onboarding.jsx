import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Onboarding = () => {
  return (
    <>
      <div className="m-5 flex items-center justify-between gap-20 h-full">
        <div className="w-3/5 bg-white h-full rounded-md relative ">
          <Image
            src="/images/image 6.png"
            alt=""
            height={900}
            width={900}
            className="min-w-[500px] min-h-[600px] rounded-md absolute top-[90px] -right-[140px]"
          />
        </div>

        <div className="w-4/6">
          <form action="" className="flex flex-col gap-1.8 m-4 gap-y-10">
            <div>
              <h1 className="text-3xl">Email</h1>
              <input
                type="text"
                className="bg-transparent border-b-[1px] outline-none border-white text-white p-2 w-full"
                placeholder="your@mail.com"
              />
            </div>
            <div>
              <h1 className="text-3xl">Pass code</h1>
              <input
                type="password"
                className="bg-transparent border-b-[1px] outline-none border-white text-white p-2 w-full"
                placeholder="***************"
              />
            </div>
            <div>
              <h1 className="text-3xl">Conform Pass code</h1>
              <input
                type="password"
                className="bg-transparent border-b-[1px] outline-none border-white text-white p-2 w-full"
                placeholder="***************"
              />
            </div>
            <button className="p-2  border-[1px] border-white outline-none rounded-md flex items-center justify-center gap-2 max-w-[10rem] hover:bg-white transition-all ease-in hover:text-black">
              Submit
              <FaArrowRight />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
