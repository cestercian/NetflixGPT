import React, { useRef } from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NETFLIX_LOGO } from "../utils/constants";
import { toggleGpt } from "../utils/gptSlice";
import { languageAvailable } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const selector = useSelector((store) => store.user);
  const showGpt = useSelector((store) => store.gpt.gptPageToggle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const language = useRef("en");
  const handleGptToggle = () => {
    dispatch(toggleGpt());
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  const changeAppLanguage = ()=>{
    dispatch(changeLanguage(language.current.value));
  }

  return (
    <div className=" absolute w-[100%] bg-gradient-to-b from-black z-50 justify-between flex flex-col md:flex-row ">
      {/* image of netflix logo */}
      <div className="flex justify-center">

      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-48 ml-10" />
      </div>
      <div className="flex gap-2 mx-auto md:mx-4 md:w-auto h-[90%]">
        {selector && (
          <>
            { showGpt && 
              <select ref={language} className="py-1 px-2 md:py-2 md:px-4 text-white bg-black mx-2 my-6 border-2 border-white outline-none rounded-sm" onChange={changeAppLanguage}>
                {languageAvailable.map((lang) => (
                  <option key={lang.identifier}className="p-2" value={lang.name} >
                    {lang.identifier}
                  </option>
                ))}
              </select>
            }
            <button
              className="py-1 px-2 md:py-2 md:px-4 bg-green-700 rounded-md my-6 mx-2 text-sm md:text-md text-bold"
              onClick={handleGptToggle}>
              {showGpt ?"Homepage":"GPT Search"}
            </button>
            <div className=" flex justify-center items-center">
              <img 
                src={selector.photoURL}
                className="hidden md:inline-block w-12 h-12 object-contain mr-2"
                alt="user_profile"
              />
              <button
                className="bg-red-600 rounded-md py-1 px-2 md:py-2 md:px-3 text-sm md:text-md text-white items-center mr-1 my-6 object-cover bg-opacity-90  "
                onClick={handleSignOut}>
                Sign Out
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
