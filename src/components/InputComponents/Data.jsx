import React from "react";
import "./scss/Data.scss";

const Data = (props) => {
  const data = props.data.fields[3];
  const htmlForValue = "inlineFormInput";
  const inputName = data.label;
  const inputType = data.type;
  const inputRequired = data.required;
  return (
    <>
      <label htmlFor={htmlForValue} className="appointment_date">
        {inputName}
      </label>
      <input
        required={inputRequired}
        type={inputType}
        className="form-control data_custom"
        id="inlineFormInput"
        placeholder="Jane Doe"
      />
    </>
  );
};

export default Data;
