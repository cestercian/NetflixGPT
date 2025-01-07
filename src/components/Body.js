import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect } from "react";
import { onAuthStateChanged} from "firebase/auth";
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
        const { photoURL, uid, email, displayName } = auth.currentUser;   //taking all the parameter from the current update data by auth.currentUser
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
        );
        navigate("/browse"); // protecting routes if user was logged in it will not go to login page
      } else {
        dispatch(removeUser());
        navigate("/"); // similarly it will not allow user to access browse page
      }
    });
  }, []);

  // it is a structure of our entire app
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export default Body;
