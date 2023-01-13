import { useState } from "react";
import { InputWithText } from "../components/InputWithText";
import StarRating from "../components/StarRating";

export default function FormValidation() {
  const [user, setUser] = useState({
    name: "",
    course: "",
    code: "",
    expRating: "",
    difficultyRating: "",
    gradingRating: "",
    feedback: "",
  });
  const [startValidation, setValidation] = useState(false);

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

  return (
    <div className="bg-[#F9F9F9] text-[#606060] display-block flex flex-col justify-center items-center overflow-hidden">
      <div className="flex flex-col mt-6 w-3/4 justify-center">
        <div className="flex w-full p-3 mt-4 flex-col mb-4 md:w-3/4">
          <span className="font-bold text-2xl mb-4">Feedback form</span>

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
          <InputWithText
            title={"Course Number"}
            onChange={() => {
              setUser({ ...user, code: event.target.value });
            }}
            validate={startValidation ? user.code === "" : false}
          />

          <div className="flex flex-col p-1 gap-1 justify-center items-center">
            <StarRating title={"Rate difficulty of this course"} />
            <StarRating title={"Personal experience with course"} />
            <StarRating title={"Rate grading of this course"} />
          </div>

          <InputWithText
            title={"Feedback"}
            onChange={() => {
              setUser({ ...user, feedback: event.target.value });
            }}
            validate={startValidation ? user.feedback === "" : false}
          />

          <div className="my-2">
            <button
              className="bg-[#0353A4] hover:bg-slate-800 text-white text-sm font-medium py-2 px-4 rounded "
              type="button"
              onClick={onClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
