import React, { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Kids from "./components/Navbar_components/Kids/Kids";
import Electronics from "./components/Navbar_components/Electronics/Electronics";
import Men from "./components/Navbar_components/Men/Men";
import Toprated from "./components/Navbar_components/Toprated/Toprated";
import Home from "./components/Home/Home";
import About from "./components/Footer/FooterLink/About";
import Contact from "./components/Footer/FooterLink/Contact";
import Termsconditions from "./components/Footer/FooterLink/Termsconditions";

import AOS from "aos";
import "aos/dist/aos.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element=<Layout />>
      <Route path="" element=<Home /> />
      <Route path="toprated" element=<Toprated /> />
      <Route path="kids" element=<Kids /> />
      <Route path="men" element=<Men /> />
      <Route path="electronics" element=<Electronics /> />
      <Route path="about" element=<About /> />
      <Route path="contact" element=<Contact /> />
      <Route path="termsconditions" element=<Termsconditions /> />
    </Route>
  )
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children:[
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "toprated",
//         element: <Toprated />,
//       },
//       {
//         path: "kids",
//         element: <Kids />,
//       },
//       {
//         path: "men",
//         element: <Men />,
//       },
//       {
//         parh: "electronics",
//         element: <Electronics />,
//       },
//     ],
//   },
// ]);

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
