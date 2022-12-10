import Desc from "../components/Desc";
import Title from "../components/Title"
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <div className="flex flex-col justify-center md:w-2/6 ">
      <Title />
      <Desc />
    </div>
  )
}