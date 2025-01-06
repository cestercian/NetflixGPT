import "./index.css";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Browse from "./components/Browse";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"

function App() {
  // defining path for entire app
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Login />
        },
        {
          path: "/browse",
          element: <Browse />
        }
      ]
    }
  ]);
  return (
    // redux store and react routing is done here
    <Provider store={appStore}>
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  );
}

export default App;
