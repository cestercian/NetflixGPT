import React, { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { validateLogin } from "../utils/valiate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { DEFAULT_USER_AVATAR, NETFLIX_BG, NETFLIX_LOGO } from "../utils/constants";
const Login = () => {
  // for maintaining state of sign in and sign up
  const [isSignIn, setIsSignIn] = useState(true);

  // to store the error message from the validataion
  const [errorMessage, setErrorMessage] = useState(null);

  // reference of email and password field in form
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // When SignIn is clicked it changes state to SignUp --> isSignIn to false
  const handleToggle = () => {
    setIsSignIn(!isSignIn);
  };
  // it takes email and password form the form using useRef and validate it
  const SubmitLogin = () => {
    const message = validateLogin(email.current.value, password.current.value); // only ref val can be taken from ref.current...
    setErrorMessage(message);
    if (message != null) return; // if the email/password doesn't satify the specification it doesn't even call firebase

    if (!isSignIn) {
      // Sign Up using email and password in firebase
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(userCredential.user, {
            displayName: name.current.value,
            photoURL: DEFAULT_USER_AVATAR
          })
            .then(() => {
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorMsg = error.message;
          setErrorMessage(error.status + " " + errorMsg);
        });
    } else {
      // Sign using email and password in firebase
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorMsg = error.message;
          setErrorMessage(error.status + " " + errorMsg);
        });
    }
  };
  return (
    <div className="relative">
      <div className="w-full h-svh absolute z-30 bg-gradient-to bg-black bg-opacity-50 from-black"></div>
      <div className="w-full h-full z-10">
        <div className="relative ">
          {/* netflix background image */}
          <img 
            className="z-20 h-svh w-screen object-cover"
            src={NETFLIX_BG}
            alt="netflix-background"
          />
          {/* sign In/ sign Up form */}
          <Form className="bg-black absolute w-[25%] px-10 py-10 text-white bg-opacity-80 left-[40%] top-[20%] rounded-lg m-auto z-40">
            <h1 className="text-3xl font-bold mb-4 opacity px-2">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h1>

            {/* full name field that only shows when we need to sign up */}
            {!isSignIn && (
              <input
                type="text"
                placeholder="Full Name"
                className="px-2 py-4 rounded-md w-full my-4 mx-2 bg-gray-600 bg-opacity-30"
                ref={name}
              />
            )}

            {/* email field */}
            <input
              ref={email} // referencing the element
              type="text"
              placeholder="Email or mobile number"
              className="px-4 py-4 rounded-md w-full my-4 mx-2 bg-gray-600 bg-opacity-30"
            />

            {/* password field */}
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="px-4 py-4 rounded-md w-full my-4 mx-2 bg-gray-600 bg-opacity-30"
            />
            <p className="text-red-600 text-semibold text-md px-2">
              {errorMessage}
            </p>
            {/* toggle feature implemented here */}
            <button
              className="bg-red-600 px-4 py-3 rounded-md w-full my-6 mx-2 bg-opacity-100 hover:bg-red-700"
              onClick={SubmitLogin}>
              {isSignIn ? "Sign In" : "Sign Up"}
            </button>

            <p className="mx-2 my-6 text-lg font-light">
              {isSignIn ? "New to Netflix?" : "Already have an account?"}
              <span
                className="font-bold cursor-pointer hover:underline px-2"
                onClick={() => {
                  handleToggle();
                }}>
                {isSignIn ? "Sign up now." : "Sign In."}
              </span>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
