import React from "react";

const Data = (props) => {
  const data = props.data;
  return (
    <>
      <label for="inlineFormInput" className="name">
        Name
      </label>
      <input
        type="text"
        className="form-control"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </>
  );
};

export default Data;
