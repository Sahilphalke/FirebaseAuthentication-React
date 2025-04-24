import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAQzJMUi8eRgp88255cB_6M7V_1jFOoo5Y",
  authDomain: "authentication-9ffff.firebaseapp.com",
  projectId: "authentication-9ffff",
  storageBucket: "authentication-9ffff.firebasestorage.app",
  messagingSenderId: "719879738281",
  appId: "1:719879738281:web:9994c30bd88fa088f3aab8",
  databaseURL: "https://authentication-9ffff-default-rtdb.firebaseio.com/",
};

export const app = initializeApp(firebaseConfig);
