import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {});
  };
  const selector = useSelector(store => (store.user));
  console.log({...selector})
  return (
    <div className=" absolute w-full bg-gradient-to-b from-black z-50 flex justify-between">
      {/* image of netflix logo */}
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix-logo"
        className="w-48 ml-36 mt-4"
      />
      {selector && <button
        className="bg-red-600 rounded-md p-1 text-lg font-bold text-white items-center mx-16 my-6"
        onClick={handleSignOut}>
        Sign Out
      </button>}
    </div>
  );
};

export default Header;
