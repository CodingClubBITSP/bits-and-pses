import React from "react";
import {auth,provider} from '../config/firebase'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
import {useAuthState} from 'react-firebase-hooks';

export default function Navbar() {

  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth,provider);
    navigate("/");
     }
 
  return (
    <div className="sticky top-0 z-10 bg-[#E0E0E0] gap-5 px-6 py-2 justify-between flex">
      <div className="text-2xl font-semibold text-[#606060]">
        Pick Your Course
      </div>
      <div className="loginButton">
        <button onClick={signInWithGoogle}>Login wih Bits Mail</button>
      </div>
      <div className="userDisplay">
        <p>{user.displayName}</p>
      </div>
    </div>
  );
}
