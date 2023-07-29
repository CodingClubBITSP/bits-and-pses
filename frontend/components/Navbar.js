import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";


export default function Navbar() {

  const login = useGoogleLogin({
    onSuccess: async credentialResponse => {
      console.log(credentialResponse);
      const userInfo = await axios.get(`http://localhost:8000/dj-rest-auth/google/?access_token=${credentialResponse.access_token}`, {
        headers: { Authorization: `Bearer ${credentialResponse.access_token}` },
      })
      .then(res => res.data);
      console.log(userInfo);
    }
  });

    return (
    <div className="sticky top-0 z-10 bg-[#E0E0E0] gap-5 px-6 py-2 justify-between flex">
      <div className="text-2xl font-semibold text-[#606060]">
        Pick Your Course
      </div>
      <div className="loginButton">
      <button onClick={() => login()}>
        Sign in with Google
      </button>
      </div>
     </div>
  );
}
