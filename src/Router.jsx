import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AppliedJobs from "./pages/AppliedJobs";
import JobDetails from "./pages/JobDetails";
import Jobs from "./pages/Jobs";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/applied-jobs',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/jobs/:id',
        element: <JobDetails></JobDetails>
      }
    ]
  }
]);

export default router;