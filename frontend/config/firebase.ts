// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVNinnVSQ3LAl9Oyg0ZPyMo70b9lSlxEQ",
  authDomain: "bits-pses.firebaseapp.com",
  projectId: "bits-pses",
  storageBucket: "bits-pses.appspot.com",
  messagingSenderId: "484673598114",
  appId: "1:484673598114:web:b905e0997e854d0cec5dfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();