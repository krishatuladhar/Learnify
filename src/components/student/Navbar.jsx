import React from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Navbar = () => {
  const { navigate, isEducator, setIsEducator } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();
  return (
    <div className=" bg-green-200 flex items-center justify-between px-1 sm:px-8 md:px-8 lg:px-10 border-b border-gray-500 -mt-4">
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-20 lg:w-25 cursor-pointer"
      />

      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={() => navigate("/educator")}>
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>
              | <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-400 hover:bg-green-700 text-white font-bold py-1 px-2 rounded"
          >
            Create Account
          </button>
        )}
      </div>
      {/*For Phone Screens */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button onClick={() => navigate("/educator")}>
                {isEducator ? "Educator Dashboard" : "Become Educator"}
              </button>

              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
          >
            {" "}
            <img src={assets.user_icon} alt="" className="w-6 h-6" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
