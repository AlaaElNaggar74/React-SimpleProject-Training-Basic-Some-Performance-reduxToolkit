import React, { useState } from "react";

const ViewCounter = ({count1,changeCount}) => {



    console.log("ViewCounter-Component");



  return (
    <>
      <h2>Counter : {count1}</h2>
      <div className="text-center">
        <button
          className="btn btn-danger  mt-3 w-fit-content"
          onClick={changeCount}
        >
          +
        </button>
      </div>
    </>
  );
};

export default ViewCounter;
