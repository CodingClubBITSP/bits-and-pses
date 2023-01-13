import "tailwindcss/tailwind.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";

// COMPONENTS
import Search from "../components/Search";
import Huels from "../components/Huels";
import Title from "../components/Title";
import Description from "../components/Description";
import Review from "../components/Review";
import ReviewCard from "../components/ReviewCard";
import Form from "../components/Form";
import Navbar from "../components/Navbar";
import HuelBig from "../components/HuelBig";

export default function Home() {
  const [units, setUnits] = useState(0),
    [name, setName] = useState("None");

  useEffect(() => {
    axios({
      method: "POST",
      url: "https://bits-and-pses.centralindia.cloudapp.azure.com/courseview/",
      data: { CourseID: "GS F243" },
    })
      .then((response) => {
        const data = response.data[0];

        setUnits(data.Units);
        setName(data.course_name);
      })
      .catch((err) => console.log(err.request));
  }, []);

  return (
    <div className="">
      <Head>
        <title>BITS & PSes</title>
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/39666368?s=200&v=4"
          type="image/x-icon"
        />
      </Head>

      <div className="md:hidden flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
        <Huels />
        <Title />
        <Description />
        <Review />
        <ReviewCard />
        <Form />
      </div>

      <div className="max-md:hidden flex w-full flex-col">
        <Navbar />

        <div className="flex">
          <div className="w-1/3">
            <HuelBig />
          </div>

          <div className="flex flex-col w-2/3">
            <Title name={name} units={units} />
            <Description />
            <Review />
            <ReviewCard />
          </div>
        </div>
      </div>
    </div>
  );
}
