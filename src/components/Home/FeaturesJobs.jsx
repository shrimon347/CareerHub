/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import JobFeature from "./JobFeature";

const FeaturesJobs = () => {
  const [jobfetaures, setJobFeatures] = useState([]);
  const [joblength, setJobLegth] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobFeatures(data));
  }, []);
  return (
    <div>
      <div>
        <p className="text-3xl font-bold text-center mt-[100px]">
          Featured Jobs :
        </p>
        <p className="text-center text-sm mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center mt-10 md:grid-cols-2">
          {jobfetaures.slice(0, joblength).map((fetaure) => (
            <JobFeature key={fetaure.id} fetaure={fetaure} />
          ))}
        </div>
        <div className="text-center">
          <div className={joblength === jobfetaures.length ? 'hidden' : ''}>
            <button
              className="btn border border-[#7E90FE] text-[#7E90FE]  bg-white hover:bg-white hover:border-[#7E90FE] mt-10"
              onClick={() => setJobLegth(jobfetaures.length)}
            >
              Show All jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesJobs;
