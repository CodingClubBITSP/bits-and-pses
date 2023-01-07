import { useState } from "react";

export default function Review() {
  const [resp, setResp] = useState("neutral");
  
  return (
    <>
      <div className="bg-[#F9F9F9] w-[100%]  mr-5">
        <div className="flex items-center ">
          <div className="group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-1 rounded-md">
            Positives
          </div>
          <div className="group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-1 rounded-md">
            Neutral
          </div>
          <div className="group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-1 rounded-md">
            Negatives
          </div>
          <div className="group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-1 rounded-md">
            Tips
          </div>
        </div>
      </div>
    </>
  );
}
