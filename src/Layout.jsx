import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { createContext, useState, useEffect } from "react";

export const JobsContext = createContext([]);

const Layout = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("/data/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <JobsContext.Provider value={jobs}>
        <Outlet></Outlet>
      </JobsContext.Provider>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
