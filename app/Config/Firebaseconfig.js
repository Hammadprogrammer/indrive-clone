
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAPQG4H9LQqq1UC5vPay1gUP8EODV3uJak",
  authDomain: "smit-hachaton.firebaseapp.com",
  projectId: "smit-hachaton",
  storageBucket: "smit-hachaton.firebasestorage.app",
  messagingSenderId: "861453022078",
  appId: "1:861453022078:web:20b87ff8fb3ae30b7f392f",
  measurementId: "G-WQR2WYZE5Q"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

