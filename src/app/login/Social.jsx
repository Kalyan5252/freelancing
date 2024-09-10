import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Social = () => {
  return (
    <>
      <div className="relative flex items-center justify-between gap-20 h-full">
        <div className="relative w-3/5 h-full rounded-md bg-white">
          <Image
            src="/images/image 8.png"
            alt=""
            height={900}
            width={900}
            className="min-w-[500px] min-h-[600px] rounded-md absolute top-[90px] -right-[140px]"
          />
        </div>

        <div className="w-4/6">
          <form action="" className="flex flex-col gap-1.8 m-4 gap-y-10">
            <div>
              <div>
                <h1 className="text-8xl -mt-17 mb-4">
                  Social<span className="text-orange-500">.</span>
                </h1>
              </div>
              <h1 className="text-3xl">Website</h1>
              <input
                type="text"
                className="bg-transparent border-b-[1px] outline-none border-white text-white p-2 w-full"
                placeholder="XXXXXXXXXXX"
              />
            </div>
            <div>
              <h1 className="text-3xl">Dribble</h1>
              <input
                type="password"
                className="bg-transparent border-b-[1px] outline-none border-white text-white p-2 w-full"
                placeholder="XXXXXXXXXX"
              />
            </div>
            <div>
              <h1 className="text-3xl">Instagram</h1>
              <input
                type="password"
                className="bg-transparent border-b-[1px] outline-none border-white text-white p-2 w-full"
                placeholder="XXXXXXXXXX"
              />
            </div>
            <div>
              <h1 className="text-3xl">Twitter</h1>
              <input
                type="text"
                className="bg-transparent border-b-[1px] outline-none border-white text-white p-2 w-full"
                placeholder="XXXXXXXXXXX"
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

export default Social;
