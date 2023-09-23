import PropTypes from "prop-types";
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineDollar } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

const JobCard = ({job}) => {
  const {id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary} = job;

  const navigate = useNavigate();
  const handleClick = (jobId) => {
    navigate(`/jobs/${jobId}`);
  }

  return (
    <div className="bg-gradient-to-r from-[rgba(126,144,254,0.05)] to-[rgba(152,115,255,0.05)] p-8 rounded-lg">
      <img src={logo} alt="Company Logo" className="h-10 block mb-4" />
      <h4 className="text-2xl font-semibold mb-1">{job_title}</h4>
      <span className="block text-gray-500 mb-4">{company_name}</span>
      <div className="flex gap-4 mb-4">
        <button className="btn btn-outline btn-primary">{remote_or_onsite}</button>
        <button className="btn btn-outline btn-primary">{job_type}</button>
      </div>
      <div className="flex gap-4 text-gray-500 mb-6">
        <div className="flex gap-1 items-center">
          <CiLocationOn></CiLocationOn>
          <span>{location}</span>
        </div>
        <div className="flex gap-1 items-center">
          <AiOutlineDollar></AiOutlineDollar>
          <span>{salary}</span>
        </div>
      </div>
      <button onClick={() => handleClick(id)} className="btn btn-primary">View Details</button>
    </div>
  );
};

JobCard.propTypes = {
  job: PropTypes.object
}

export default JobCard;