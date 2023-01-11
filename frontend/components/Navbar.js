import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10 bg-[#E0E0E0] gap-5 px-6 py-2 justify-between flex">
      <div className="text-2xl font-semibold text-[#606060]">
        Pick Your Course
      </div>
      <Link href={"/login"}>
        <div className="text-xl font-semibold text-[#606060] hover:text-blue-500">
          Login
        </div>
      </Link>
    </div>
  );
}
