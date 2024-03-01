/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../Utility/localStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  // @ts-ignore
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const handleApplyJob = () => {
    saveJobApplication(idInt)
    toast("You Have Applied susscefully");
  };
  return (
    <div>
      <p className="text-4xl text-center font-semibold mt-10">
        Job Details of : {job.job_title}
      </p>
      <div className="grid gap-10 md:grid-cols-5 mt-10">
        <div className="p-4 md:col-span-3 py-10">
          <p>
            <span className="font-bold">Job Description :</span>
            {job.job_description}
          </p>
          <p className="mt-10">
            <span className="font-bold">Job Resposibility :</span>
            {job.job_responsibility}
          </p>
          <p className="mt-10">
            <span className="font-bold">Education Requirements :</span> <br />{" "}
            {job.educational_requirements}
          </p>
          <p className="mt-10">
            <span className="font-bold">Experience :</span> <br />{" "}
            {job.experiences}
          </p>
        </div>
        <div className=" md:col-span-2">
          <div className="border bg-[#7E90FE] bg-opacity-15 p-10">
            <p className="text-xl font-semibold py-3 border-b-[#dde1ff] border-b-2">
              Job Details
            </p>
            <div className="mt-4">
              <div className="flex gap-2 mt-4">
                <AiOutlineDollarCircle className="mt-1 text-[#5a70fb]" />
                <p>Salary : {job.salary}</p>
              </div>
              <div className="flex gap-2 mt-4">
                <IoCalendarOutline className="mt-1 text-[#5a70fb]" />
                <p>Job Title : {job.job_title}</p>
              </div>
            </div>
            <p className="text-xl font-semibold mt-4 py-3 border-b-[#dde1ff] border-b-2">
              Contact Information
            </p>
            <div>
              <div className="flex gap-2 mt-4">
                <BsTelephone className="mt-1 text-[#5a70fb]" />
                <p>Phone : {job.contact_information.phone}</p>
              </div>
              <div className="flex gap-2 mt-4">
                <AiOutlineMail className="mt-1 text-[#5a70fb]" />
                <p>Email : {job.contact_information.email}</p>
              </div>
              <div className="flex gap-2 mt-4">
                <MdOutlineLocationOn className="mt-1 text-[#5a70fb]" />
                <p>Address : {job.contact_information.address}</p>
              </div>
            </div>
          </div>
          <div>
            <button
              className="btn w-[100%] round-xl mt-10 bg-[#7E90FE] text-white hover:bg-[#7E90FE]"
              onClick={handleApplyJob}
            >
              Apply now
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
