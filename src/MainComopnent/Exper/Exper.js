import React, { useEffect, useState, useRef } from "react";

import usePreveState from "../CustomHooks/Hooks/usePreveState";

const Exper = () => {
  let [term, setTerm] = useState("css");
  let [termTwo, setTermTwo] = useState(term);
  let [datasta, setData] = useState([]);
  let PrevState = usePreveState(term);

  
  // useEffect(() => {
  //   // PrevState.current=term;
  //   setData(",.");
  //   console.log("UseEffect..")
  // });
  // console.log("Gloabal..")

  //   let[arr,setArr]=useState(["one", "two", "three"]);

  //   let [setTnm,setTdnm]=useState("x");
  //   // const arr = ["one", "two", "three"];
  // // console.log("Test" ,arr);
  // // console.log(arr);
  // useEffect(()=>{
  //   setArr(["one", "two", "three"])
  //   // setArr(["one", "two", "n"]);
  //   // setTdnm("x")
  //   // setArr(arr);
  // },[])
  // console.log("Re-Render");

  return (
    <div>
      {console.log("render phase...")}
      <div className="container col-12 m-auto">
        <h3 className="text-center mb-3">Search Input</h3>
        <div className="row  form">
          <div className="col-4 mx-auto mb-3">
            {/* <label htmlFor="name" className="fs-3 mb-2 fw-bold">
              UserName :<span>{stname}</span>
            </label> */}
            <input
              id="name"
              type="text"
              className="form-control py-3 "
              placeholder="Search..."
              aria-label="First name"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
        </div>
        <div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col-2">ID</th>
                <th scope="col-3">Title</th>
                <th scope="col-7">Description</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>
                  {" "}
                  <h1>Current-Term : {term}</h1>
                </td>
                <td>
                  {" "}
                  <h1>Prev-Term : {PrevState.current}</h1>
                </td>
              </tr> */}
              {/* <tr>
                <th scope="row">1</th>
                <td>yhtujy</td>
                <td>kkhjk</td>
              </tr> */}
              {datasta.map((ele) => {
                return term !== "" ? (
                  <tr key={ele.pageid}>
                    <th scope="row">{ele.pageid}</th>
                    <td> {ele.title}</td>
                    <td>
                      <span dangerouslySetInnerHTML={{ __html: ele.snippet }} />
                    </td>
                  </tr>
                ) : (
                  ""
                );
              })}
            </tbody>
          </table>
        </div>
      </div>{" "}
    </div>
  );
};

export default Exper;
