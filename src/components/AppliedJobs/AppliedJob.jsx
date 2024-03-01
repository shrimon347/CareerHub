/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const AppliedJob = ({ applied }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = applied;
  return (
    <div className="m-10">
      <div className="card card-side bg-base-100 p-4 shadow-xl">
        <figure className="w-[20%] p-10 bg-gray-200  rounded">
          <img src={logo} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p className="font-semibold text-gray-400 text-xl">{company_name}</p>
          <div className="flex w-[40%] gap-10">
            <p className="btn border border-[#7E90FE] text-[#7E90FE] bg-white hover:bg-white hover:border-[#7E90FE]">
              {remote_or_onsite}
            </p>
            <p className="btn border border-[#7E90FE] text-[#7E90FE]  bg-white hover:bg-white hover:border-[#7E90FE]">
              {job_type}
            </p>
          </div>
          <div className="flex w-[70%]  gap-10">
            <p className="flex gap-2 ">
              <IoLocationOutline className="mt-1" /> {location}
            </p>
            <p className="flex gap-2">
              <AiOutlineDollar className="mt-[4.5px]" /> Salary : {salary}
            </p>
          </div>
        </div>
        <div className="card-actions justify-end content-center mr-[4%]">
          <Link to={`/job/${id}`}><button className="btn bg-[#7E90FE] hover:bg-[#7E90FE] text-white">Job Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
