import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    //executes when state of authentication of app changes -> login -> logout
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { photoURL, uid, email, displayName } = auth.currentUser;
        dispatch(
          addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  // it is a structure of our entire app
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
