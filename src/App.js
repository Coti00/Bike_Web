import React from "react";
import Header from "./components/Header";
import Home from "./menu/Home";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

const App = () => {
  return (
    <>
      <Header></Header>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
