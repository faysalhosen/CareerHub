import { useContext } from "react";
import { JobsContext } from "../Layout";
import JobCard from "../components/JobCard";
import PageHeader from "../components/PageHeader";

const Jobs = () => {
  const jobs = useContext(JobsContext);

  return (
    <main>
      <PageHeader title={'All Jobs'}></PageHeader>
      
      <section className="mt-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {
            jobs.map(job => <JobCard key={job.id} job={job}></JobCard>)
           }
          </div>
        </div>
      </section>
    </main>
  );
};

export default Jobs;