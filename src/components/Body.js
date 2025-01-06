import { Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  
  const dispatch = useDispatch();
  

  useEffect(() => {
    //executes when state of authentication of app changes -> login -> logout
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser({ uid: user.uid, email: user.email }));
      } else {
        dispatch(removeUser());
        console.log("removed user");
      }
    });
  }, [dispatch]);

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
