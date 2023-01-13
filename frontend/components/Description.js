import { InputWithText } from "../components/InputWithText";
import StarRating from "../components/StarRating";
import { useState } from "react";


export default function Description() {
  const [toggle, setToggle] = useState(false);

  const [user, setUser] = useState({
    Name: "",
    course: "",
    code: "",
    expRating: "",
    difficultyRating: "",
    gradingRating: "",
    Feedback: "",
  });
  const [startValidation, setValidation] = useState(false);

  const onClick = () => {
    setValidation(true);
    if (
      user.Name === "" ||
      user.expRating === "" ||
      user.difficultyRating === "" ||
      user.gradingRating === "" ||
      user.Feedback === ""
    )
      return;
  };


  return (
    <div className="bg-[#F9F9F9] w-[100%] ">

    {toggle && <div className="bg-[#F9F9F9] fixed text-[#606060] w-full h-full top-0 left-0 display-block flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col mt-6 w-3/4 justify-center">
        <div className="flex w-full p-3 mt-4 flex-col mb-4 md:w-3/4">
          <span className="font-bold text-2xl mb-4">Feedback form</span>

          <InputWithText
            title={"Name"}
            onChange={() => {
              setUser({ ...user, Name: event.target.value });
            }}
            validate={startValidation ? user.Name === "" : false}
          />
          <InputWithText
            title={"Course Name"}
            onChange={() => {
              setUser({ ...user, course: event.target.value });
            }}
            validate={startValidation ? user.course === "" : false}
          />
          <InputWithText
            title={"Course Number"}
            onChange={() => {
              setUser({ ...user, code: event.target.value });
            }}
            validate={startValidation ? user.code === "" : false}
          />

          <StarRating title={"Rate your experience with course"} />
          <StarRating title={"Rate difficulty of course"} />
          <StarRating title={"Rate grading of course"} />

          <InputWithText
            title={"Feedback"}
            onChange={() => {
              setUser({ ...user, Feedback: event.target.value });
            }}
            validate={startValidation ? user.Feedback === "" : false}
          />

          <div className="m-2 flex justify-start gap-12">
            <button
              className="bg-[#0353A4] hover:bg-[#2A9134]  text-white text-sm font-medium p-2 rounded px-4 "
              type="button"
              onClick={onClick}
            >
              <>Submit</>
            </button>
            <button
              className="bg-white hover:bg-[#2A9134] hover:text-white text-[#8A8A8A] border-2 text-sm font-medium p-2 rounded px-4 "
              type="button"
              onClick={() => setToggle(false)}
            >
              <>Cancel</>
            </button>
          </div>
        </div>
      </div>
    </div>}

      
      <div className="flex justify-end">
        <button className=" text-[#0353A4] w-auto p-1 m-2 mb-0 mr-4 font-bold  hover:text-teal-500" onClick={() => setToggle(true)}>
          GIVE FEEDBACK
        </button>
      </div>
      <div className=" bg-white shadow-sm flex m-4 rounded-xl lg:px-10">
        <span className="flex justify-center items-center p-4 pr-0 text-[#2A9134] text-4xl">
          4 <span className="text-base pl-0 m-0">th</span>
        </span>
        <span className="flex items-center justify-center text-[#8A8A8A] p-4 text-[14px]">
          most popular HuEl by PR number median
        </span>
      </div>
      <div className="shadow-sm m-4 rounded-xl bg-[#E0E0E0] p-4 lg:px-10">
        <div className=" text-2xl text-[#606060] lg:px-4">
          What is it about.
        </div>
        <div className="text-[14px] text-[#8A8A8A] lg:px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          adipisci aut quia. Sequi, repellendus culpa? Qui laudantium eligendi
          provident possimus enim fugit neque ipsam optio.
        </div>
      </div>
      <div className=" lg:flex lg:flex-row">
        <div className="bg-white shadow-sm flex justify-center items-center m-4 rounded-xl lg:flex-1">
          <div className="flex rounded-full border-4 border-[#9B9B9B] h-[58px] w-[58px] m-3 text-2xl items-center justify-center text-[#2A9134]">
            {" "}
            <div>5.0</div>
          </div>
          <span className="flex items-center text-[#8A8A8A] p-4 text-[14px] w-3/4">
            Overall expereinceof the course
          </span>
        </div>
        <div className="bg-white shadow-sm flex justify-center items-center m-4 rounded-xl lg:flex-row-reverse lg:flex-1">
          <span className="flex items-center justify-end text-[#8A8A8A] p-4 text-[14px] w-3/4">
            How lite was the course
          </span>
          <span className="flex rounded-full border-4 border-[#9B9B9B] h-[58px] w-[58px] m-3 text-2xl items-center justify-center text-[#2A9134] ">
            5.0
          </span>
        </div>
        <div className="bg-white shadow-sm flex justify-center items-center m-4 rounded-xl lg:flex-1">
          <span className="flex rounded-full border-4 border-[#9B9B9B] h-[58px] w-[58px] m-3 text-2xl items-center justify-center text-[#2A9134]">
            5.0
          </span>
          <span className="flex items-center text-[#8A8A8A] p-4 text-[14px] w-3/4">
            How satisfied were students with the grading
          </span>
        </div>
      </div>
    </div>
  );
}
