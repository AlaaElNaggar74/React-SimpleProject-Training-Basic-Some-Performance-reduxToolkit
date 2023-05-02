import React, { useState, useMemo } from "react";

import Text from "./Text";

const ViewText = ({ text, adeAge, age }) => {
  // let [count2, setCount2] = useState("Alaa");
  // console.log("ViewText-Component");

  let apiSema = () => {
    for (let i = 0; i <= 900_000_000; i++) {}
    console.log("ViewText-Component-INSide", text);
  };
  apiSema();

  // let changeText = () => {
  //   setCount2("ElNaggar");
  // };
  console.log("ViewText-Component-OutSide", text);

  return (
    <>
      {/* <h2>Text Field :{count2}</h2> */}
      <h2>Text Field :{text.name}</h2>
      <h2>TheAge :{text.age}</h2>

      <div className="text-center">
        <button className="btn btn-danger  mt-3 w-fit-content" onClick={adeAge}>
          change
        </button>
        <button
          className="btn btn-danger  mt-3 w-fit-content ms-3"
          onClick={adeAge}
        >
          ShowAge
        </button>
        <Text />
      </div>
    </>
  );
};

export default React.memo(ViewText);
