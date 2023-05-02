import React, { useState, useMemo, useCallback } from "react";
import ViewCounter from "./ViewCounter";
import ViewText from "./ViewText";

const Performance = () => {
  let [count1, setCount1] = useState(0);
  let [age, setAge] = useState(0);
  let [user, setUser] = useState({ name: "Alaa" });
  // console.log("Performance-Component");

  let obj = useMemo(() => {
    return user;
  }, [user]);
  let changeCount = () => {
    setCount1(count1 + 1);
  };

  let adeAgeHandelre = useCallback(() => {
    // console.log("Agee handler-Component");
    setUser((prev) => {
      if (prev.age) {
        return prev;
      } else {
        return { ...prev, age: 30 };
      }
    }, []);
  }, []);
  console.log(user);

  return (
    <div>
      <div className="container">
        <h1 className="text-center mb-5">Part -2 Performance</h1>
        <div className="twodiv row justify-content-between">
          <div className="m-auto col-5 p-5  border border-3 border-primary">
            <ViewCounter count1={count1} changeCount={changeCount} />
          </div>
          <div className="m-auto col-5 p-5  border border-3 border-primary">
            <ViewText text={obj} age={age} adeAge={adeAgeHandelre} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
