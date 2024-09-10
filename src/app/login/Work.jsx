import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

const Work = () => {
  return (
    <>
      <div className="relative flex items-center justify-between gap-20 h-full">
        <div className="relative w-3/5 h-full rounded-md bg-white">
          <Image
            src="/images/image 9.png"
            alt=""
            height={900}
            width={900}
            className="min-w-[500px] min-h-[600px] rounded-md absolute top-[90px] -right-[140px]"
          />
        </div>

        <div className="w-4/6">
          <form action="" className="flex flex-col gap-1.8 m-4 gap-y-5">
            <div>
              <h1 className="text-8xl -mt-17 mb-4">
                Work<span className="text-orange-500">.</span>
              </h1>
            </div>
            <div>
              <h1 className="text-3xl">Image</h1>
              <h1 className="mb-2">Upto 5 each 10 mb 1080px </h1>
              <div className="w-[600px] h-[200px] bg-[#1A1919] gap-2 rounded-md outline-dashed items-center flex flex-col justify-center">
                <MdOutlineFileUpload size={30} />
                <p className="">Upload the picture</p>
              </div>
            </div>

            <div>
              <h1 className="text-3xl">Video</h1>
              <h1
                className="
              mb-2"
              >
                Upto 50 mb{" "}
              </h1>
              <div className="w-[600px] h-[200px] bg-[#1A1919] gap-4 rounded-md outline-dashed items-center flex flex-col justify-center">
                <MdOutlineFileUpload size={30} />
                <p>Upload the video</p>
              </div>
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

export default Work;
