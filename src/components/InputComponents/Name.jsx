import React from "react";
import "./scss/Name.scss";

const Name = (props) => {
  //NameJson const
  const data = props.data.fields[0];
  const htmlForValue = "inlineFormInput";
  const inputClass = "form-control";
  const inputGroup = data.group;
  const inputName = data.name;
  const inputType = data.type;
  const inputLabel = data.label;
  const inputRequired = data.required;

  return (
    <>
      <label htmlFor={htmlForValue} className="name">
        {inputLabel}
      </label>
      <input
        required={inputRequired}
        name={inputName}
        type={inputType}
        className={inputClass}
        id={htmlForValue}
        group={inputGroup}
      />
    </>
  );
};

export default Name;
