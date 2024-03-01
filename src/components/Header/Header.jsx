/* eslint-disable no-unused-vars */
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Links = (
    <>
      <li className="mr-5 ">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="mr-5 text-[#7E90FE]">
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li className="mr-5 text-[#7E90FE]">
        <NavLink to="/appliedJobs">Applied Jobs</NavLink>
      </li>
      <li className="mr-5 text-[#7E90FE]">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
    </>
  );
  return (
    <div className=" mx-auto bg-white">
      <div className="navbar  m-auto max-w-6xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {Links}
            </ul>
          </div>
          <p className=" text-2xl font-semibold text-[#7E90FE]">Carrer Hub</p>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#7E90FE] hover:bg-[#7E90FE] text-white">
            Start Applying
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
