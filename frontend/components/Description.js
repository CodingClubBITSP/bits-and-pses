import { InputWithText } from "../components/InputWithText";
import StarRating from "../components/StarRating";
import { useState } from "react";

export default function Description() {
  const [toggle, setToggle] = useState(false),
    [startValidation, setValidation] = useState(false),
    [user, setUser] = useState({
      name: "",
      course: "",
      code: "",
      expRating: "",
      difficultyRating: "",
      gradingRating: "",
      feedback: "",
    });

  const onClick = () => {
    setValidation(true);
    if (
      user.name === "" ||
      user.expRating === "" ||
      user.difficultyRating === "" ||
      user.gradingRating === "" ||
      user.feedback === ""
    )
      return;
  };

  return toggle ? (
    <div className="bg-[#F9F9F9] fixed text-[#606060] w-screen h-max min-h-screen top-12 left-0 display-block flex flex-col justify-center items-center overflow-hidden">
      <div className="flex w-full p-3 mt-4 flex-col mb-4 md:w-3/4">
        <span className="font-bold text-2xl mb-4">Feedback Form</span>

        <div className="flex gap-4 w-full">
          <InputWithText
            title={"Name"}
            onChange={() => {
              setUser({ ...user, name: event.target.value });
            }}
            validate={startValidation ? user.name === "" : false}
          />
          <InputWithText
            title={"Course Name"}
            onChange={() => {
              setUser({ ...user, course: event.target.value });
            }}
            validate={startValidation ? user.course === "" : false}
          />
        </div>

        <InputWithText
          title={"Course Number"}
          onChange={() => {
            setUser({ ...user, code: event.target.value });
          }}
          validate={startValidation ? user.code === "" : false}
        />

        <div className="flex justify-around items-center">
          <StarRating title={"Personal experience with course"} />
          <StarRating title={"Rate difficulty of this course"} />
          <StarRating title={"Rate grading of this course"} />
        </div>

        <InputWithText
          title={"Feedback"}
          onChange={() => {
            setUser({ ...user, feedback: event.target.value });
          }}
          validate={startValidation ? user.feedback === "" : false}
        />

        <div className="m-2 flex justify-start gap-12">
          <button
            className="bg-[#0353A4] border-black hover:bg-[#2A9134] border text-white text-sm font-medium p-2 rounded px-4 "
            type="button"
            onClick={onClick}
          >
            Submit Form
          </button>

          <button
            className="bg-white border-black hover:bg-[#2A9134] hover:text-white border text-sm font-medium p-2 rounded px-4 "
            type="button"
            onClick={() => setToggle(false)}
          >
            Return Back
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-[#F9F9F9] w-[100%] ">
      <div className="flex justify-end">
        <button
          className=" text-[#0353A4] w-auto p-1 m-2 mb-0 mr-4 font-bold  hover:text-teal-500"
          onClick={() => setToggle(true)}
        >
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

      <div className="shadow-sm m-4 rounded-xl bg-[#E0E0E0] p-4 lg:px-6">
        <div className=" text-2xl text-[#606060] lg:px-4">
          What is it about ?
        </div>
        <div className="text-[14px] text-[#8A8A8A] lg:px-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore ex suscipit ipsa consectetur laudantium delectus, repudiandae numquam tenetur dignissimos, doloremque sit ducimus, officiis aperiam doloribus explicabo dolorum natus quam?
        </div>
      </div>

      <div className=" lg:flex lg:flex-row">
        <div className="bg-white shadow-sm flex justify-center items-center m-4 rounded-xl lg:flex-1">
          <div className="flex rounded-full border-4 border-[#9B9B9B] h-[58px] w-[60px] m-3 text-2xl items-center justify-center text-[#2A9134]">
            {" "}
            <div>5.0</div>
          </div>
          <span className="flex items-center text-[#8A8A8A] p-4 text-[14px] w-3/4">
            Overall experience of the course
          </span>
        </div>

        <div className="bg-white shadow-sm flex justify-center items-center m-4 rounded-xl lg:flex-row-reverse lg:flex-1">
          <span className="flex items-center justify-end text-[#8A8A8A] p-4 text-[14px] w-3/4">
            Liteness of the course
          </span>
          <span className="flex rounded-full border-4 border-[#9B9B9B] h-[58px] w-[60px] m-3 text-2xl items-center justify-center text-[#2A9134] ">
            5.0
          </span>
        </div>

        <div className="bg-white shadow-sm flex justify-center items-center m-4 rounded-xl lg:flex-1">
          <span className="flex rounded-full border-4 border-[#9B9B9B] h-[58px] w-[60px] m-3 text-2xl items-center justify-center text-[#2A9134]">
            5.0
          </span>
          <span className="flex items-center text-[#8A8A8A] p-4 text-[14px] w-3/4">
            Satisfaction with the grading
          </span>
        </div>
      </div>
    </div>
  );
}
