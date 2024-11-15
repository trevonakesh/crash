import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListnings from "./components/JobListnings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero title="Test title" subtitle="Test subtitle" />
      <HomeCards />
      <JobListnings />
      <ViewAllJobs />
    </>
  );
};

export default App;
