import { useState } from "react";

function makendisplay (s) {

  let nameArr = Object.keys(JSON.parse(s.Reviews))
  let tipsArr = Object.values(JSON.parse(s.Reviews))

  const obj = nameArr.map((name, index) => {
    return {key : [index] , Name: name, Tip: tipsArr[index] };
  });

  // console.log(nameArr)
  // console.log(tipsArr)
  // console.log(obj)

  const elem = obj.map( (el) => {
    return(
      <>
             <div className="text-[#2A9134] text-[20px] mx-10 my-2 font-semibold">
                 {el.Name}
              </div>
             <div className="bg-[#e0e0e0] mx-10 my-3 border-[#e0e0e0] border-1 rounded px-5 py-2 text-[14px] text-[#8A8A8A]">
               {el.Tip}
             </div>
         </>
    )
  }
)

return(elem)
  
  // return ( 
  //   <>
  //       <div className="text-[#2A9134] text-[20px] mx-10 my-2 font-semibold">
  //           {props.a}
  //        </div>
  //        <div className="bg-[#e0e0e0] mx-10 my-3 border-[#e0e0e0] border-1 rounded px-5 py-2 text-[14px] text-[#8A8A8A]">
  //           {props.b}
  //       </div>
  //   </>
  // )

}


export default function Review({ data }) {
  const [selected, setSelected] = useState(1);
  const active =
      "group p-5 w-[25%] items-center bg-white border-b-white font-semibold hover:bg-white hover:text-[#2A9134] border-2 hover:cursor-pointer rounded-t-md",
    other =
      "group p-5 w-[25%] items-center hover:bg-white hover:text-[#2A9134] border-2 hover:cursor-pointer rounded-t-md";

  return (
    <>
      <div className="bg-[#F9F9F9] w-[100%]  mr-5">
        <div className="flex items-center">
          <div
            className={selected == 3 ? active : other}
            onClick={() => {
              setSelected(3);
            }}
          >
            General Opn.
          </div>
          <div
            className={selected == 4 ? active : other}
            onClick={() => {
              setSelected(4);
            }}
          >
            General Tips
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-wrap py-4">
        <div className=" lg:flex lg:flex-col lg:flex-1">

        {data.Reviews ? makendisplay(data) : 'No Review'}

        </div>
      </div>
    </>
  );
}
// Object.keys(JSON.parse(data.Reviews)).map( el => {return <Name a = {el} b = {Object.values(JSON.parse(data.Reviews.replace('/' , '')))} />})