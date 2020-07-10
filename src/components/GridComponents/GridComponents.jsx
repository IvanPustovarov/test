import React from "react";
import About from "../About/About";
import Important from "../Important/Important";

const GridComponents = (props) => {
  return (
    <div className="row">
      <div className="col">
        <About data={props.data} />
      </div>
      <div className="col">
        <Important data={props.data} />
      </div>
    </div>
  );
};

export default GridComponents;
