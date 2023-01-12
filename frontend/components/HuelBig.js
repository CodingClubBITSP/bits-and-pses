import { useEffect, useState } from "react";
import axios from "axios";

export default function HuelBig() {
  const [data, setData] = useState({})
  const url = "https://bits-and-pses.centralindia.cloudapp.azure.com/courselist/"
  useEffect(() => {
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
  }, []);

  return (
    <div className="bg-[#F9F9F9] min-h-full w-full">
      <input
        type="text"
        className="p-2 border-2 rounded-md m-2 w-[calc(33vw-1rem)]"
      />

      <div className="flex justify-end">
        <button className=" text-[#0353A4] font-bold w-auto p-1 m-2 mb-0 mr-4  hover:text-teal-500">
          FILTER
        </button>
      </div>
      {data.map((course) => (
        <div key={course} className=" bg-white gap-2 shadow-sm flex-col flex justify-center items-start p-4 m-4 rounded-xl">
          <div className="text-[#666666] font-semibold text-lg">
            {course.course_name}
          </div>
        <div className="flex gap-2">
          <div className="px-1 text-[#2A9134] font-semibold bg-[#E9F4EA]">
            {course.CourseID}
          </div>
          <div className="px-1 text-[#89B6FF] font-semibold bg-[#EBF3FF]">
            Humanity Elective
          </div>
        </div>
        </div>
      ))}
    </div>
  );
}
