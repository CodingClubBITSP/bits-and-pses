import axios from "axios";
import { useState , useEffect } from "react";

function InputWithText({
  title,
  description,
  defaultValue,
  onChange,
  type,
  validate = false,
  min,
}) {
  const className = validate
    ? "border-2 border-red-200 rounded w-full py-1 px-2 text-black leading-tight focus:outline-double focus:border-gray-200"
    : "border-2 border-gray-200 rounded w-full py-1 px-2 text-black leading-tight focus:outline-double focus:border-gray-200";
  return (
    <div className="mb-4 w-full">
      <label className="font-bold text-xs"> {title} </label>
      <br />
      <span className="text-sm">{description}</span>
      <div>
        <input
          className={className}
          id="inline-full-name"
          type={type}
          defaultValue={defaultValue}
          onChange={onChange}
          min={min}
        />
        {validate ? (
          <span className="text-red-500">This field is mandatory</span>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function Dropdown (flex_dir = "row") {
  const [list , setlist] = useState([]);
  const [SelectedCourse , setSelectedCourse] = useState({ NAME: '' , CODE : '' });

  useEffect( () =>{

    axios({
      method: "GET",
      url: "https://bits-and-pses.duckdns.org/courselist",
      headers: {Authorization: ''}
    })
    .then(res => {
      const data = res.data;
      setlist(data)
    })
  } , [] )

  function autoselectcode (e) {
    list.map( el => {
      el.course_name === e.target.value ? setSelectedCourse({ NAME:e.target.value , CODE:el.CourseID }) : null
    } )
  }

  function autoselectname (e) {
    list.map( el => {
      el.CourseID === e.target.value ? setSelectedCourse({ NAME: el.course_name, CODE:e.target.value }) : null
    } )
  }
  
  return [(
    <div style={{ display: "flex", flexDirection: flex_dir, width: "100%" }}>
      <div className="mr-8">

        <label>Select a Course :</label>

        <select className="border-2 border-gray-200 rounded w-full py-1 px-2 text-black leading-tight focus:outline-double focus:border-gray-200"
          value={SelectedCourse.NAME}
          onChange={ e => autoselectcode(e)}
        >
          <option value="">Select an option</option>
          {list.map(item => (
            <option key={item.id} value={item.course_name}>
              {item.course_name}
            </option>
          ))}
        </select>
        {(<p>Selected item: {}</p>)}
      </div>

      <div>
        <label>Select Course No. :</label>
        <select
          className="border-2 border-gray-200 rounded w-full py-1 px-2 text-black leading-tight focus:outline-double focus:border-gray-200"
          value={SelectedCourse.CODE}
          onChange={ e => autoselectname(e)}
        >
          <option value="">Select an option</option>
          {list.map(item => (
            <option key={item.id} value={item.CourseID}>
              {item.CourseID}
            </option>
          ))}
        </select>
        {<p>Selected item: </p>}
      </div>
    </div>
  ) , SelectedCourse.NAME , SelectedCourse.CODE]
}

export {InputWithText , Dropdown}