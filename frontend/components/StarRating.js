import { useState } from "react";

export default function StarRating({ title, validate = false }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="mb-4 mx-2 border-none cursor-pointer outline-none">
      <label className="font-bold text-xs"> {title} </label>
      <br />
      <div className=" ">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={
                index <= (hover || rating)
                  ? " px-2 bg-transparent border-none cursor-pointer outline-none text-[#2A9134]"
                  : "px-2 bg-transparent border-none cursor-pointer outline-none text-[#ccc]"
              }
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            >
              <span className="">&#9733;</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
