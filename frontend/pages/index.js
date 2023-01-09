import "tailwindcss/tailwind.css";
import Search from "../components/Search";
import Huels from "../components/Huels";
import Title from "../components/Title";
import Description from "../components/Description";
import Review from "../components/Review";
import ReviewCard from "../components/ReviewCard";
import Form from "../components/Form"
import useViewport from "../components/Responsive";

export default function Home() {
  const width = useViewport();
  const breakpoint = 768;

  // return width < breakpoint ? <Search /> : <Title />
  return width < breakpoint ? 
    (<div className="flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
    {/* <div className="flex flex-col justify-start w-full min-h-screen ">  */}
      <Search />
      <Huels /> 
      <Title />
      <Description />
      <Review />
      <ReviewCard />
      <Form />
    </div>)
  : <div className="flex w-full flex-col">
    <div className="sticky top-0 z-10"><Search /></div>
    <div className="flex">
      <div className="w-1/4"><Huels /></div>
      <div className="flex flex-col w-3/4">
        <Title />
        <Description />
        <Review />
        <ReviewCard />
        </div>
    </div>
  </div>
}
