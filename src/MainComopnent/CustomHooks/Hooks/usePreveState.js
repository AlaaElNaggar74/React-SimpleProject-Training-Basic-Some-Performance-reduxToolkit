import React from "react";
import { useState, useEffect, useRef } from "react";

let usePreveState = (state) => {
  let ref = useRef();
  useEffect(() => {
    ref.current = state;
  });

  return ref.current;
};
export default usePreveState;

// import React from "react";
// import { useState, useEffect, useRef } from "react";

// const UsePreveState = (state) => {
//   let PrevState = useRef();
//   useEffect(() => {
//     PrevState.current = state;
//   });
//   return PrevState;
// };

// export default UsePreveState;
