import { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import axios from "axios";

export default function Search() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [found, setFound] = useState([]);

  if (open) console.log("yes");

  // const [data, setData] = useState([])
  // const url = "https://bits-and-pses.centralindia.cloudapp.azure.com/courselist/"
  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setData(response.data)
  //   })
  // }, []);

  // const filter = (e) => {
  //   const keyword = e.target.value;

  //   if (keyword !== '') {
  //     const results = data.filter((course_search) => {
  //       return course_search.course_name.startsWith(keyword);
  //     });
  //     setFound(results);
  //   } else {
  //     setFound(data);
  //   }
  //   setSearch(keyword);
  // };

  return (
    <div className="bg-[#E0E0E0] gap-5 p-4 flex flex-col justify-center pt-8">
      <div className="text-3xl font-semibold text-[#606060]">Courses</div>
      <div className="flex items-stretch gap-4 justify-between pr-6 pl-3">
        <div className="bg-white rounded-md">
          <Hamburger
            rounded
            color="#4b5563"
            size={32}
            distance="sm"
            onToggle={(toggled) => setOpen(toggled ? true : false)}
          />
        </div>
        <input type="text" className="p-2 rounded-md w-[70vw]" />
      </div>
    </div>
  );
}
