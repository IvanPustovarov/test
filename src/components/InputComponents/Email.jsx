import React from "react";

import "./scss/Email.scss";

const Email = (props) => {
  const data = props.data.fields[2];
  //const input
  const htmlForValue = "exampleFormControlInput1";
  const inputGroup = data.group;
  const inputName = data.name;
  const inputType = data.type;
  const inputLabel = data.label;
  const inputRequired = data.required;

  return (
    <>
      <label htmlFor={htmlForValue} className="e-mail">
        {inputLabel}
      </label>
      <input
        type={inputType}
        className="form-control"
        id={htmlForValue}
        name={inputName}
        group={inputGroup}
        required={inputRequired}
      />
    </>
  );
};

export default Email;
