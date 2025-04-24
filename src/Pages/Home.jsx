import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  const auth = getAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert("Signed out successfully");
        navigate("/signin");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="w-full size-lvh flex justify-center items-center border-1">
      <div className="w-125 p-5 flex flex-col justify-center items-center">
        <h1 className="mb-5 text-lg font-serif">Welcome to the Home Page</h1>
        <button
          onClick={handleSignOut}
          className=" text-white  p-2 pr-8  pl-8 rounded-lg flex justify-center items-center bg-gray-800 "
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}

export default Home;
