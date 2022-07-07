import React, { useState } from "react";
import "./index.css";
const Anee = () => {
  const [num, setNum] = useState(0);

  const incNum = () => {
    if (num < 10) {
      setNum(num + 1);
    } else {
      alert("cant go above 10");
    }
  };
  const decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(0);
      alert("cant go below 0");
    }
  };

  return (
    <>
      <div className="main-div ">
        <div className="center-div"></div>
        <h1> {num} </h1>
        <div className="btn-main">
          <button onClick={incNum} className="btn btn-primary">
            Incre
          </button>
          <button onClick={decNum} className="btn btn-secondary">
            Decre
          </button>
        </div>
      </div>
    </>
  );
};

export default Anee;
