import "tailwindcss/tailwind.css";
import Title from "../components/Title";
import Description from "../components/Description";

export default function Huel() {
  return (
    <div className="flex flex-col justify-center md:w-2/6 ">
      <Title />
      <Description />
    </div>
  );
}
