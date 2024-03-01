import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Error from "./Error/Error";
import Statistics from "./components/Statistics/Statistics";
import Appliedjobs from "./components/AppliedJobs/Appliedjobs";
import Blogs from "./Blogs/Blogs";
import JobDetails from "./JobDetails/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/appliedJobs",
        element: <Appliedjobs />,
        loader: () => fetch("/jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/job/:id",
        element: <JobDetails />,
        loader: () => fetch("/jobs.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
