import { useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { useContext, useEffect, useState } from "react";
import { JobsContext } from "../Layout";
import { AiOutlineDollarCircle, AiOutlineCalendar, AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const JobDetails = () => {
  const { id } = useParams();
  const jobs = useContext(JobsContext);
  const [job, setJob] = useState({});
  useEffect(() => {
    if (jobs.length > 0) {
      const jobFilter = jobs.filter(job => job.id == id);
      setJob(jobFilter[0]);
    }
  }, [id, jobs]);
  const {job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information} = job;
  console.log(job);

  return (
    <main>
      <PageHeader title={"Job Details"}></PageHeader>

      <section className="mt-10">
        <div className="container">
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-6">
            <div className="flex-1">
              <p className="text-gray-500 mb-4"><span className="text-black font-bold">Job Description: </span>{job_description}</p>
              <p className="text-gray-500 mb-4"><span className="text-black font-bold">Job Responsibility: </span>{job_responsibility}</p>
              <span className="font-bold block mb-1">Educational Requirements:</span>
              <p className="text-gray-500 mb-4">{educational_requirements}</p>
              <span className="font-bold block mb-1">Experiences:</span>
              <p className="text-gray-500 mb-4">{experiences}</p>
            </div>
            <div className="w-full md:max-w-[350px]">
              <div className="bg-gradient-to-r from-[rgba(126,144,254,0.10)] to-[rgba(152,115,255,0.10)] p-6 rounded-lg mb-4">
                <h4 className="text-xl font-bold mb-2">Job Details</h4>
                <hr className="border border-gray-500 mb-6" />
                <div className="flex items-center gap-2 mb-1">
                  <AiOutlineDollarCircle></AiOutlineDollarCircle>
                  <span className="text-gray-500"><span className="text-black font-bold">Salary: </span>{salary} (Per Months)</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <AiOutlineCalendar></AiOutlineCalendar>
                  <span className="text-gray-500"><span className="text-black font-bold">Job Title: </span>{job_title}</span>
                </div>

                <h4 className="text-xl font-bold mb-2">Contact Information</h4>
                <hr className="border border-gray-500 mb-6" />
                <div className="flex items-center gap-2 mb-1">
                  <AiOutlinePhone></AiOutlinePhone>
                  <span className="text-gray-500"><span className="text-black font-bold">Phone: </span>{contact_information?.phone}</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <AiOutlineMail></AiOutlineMail>
                  <span className="text-gray-500"><span className="text-black font-bold">Email: </span>{contact_information?.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GoLocation></GoLocation>
                  <span className="text-gray-500"><span className="text-black font-bold">Address: </span>{contact_information?.address}</span>
                </div>
              </div>
              <button className="btn btn-primary flex w-full">Apply Now</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
