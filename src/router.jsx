import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import ProgramsAndCommunity from "./Programs";
import AboutUs from "./About";
import MotionGraphics from "./MotionGraphics";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: async () => {
      return { message: "Hello from Home loader" };
    },
    element: <Home/>,
  },
  {
    path: "/programs",
    loader: async () => {
      return { message: "Hello from programs loader" };
    },
    element: <ProgramsAndCommunity/>,
  },
  {
    path: "/about",
    loader: async () => {
      return { message: "Hello from programs loader" };
    },
    element: <AboutUs/>,
  },
  {
    path: "/motion",
    loader: async () => {
      return { message: "Motion graphics demo" };
    },
    element: <MotionGraphics/>,
  },
]);
