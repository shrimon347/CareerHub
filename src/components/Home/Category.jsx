/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Category = ({ category }) => {
  const { logo, category_name, availability } = category;
  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body">
        <img src={logo} alt="logo" className="w-12" />
        <h2 className="card-title">{category_name}</h2>
        <p>{availability}</p>
      </div>
    </div>
  );
};

export default Category;
