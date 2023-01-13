import { useState } from "react";

export default function Review() {
  const [resp, setResp] = useState("neutral");

  return (
    <>
      <div className="bg-[#F9F9F9] w-[100%]  mr-5">
        <div className="flex items-center">
          <div className="group p-5 w-[25%] items-center bg-white border-b-0  font-semibold  hover:text-[#2A9134] border-2 hover:cursor-pointer rounded-t-md">
            Positives
          </div>
          <div className="group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-2 hover:cursor-pointer rounded-t-md">
            Neutral
          </div>
          <div className="group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-2 hover:cursor-pointer rounded-t-md">
            Negatives
          </div>
          <div className="group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-2 hover:cursor-pointer rounded-t-md">
            Tips
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-wrap py-4">
        <div className=" lg:flex lg:flex-col lg:flex-1">
          <div className="text-[#2A9134] text-[20px] mx-10 my-2 font-semibold">
            NAME
          </div>
          <div className="bg-[#e0e0e0] mx-10 my-3 border-[#e0e0e0] border-1 rounded px-5 py-2 text-[14px] text-[#8A8A8A]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe esse
            reprehenderit hic quod. Debitis, aliquam voluptatibus? Dolor
            asperiores, modi porro quia recusandae repudiandae quod nemo ratione
            rerum labore, obcaecati laborum?
          </div>
        </div>

        <div className=" lg:flex lg:flex-col lg:flex-1">
          <div className="text-[#2A9134] text-[20px] mx-10 my-2 font-semibold">
            NAME
          </div>
          <div className="bg-[#e0e0e0] mx-10 my-3 border-[#e0e0e0] border-1 rounded px-5 py-2 text-[14px] text-[#8A8A8A]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe esse
            reprehenderit hic quod. Debitis, aliquam voluptatibus? Dolor
            asperiores, modi porro quia recusandae repudiandae quod nemo ratione
            rerum labore, obcaecati laborum?
          </div>
        </div>

        <div className=" lg:flex lg:flex-col lg:flex-1">
          <div className="text-[#2A9134] text-[20px] mx-10 my-2 font-semibold">
            NAME
          </div>
          <div className="bg-[#e0e0e0] mx-10 my-3 border-[#e0e0e0] border-1 rounded px-5 py-2 text-[14px] text-[#8A8A8A]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe esse
            reprehenderit hic quod. Debitis, aliquam voluptatibus? Dolor
            asperiores, modi porro quia recusandae repudiandae quod nemo ratione
            rerum labore, obcaecati laborum?
          </div>
        </div>
      </div>
    </>
  );
}
