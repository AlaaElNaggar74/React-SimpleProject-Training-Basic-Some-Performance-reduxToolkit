import React, { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterReducer";
import { changeButtt } from "./AnthorSlice";

const MainComPar4 = () => {
  let [hideshow, setHideshow] = useState("Show");
  let dispatch = useDispatch();
  let CountSta = useSelector((state) => state.counter);
  let Anther = useSelector((state) => state.anther);

  // if (state.counttt < 0) {
  //   dispatch(resett());
  // } else {
  //   return state.counttt;
  // }

  let increaseHand = useCallback(
    (x = 1) => {
      dispatch(increment(x));
    },
    [dispatch]
  );
  let decreaseHand = (x = 1) => {
    dispatch(decrement(x));
  };
  // let resetHand = () => {
  //   dispatch(resett());
  // };
  let hideeHand = () => {
    dispatch(changeButtt());
  };

  // useEffect(() => {
  //   increaseHand(10);
  // }, [increaseHand]);
  return (
    <div className="MainComPar4">
      <h1 className="text-center mt-3">Part 4 Redux With React</h1>
  {
    Anther.value? <div className="container">
    <div className="couterBox mt-5">
      <h1 className="counterNum text-center">
        Counter : <span id="counterNum">{CountSta.value}</span>{" "}
      </h1>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn btn-danger me-3"
          onClick={() => {
            increaseHand(50);
          }}
        >
          Increase +
        </button>
        <button
          className="btn btn-danger"
          onClick={() => {
            decreaseHand(10);
          }}
        >
          Decrease -
        </button>
      </div>
    </div>

  
  </div>:""
  }
    <div className="text-center">
      <button
        className="btn btn-danger mt-5 w-25 fw-bold fs-4"
        onClick={() => {
          hideshow === "Show" ? setHideshow("Hide") : setHideshow("Show");
          hideeHand();
        }}
      >
        {hideshow} Counter
      </button>
    </div>
    </div>
  );
};

export default MainComPar4;
