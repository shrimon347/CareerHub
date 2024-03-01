/* eslint-disable no-unused-vars */
import React from "react";
// @ts-ignore
import user from "../../assets/user.png";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={user} className="md:max-w-xl w-3/3 rounded-lg" />
        <div>
          <p className="text-5xl font-bold">
            One Step <br />
            Closer To Your <br />
            <span className="text-[#7E90FE]">Dream Job</span>
          </p>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn bg-[#7E90FE] text-white hover:bg-[#7E90FE]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
