import "tailwindcss/tailwind.css";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CookiesProvider } from "react-cookie";
import ReactLoading from "react-loading";

// COMPONENTS
import Huels from "../components/Huels";
import Title from "../components/Title";
import Description from "../components/Description";
import Review from "../components/Review";
import Navbar from "../components/Navbar";
import HuelBig from "../components/HuelBig";

export default function Home() {
  const [ID, setID] = useState(),
    [data, setData] = useState({
      CourseID: "GS FXXX",
      CourseName: "- NA -",
      IC_Name: "None",
      Units: 0,
      grade_sat: 0,
      liteness: 0,
      overall_exp: 0,
      pr: 0,
    });

  useEffect(() => {
    search(ID);
  }, [ID]);

  const search = id =>
    axios({
      method: "POST",
      url: "https://bits-and-pses.duckdns.org/courseview/",
      data: { CourseID: id },
      headers: {Authorization: ''}
    })
      .then(response => setData(response.data[0]))
      .catch(err => console.log("ERROR : ", err.request));

      const [isLoading,setIsLoading] = useState(true);
      useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1250);
      });

  return (
    <GoogleOAuthProvider clientId="106941893426-tltrlh5rr2ihbodkr4p319780rjc790n.apps.googleusercontent.com">
      <CookiesProvider>
      <Head>
        <title>BITS & PSes</title>
        <link
          rel="shortcut icon"
          href="https://avatars.githubusercontent.com/u/39666368?s=200&v=4"
          type="image/x-icon"
        />
      </Head>
      {isLoading == true ?
      <div className="loadingScreen" style={{
        height : 660,
        display : "flex",
        alignItems : "center",
        justifyContent : "center"
      }}>
          <ReactLoading type="spin" color="grey"height={200} width={200}/> </div>: (<div>
            <div className="md:hidden font-poppins flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
        <Huels setID={setID} />
      </div>
      <div className="md:hidden font-poppins flex flex-col justify-start w-full min-h-screen md:w-2/6 ">
        <Huels setID={setID} />
      </div>

      <div className="max-md:hidden font-poppins  overflow-hidden max-h-screen flex w-full flex-col">
        <Navbar />

        <div className="flex">
          <div className="max-h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-scroll w-1/3">
            <HuelBig setID={setID} />
          </div>

          <div className="max-h-[calc(100vh-3rem)] overflow-x-hidden overflow-y-scroll flex flex-col w-2/3">
            <Title data={data} />
            <Description data={data} />
            <Review data={data} />
          </div>
        </div>
      </div>
          </div>)}
      </CookiesProvider>
    </GoogleOAuthProvider>
  );
}
