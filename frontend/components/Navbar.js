import React from "react";
import {signIn, signOut} from 'next-auth/react'

export default function Navbar() {

  async function handleSignIn() {
    signIn('google',{callbackUrl: "http://localhost:3030"});
  }

    return (
    <div className="sticky top-0 z-10 bg-[#E0E0E0] gap-5 px-6 py-2 justify-between flex">
      <div className="text-2xl font-semibold text-[#606060]">
        Pick Your Course
      </div>
      <div className="loginButton">
        <button onClick={handleSignIn}>Login with Bits Mail</button>
      </div>
     </div>
  );
}
