// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKG5WAlt4giw2ZDCBcyDvGwvnl-7PNdE",
  authDomain: "trabajofinal-react-8c9fe.firebaseapp.com",
  projectId: "trabajofinal-react-8c9fe",
  storageBucket: "trabajofinal-react-8c9fe.appspot.com",
  messagingSenderId: "981271982062",
  appId: "1:981271982062:web:0ef5682f9d4b72235ea8ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);

export const login = async ({ email, password }) => {
  let res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};
