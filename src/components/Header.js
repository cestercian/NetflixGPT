import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  const selector = useSelector((store) => store.user);
  // console.log({...selector})
  return (
    <div className=" absolute w-full bg-gradient-to-b from-black z-50 flex justify-between">
      {/* image of netflix logo */}
      <img
        src={NETFLIX_LOGO}
        alt="netflix-logo"
        className="w-48 ml-10 mt-4"
      />
      {selector && (
        <div className="w-2/12 flex justify-center items-center">
          <img src={selector.photoURL} className="w-12 h-12 object-contain mr-2" alt="user_profile"/>
          <button
            className="bg-red-600 rounded-md py-2 px-4 text-lg font-bold text-white items-center mr-1 my-6 object-cover bg-opacity-90  "
            onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
