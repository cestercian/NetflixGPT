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
    <div className=" absolute w-full bg-gradient-to-b from-black z-50 flex justify-between ">
      {/* image of netflix logo */}
      <img src={NETFLIX_LOGO} alt="netflix-logo" className="w-48 ml-10 mt-" />
      <div className="flex gap-2 mx-4">
        {selector && (
          <>
            { showGpt && 
              <select ref={language} className="py-2 px-4 text-white bg-black mx-2 my-6 border-2 border-white outline-none rounded-sm" onChange={changeAppLanguage}>
                {languageAvailable.map((lang) => (
                  <option key={lang.identifier}className="p-2" value={lang.name} >
                    {lang.identifier}
                  </option>
                ))}
              </select>
            }
            <button
              className="py-2 px-4 bg-green-700 rounded-md my-6 mx-2 text-md text-bold"
              onClick={handleGptToggle}>
              {showGpt ?"Homepage":"GPT Search"}
            </button>
            <div className=" flex justify-center items-center">
              <img
                src={selector.photoURL}
                className="w-12 h-12 object-contain mr-2"
                alt="user_profile"
              />
              <button
                className="bg-red-600 rounded-md py-2 px-4 text-lg font-bold text-white items-center mr-1 my-6 object-cover bg-opacity-90  "
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
