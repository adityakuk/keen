// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { Provider } from "react-redux";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAquhgclWSlR1M7uTlgPmwXun3DAZZVY14",
  authDomain: "forum-431cc.firebaseapp.com",
  projectId: "forum-431cc",
  storageBucket: "forum-431cc.appspot.com",
  messagingSenderId: "656712869200",
  appId: "1:656712869200:web:812b043c7dfb21526f7855",
  measurementId: "G-PR8MR0EDFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider();

export { auth, provider };
//export { auth }





