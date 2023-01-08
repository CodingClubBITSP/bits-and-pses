import { InputWithText } from "../components/InputWithText";
import StarRating from "../components/StarRating";
import { useState } from "react";

export default function FormValidation() {

    const [user, setUser] = useState({ Name: '', course: "", code: "", expRating: '', difficultyRating: '', gradingRating: '', Feedback: '' })
    const [startValidation, setValidation] = useState(false)

    const onClick = () => {
        setValidation(true)
        if (user.Name === '' || user.expRating === '' || user.difficultyRating === '' || user.gradingRating === '' || user.Feedback === '' ) return
    }

   return (
   <div className="bg-[#F9F9F9] text-[#606060] display-block flex flex-col justify-center items-center overflow-hidden">
       <div className="flex flex-col mt-6 w-3/4 justify-center">
       <div className="flex w-full p-3 mt-4 flex-col mb-4 md:w-3/4">
               <span className="font-bold text-2xl mb-4">Feedback form</span>

               <InputWithText title={"Name"} onChange={() => { setUser({ ...user, Name: event.target.value }) }} validate={startValidation ? user.Name === '' : false} />
               <InputWithText title={"Course Name"} onChange={() => { setUser({ ...user, course: event.target.value }) }} validate={startValidation ? user.course === '' : false} />
               <InputWithText title={"Course Number"} onChange={() => { setUser({ ...user, code: event.target.value }) }} validate={startValidation ? user.code === '' : false} />

                <StarRating title={"Rate your experience with course"} />
                <StarRating title={"Rate difficulty of course"} />
                <StarRating title={"Rate grading of course"} />

                <InputWithText title={"Feedback"} onChange={() => { setUser({ ...user, Feedback: event.target.value }) }} validate={startValidation ? user.Feedback === '' : false} />

               <div className="m-2">
                   <button className="bg-[#0353A4] hover:bg-slate-800 text-white text-sm font-medium p-2 rounded " type="button" onClick={onClick} >
                       <>Submit</>
                   </button>
               </div>
           </div>
       </div>
   </div>)
}
