import React from "react";
import "./scss/Phone.scss";
const Name = (props) => {
  const data = props.data.fields[1];
  const htmlForValue = "example-tel-input";
  const inputType = data.type;
  const inputLabel = data.label;
  const inputName = data.name;
  const inputGroup = data.group;
  const inputRequired = data.required;
  const inputClass = "form-control input__phone";

  return (
    <>
      <label htmlFor={htmlForValue} className="name">
        {inputLabel}
      </label>
      <input
        required={inputRequired}
        group={inputGroup}
        name={inputName}
        type={inputType}
        className={inputClass}
        id={htmlForValue}
      />
    </>
  );
};

export default Name;
