import React, { useEffect, useState } from "react";
import SmallFormStyle from "./SmallForm.module.css";

const SmallForm = () => {
  let [stname, setStname] = useState("");
  let [stmob, setStmob] = useState("");

  useEffect(() => {
    console.log("Use-----Effect");
  }, []);
  return (
    <div className={SmallFormStyle.SmallForm}>
      <h1 className={SmallFormStyle.head}>Welcome Level 1 Part 2</h1>
      <div className="container col-4 m-auto">
        <h3 className="text-center mb-3">User Input</h3>
        <div className="row  form">
          <div className="col-12 mb-3">
            <label htmlFor="name" className="fs-3 mb-2 fw-bold">
              UserName :<span>{stname}</span>
            </label>
            <input
              id="name"
              type="text"
              className="form-control py-3"
              placeholder="First name"
              aria-label="First name"
              value={stname}
              onChange={(e) => setStname(e.target.value)}
            />
          </div>
          <div className="col-12">
            <label htmlFor="mob" className="fs-3 mb-2 fw-bold">
              Mobile :<span>{stmob}</span>
            </label>

            <input
              id="mob"
              type="text"
              className="form-control py-3"
              placeholder="Last name"
              aria-label="Last name"
              value={stmob}
              onChange={(e) => setStmob(e.target.value)}
            />
          </div>
          <button className="btn btn-danger col-4 mt-5 mx-auto fw-bold" onClick={()=>{
            setStmob("");
            setStname("")

          }}>ADD</button>
        </div>
      </div>
    </div>
  );
};

export default SmallForm;
