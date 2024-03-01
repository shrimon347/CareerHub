/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categorylist = () => {
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  }, []);

  return (
    <div>
      <div>
        <p className="text-3xl font-bold text-center mt-[100px]">
          Job Category List
        </p>
        <p className="text-center text-sm mt-5">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 justify-items-center mt-10 md:grid-cols-4">
          {categorys.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categorylist;
