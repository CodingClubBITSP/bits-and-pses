export default function Description() {
  return (
    <div className="bg-[#F9F9F9] w-[100%] ">
      <div className="flex justify-end">
        <button className=" text-[#0353A4] w-auto p-1 m-2 mb-0 mr-4 font-bold  hover:text-teal-500">
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
        <div className=" text-2xl text-[#606060] lg:px-4">What is it about.</div>
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
