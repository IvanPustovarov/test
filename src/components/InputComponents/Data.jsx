import React from "react";
import "./scss/Data.scss";

const Data = (props) => {
  const data = props.data.fields[3];
  const htmlForValue = "inlineFormInput";
  const inputLabel = data.label;
  const inputName = data.name;
  const inputType = data.type;
  const inputRequired = data.required;
  const inputGroup = data.group;

  return (
    <>
      <label htmlFor={htmlForValue} className="appointment_date">
        {inputLabel}
      </label>
      <input
        group={inputGroup}
        name={inputName}
        required={inputRequired}
        type={inputType}
        className="form-control data_custom"
        id={htmlForValue}
      />
    </>
  );
};

export default Data;
