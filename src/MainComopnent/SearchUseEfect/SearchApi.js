import React, { useEffect, useState, useRef } from "react";

import SearchStyle from "./SearchApi.module.css";

import axios from "axios";
import usePreveState from "../CustomHooks/Hooks/usePreveState";

const SearchApi = () => {
  // let [stname, setStname] = useState("");
  // let [stmob, setStmob] = useState("");
  let [term, setTerm] = useState("css");
  let [termTwo, setTermTwo] = useState(term);
  let [datasta, setData] = useState([]);
  let useRefd = useRef();
  // let PrevState = usePreveState(term);

  // useEffect(() => {
  //   useRefd.current=term;
  // });

  let preStateValuex=usePreveState(term);

  let searcAsync = async () => {
    let res = await axios.get("https://en.wikipedia.org/w/api.php", {
      params: {
        action: "query",
        list: "search",
        origin: "*",
        format: "json",
        srsearch: term,
      },
    });
    setData(res.data.query.search);
    console.log(res.data.query.search)
  };

  useEffect(() => {
    if (!datasta.length) {
          if (term) {
            searcAsync();
          }
        } else if(term !==preStateValuex){
          let handeler = setTimeout(() => {
            if (term) {
              searcAsync();
            }
          }, 1200);
          return () => {
            clearTimeout(handeler);
          };
        }
  }, [termTwo,datasta.length,preStateValuex]);

  // let count=0;
  //   useEffect(() => {
  // // console.log("useEffect");
  // setTermTwo("css")
  //   }, []);

  //   console.log("Re-Render");

  //*****************************************************************

  // let getData=async ()=>{
  // let res=await fetch("https://fakestoreapi.com/products");
  // let data=await res.json();
  // setData(data)
  // console.log(datasta)
  // }

  // useEffect(() => {
  //   getData();

  // }, []);

  //***************************************************************** */
  // let fet=async()=>{
  //   await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&origin=*&format=json&srsearch=${term}`)
  //   .then((res) => res.json())
  //   // .then((data) => console.log(data.query.search));
  //   .then((data) => setData(data.query.search));
  //   }
  //   useEffect(() => {

  //     if(term){
  //       fet();
  //     }
  //     console.log(datasta);
  //   },[term]);

  //*****************************************************************

  // let searcAsync = async () => {
  //   let res = await axios.get("https://en.wikipedia.org/w/api.php", {
  //     params: {
  //       action: "query",
  //       list: "search",
  //       origin: "*",
  //       format: "json",
  //       srsearch: term,
  //     },
  //   });
  //   setData(res.data.query.search);
  // };

  // useEffect(() => {
  //   if (!datasta.length) {
  //     if (term) {
  //       searcAsync();
  //     }
  //   } else {
  //     let handeler = setTimeout(() => {
  //       if (term) {
  //         searcAsync();
  //       }
  //     }, 1200);
  //     return () => {
  //       clearTimeout(handeler);
  //     };
  //   }

  //   // let handeler = setTimeout(() => {
  //   //   if (term) {
  //   //     searcAsync();
  //   //   }
  //   // }, 1000);
  //   // return () => {
  //   //   clearTimeout(handeler);
  //   // };
  // }, [term, datasta.length]);
  return (
    // <> </>
    <div className={SearchStyle.SearchApi}>
      <h1 className={SearchStyle.head}>Search With API</h1>
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
              onChange={(e) => {setTerm(e.target.value);
              console.log(e.target.value)}}
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
      </div>
    </div>
  );
};

export default SearchApi;
