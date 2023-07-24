import { useEffect } from "react";
import { gapi } from "gapi-script";
import Login from "./Login";

const clientId = "331433894305-56oun3q5ljv8mfe11ks7bsk4fujdvs7v.apps.googleusercontent.com";

export default function Navbar() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope:""
      })
    };
    gapi.load('client:auth2',start);
  }); 

  return (
    <div className="sticky top-0 z-10 bg-[#E0E0E0] gap-5 px-6 py-2 justify-between flex">
      <div className="text-2xl font-semibold text-[#606060]">
        Pick Your Course
      </div>
      <div className="loginButton">
        <Login/>
      </div>
    </div>
  );
}
