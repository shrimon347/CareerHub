/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineDollar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const JobFeature = ({ fetaure }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    salary,
    location,
  } = fetaure;
  return (
    <div className="card w-[90%] bg-base-100 shadow-xl">
      <div className="card-body">
        <img src={logo} alt="logo" className="w-12" />
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex w-[50%] gap-10">
          <p className="btn border border-[#7E90FE] text-[#7E90FE] bg-white hover:bg-white hover:border-[#7E90FE]">
            {remote_or_onsite}
          </p>
          <p className="btn border border-[#7E90FE] text-[#7E90FE]  bg-white hover:bg-white hover:border-[#7E90FE]">
            {job_type}
          </p>
        </div>
        <div className="flex  gap-10">
          <p className="flex gap-2 ">
            <IoLocationOutline className="mt-1" /> {location}
          </p>
          <p className="flex gap-2">
            <AiOutlineDollar className="mt-[4.5px]" /> Salary : {salary}
          </p>
        </div>
        <div>
          <Link
            to={`/job/${id}`}
            className="btn bg-[#7E90FE] hover:text-[#7E90FE] text-white hover:bg-white  hover:border-[#7E90FE] mt-5"
          >
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobFeature;
