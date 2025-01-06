import React, { useRef, useState } from "react";
import { Form } from "react-router-dom";
import { validateLogin } from "../utils/valiate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
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
        console.log(userCredential);
        console.log(name.current.value)
        updateProfile(userCredential.user, {
          displayName: name.current.value,
          photoURL: "https://ih1.redbubble.net/image.4220068610.5868/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
        })
        .then(() => {
              console.log("displayname added")
            })
            .catch((error) => {
              setErrorMessage(error.message)
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
    <div className="w-full h-full z-10">
      <div className="relative">
        {/* netflix background image */}
        <img
          className="z-20"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"
          alt="netflix-background"
        />
        {/* sign In/ sign Up form */}
        <Form className="bg-black absolute w-3/12 px-10 py-10 text-white bg-opacity-75 left-[40%] top-[20%] h-[80%] m-auto z-40">
          <h1 className="text-3xl font-bold mb-4 opacity px-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {/* full name field that only shows when we need to sign up */}
          {!isSignIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="px-2 py-4 rounded-md w-full my-4 mx-2 bg-gray-900 opacity-80"
              ref ={name}
            />
          )}

          {/* email field */}
          <input
            ref={email} // referencing the element
            type="text"
            placeholder="Email or mobile number"
            className="px-2 py-4 rounded-md w-full my-4 mx-2 bg-gray-900 opacity-80"
          />

          {/* password field */}
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="px-2 py-4 rounded-md w-full my-4 mx-2 bg-gray-900 opacity-80"
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

          <p className="mx-2 my-6 text-lg">
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
  );
};

export default Login;
