import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { app } from "../Firebase/FirebaseConnect";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import chrisLee from "../assets/chris-lee.png";
import google from "../assets/icons8-google 1.png";
import apple from "../assets/icons8-apple-logo 1.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault("");
    setEmail("");
    setPassword("");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  
  const SignInUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => alert("Successfully Signed In"))
      .catch((error) => {
          alert("Wrong Credentials");
          console.log(error);
        });
    };
    
    const SignInWithGoogle = () => {
      signInWithPopup(auth, googleprovider)
        .then((value) => alert("Successfully Signed In"))
        .catch((error) => {
          alert("Wrong Credentials");
          console.log(error);
        });
    };

  return (
    <>
      <div className="size-lvh grid grid-cols-2 w-full">
        <div className="flex justify-center items-center">
          <div className=" w-125 p-5">
            <div className="ms-8">
              <h1 className="mb-3 font-serif text-2xl font-semibold">
                Welcome back!
              </h1>
              <p className="mb-5 font-serif  text-gray-900">
                Enter your Credentials to access your account
              </p>
            </div>
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-10 ms-8">
                <div className="mb-2">
                  <label htmlFor="">Email address</label>
                </div>
                <input
                  className="p-2 border-1 w-100 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-10 ms-8">
                <div className="mb-2 flex gap-54">
                  <label htmlFor="">Password</label>
                  <label className="text-violet-950" htmlFor="">
                    <a href=""> Forgot Password</a>
                  </label>
                </div>

                <input
                  className="p-2 border-1 w-100 rounded-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Your Password"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  onClick={SignInUser}
                  className="w-100 text-center font-serif  bg-purple-800 text-white p-2.5 rounded-xl pr-5 pl-5 hover:bg-purple-600 hover:text-black"
                >
                  Login
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center gap-5 mt-10 mb-10">
              <div className="border-1 h-0 w-25"></div>
              <h1>Or</h1>
              <div className="border-1 h-0 w-25"></div>
            </div>

            <div className="ms-8 flex gap-5">
              <div>
                <button
                  onClick={SignInWithGoogle}
                  className="flex justify-center items-center gap-2  bg-white text-black p-2.5 rounded-xl pr-3 pl-3 hover:bg-gray-200 hover:text-black w-full"
                >
                  <img src={google} alt="" />
                  Sign in with Google
                </button>
              </div>
              <div>
                <button className="flex justify-center items-center gap-2  bg-white text-black p-2.5 rounded-xl pr-3 pl-3 hover:bg-gray-200 hover:text-black w-full">
                  <img src={apple} alt="" />
                  Sign in with Apple
                </button>
              </div>
            </div>
            <div className="text-center mt-5">
              <h1 className="text-gray-900">
                Don’t have an account ?
                <Link
                  className="ms-2 text-blue-600 underline font-semibold"
                  to={"/signup"}
                >
                  Sign Up
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-fit
                h-screen w-full"
            src={chrisLee}
            alt="Home Image"
          />
        </div>
      </div>
    </>
  );
}

export default SignIn;
