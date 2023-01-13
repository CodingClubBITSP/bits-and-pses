import "tailwindcss/tailwind.css";
import Title from "../../components/Title";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import Description from "../../components/Description";
import Review from "../../components/Review";
import Form from "../../components/Form";

export default function Huel() {
  const router = useRouter(),
    { huel } = router.query;

  const [units, setUnits] = useState(0),
    [ID, setID] = useState(huel),
    [name, setName] = useState("- NA -");

  useEffect(() => {
    search(ID);
  }, [ID]);

  const search = (ID) =>
    axios({
      method: "POST",
      url: "https://bits-and-pses.centralindia.cloudapp.azure.com/courseview/",
      data: { CourseID: ID },
    })
      .then((response) => {
        const data = response.data[0];

        setUnits(data.Units);
        setName(data.course_name);
      })
      .catch((err) => console.log("ERROR : ", err.request));

  return (
    <div className="flex flex-col justify-center md:w-2/6 ">
      <Title name={name} units={units} id={ID} />
      <Description />
      <Review />
      <Form />
    </div>
  );
}
