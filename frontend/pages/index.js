import "tailwindcss/tailwind.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";

// COMPONENTS
import Huels from "../components/Huels";
import Title from "../components/Title";
import Description from "../components/Description";
import Review from "../components/Review";
import Navbar from "../components/Navbar";
import HuelBig from "../components/HuelBig";

export default function Home() {
  const [units, setUnits] = useState(0),
    [ID, setID] = useState("GS F243"),
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
    <>
      <Head>
        <title>BITS & PSes</title>
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/39666368?s=200&v=4"
          type="image/x-icon"
        />
      </Head>

      <div className="md:hidden font-poppins flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
        <Huels ID={ID} setID={setID} />
      </div>

      <div className="max-md:hidden font-poppins  overflow-hidden max-h-screen flex w-full flex-col">
        <Navbar />

        <div className="flex">
          <div className="max-h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-scroll w-1/3">
            <HuelBig ID={ID} setID={setID} />
          </div>

          <div className="max-h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-scroll flex flex-col w-2/3">
            <Title name={name} units={units} />
            <Description />
            <Review />
          </div>
        </div>
      </div>
    </>
  );
}
