// @ts-nocheck
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/localStorage";
import AppliedJob from "./AppliedJob";

const Appliedjobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobFilter = filter => {
    if (filter === 'all') {
      setDisplayJobs(appliedJobs)
    }
    else if (filter === 'remote') {
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
      setDisplayJobs(remoteJobs)
    }
    else if (filter === 'onsite') {
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
      setDisplayJobs(onsiteJobs)
    }
  }


  useEffect(() => {
    const stordedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => stordedJobIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  return (
    <div>
      <p className="text-4xl font-bold mt-10 text-center">Applied Jobs</p>
      <div className=" text-end p-10">
        <details className="dropdown ">
          <summary className="m-1 btn border border-[#7E90FE] text-[#7E90FE]  bg-white hover:bg-white hover:border-[#7E90FE]">
            Filter By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li onClick={()=> handleJobFilter('all')}>
              <a>All</a>
            </li>
            <li onClick={()=> handleJobFilter('remote')}>
              <a>Remote</a>
            </li>
            <li onClick={()=> handleJobFilter('onsite')}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJobs.map((applied) => (
          <AppliedJob key={applied.id} applied={applied} />
        ))}
      </div>
    </div>
  );
};

export default Appliedjobs;
