import "tailwindcss/tailwind.css";
import Search from "../components/Search";
import Huels from "../components/Huels";
import Title from "../components/Title";
import Description from "../components/Description";
import Review from "../components/Review";
import ReviewCard from "../components/ReviewCard";
import Form from "../components/Form"

export default function Home() {
  return (
    <div className="flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
    {/* <div className="flex flex-col justify-start w-full min-h-screen ">  */}
      <Search />
      <Huels /> 
      <Title />
      <Description />
      <Review />
      <ReviewCard />
      <Form />
    </div>
  );
}
