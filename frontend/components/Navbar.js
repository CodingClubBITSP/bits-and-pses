import React from "react";
import { useGoogleLogin } from "@react-oauth/google";


export default function Navbar() {

  const login = useGoogleLogin({
    onSuccess: codeResponse => console.log(codeResponse),
    flow: 'auth-code',
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
