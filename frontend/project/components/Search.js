export default function Search() {
  return (
    <div className="bg-[#E0E0E0] gap-3 p-4 flex flex-col justify-center pt-8">
      <div className=" text-3xl font-semibold text-[#606060]">
        Courses
      </div>
      <div className="flex items-center justify-between pr-6">
        <div className="bg-white px-1.5 py-2 rounded-md w-max space-y-1">
          <div className="w-8 rounded-sm h-1 bg-gray-600"></div>
          <div className="w-8 rounded-sm h-1 bg-gray-600"></div>
          <div className="w-8 rounded-sm h-1 bg-gray-600"></div>
        </div>
        <input type="text" className="h-9 rounded-md w-[70vw]" />
      </div>
    </div>
  );
}
