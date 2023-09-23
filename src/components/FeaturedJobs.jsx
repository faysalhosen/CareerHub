import { useContext, useState } from "react";
import { JobsContext } from "../Layout";
import JobCard from "./JobCard";

const FeaturedJobs = () => {
  const jobs = useContext(JobsContext);
  const [isAll, setIsAll] = useState(false);

  return (
    <section className="mt-12">
      <div className="container">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Featured Jobs
        </h2>
        <p className="text-gray-500 text-center mb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {
            isAll ? jobs.map(job => <JobCard key={job.id} job={job}></JobCard>) : jobs.slice(0, 4).map(job => <JobCard key={job.id} job={job}></JobCard>)
          }
        </div>
        <div className="text-center mt-8">
          <button onClick={() => setIsAll(!isAll)} className="btn btn-primary">
            {
              isAll ? 'Collapse Jobs' : 'See All Jobs'
            }
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;
