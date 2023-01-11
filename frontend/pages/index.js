import "tailwindcss/tailwind.css";
import React, { useEffect } from "react";
import Search from "../components/Search";
import Huels from "../components/Huels";
import Title from "../components/Title";
import Description from "../components/Description";
import Review from "../components/Review";
import ReviewCard from "../components/ReviewCard";
import Form from "../components/Form";
import useViewport from "../components/Responsive";
import Hamburger from "hamburger-react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HuelBig from "../components/HuelBig";
import axios from "axios";

export default function Home() {
  const width = useViewport();

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://bits-and-pses.centralindia.cloudapp.azure.com/courseview/",
      data: { CourseID: "GS F243" },
    }).then((response) => {
      console.log(response);
    });
  }, []);

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

      <div className="md:hidden flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
        <Search />
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
            <Title />
            <Description />
            <Review />
            <ReviewCard />
          </div>
        </div>
      </div>
    </>
  );
}
