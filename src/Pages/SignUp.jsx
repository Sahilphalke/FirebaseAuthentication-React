import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../Firebase/FirebaseConnect";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React from "react";
import chrisLee from "../assets/chris-lee.png";
import google from "../assets/icons8-google 1.png";
import apple from "../assets/icons8-apple-logo 1.png";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const CreatUser = () => {
    setLoading(true); // Start loading
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
        })
          .then(() => {
            alert("Account created successfully!");
            setName("");
            setEmail("");
            setPassword("");
            navigate("/signin");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
            alert("Error updating profile: " + error.message);
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        alert("Error creating account: " + error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <div className="size-lvh grid grid-cols-2 w-full">
        <div className="flex justify-center items-center">
          <div className="w-125 p-5">
            <div className="ms-8">
              <h1 className="mb-3 font-serif text-2xl font-semibold">
                Get Started Now
              </h1>
            </div>
            <form>
              <div className="mb-8 ms-8">
                <div className="mb-2">
                  <label htmlFor="">Name</label>
                </div>
                <input
                  className="p-2 border-1 w-100 rounded-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-8 ms-8">
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
              <div className="mb-8 ms-8">
                <div className="mb-2 flex gap-54">
                  <label htmlFor="">Password</label>
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
                  type="button"
                  onClick={CreatUser}
                  className="w-100 text-center font-serif bg-purple-800 text-white p-2.5 rounded-xl pr-5 pl-5 hover:bg-purple-600 hover:text-black"
                  disabled={loading}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </div>
            </form>
            <div className="flex justify-center items-center gap-5 mt-8 mb-6">
              <div className="border-1 h-0 w-25"></div>
              <h1>Or</h1>
              <div className="border-1 h-0 w-25"></div>
            </div>

            <div className="ms-8 flex gap-5">
              <div>
                <button className="flex justify-center items-center gap-2 bg-white text-black p-2.5 rounded-xl pr-3 pl-3 hover:bg-gray-200 hover:text-black w-full">
                  <img src={google} alt="" />
                  Sign in with Google
                </button>
              </div>
              <div>
                <button className="flex justify-center items-center gap-2 bg-white text-black p-2.5 rounded-xl pr-3 pl-3 hover:bg-gray-200 hover:text-black w-full">
                  <img src={apple} alt="" />
                  Sign in with Apple
                </button>
              </div>
            </div>
            <div className="text-center mt-5">
              <h1 className="text-gray-900">
                Already have an account?
                <Link
                  className="ms-2 text-blue-600 underline font-semibold"
                  to={"/signin"}
                >
                  Sign In
                </Link>
              </h1>
            </div>
          </div>
        </div>
        <div>
          <img
            className="object-fit h-screen w-full"
            src={chrisLee}
            alt="Home Image"
          />
        </div>
      </div>
    </>
  );
}

export default SignUp;
