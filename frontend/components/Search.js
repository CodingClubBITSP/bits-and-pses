import { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";

export default function Search() {
  const [open, setOpen] = useState(false);
  if (open) console.log("yes");

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
