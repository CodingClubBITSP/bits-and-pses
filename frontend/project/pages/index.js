import "tailwindcss/tailwind.css";
import Search from "../components/Search";
import Huels from "../components/Huels";

export default function Home() {
  return (
    <div className="flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
      <Search />
      <Huels />
    </div>
  );
}
