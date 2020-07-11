import React from "react";
import "./scss/Comment.scss";

const Comment = (props) => {
  const data = props.data.fields[4];
  const inputType = data.type;
  const inputLabel = data.label;
  const inputName = data.name;
  const inputGroup = data.group;
  const htmlForValue = "exampleFormControlTextarea1";

  return (
    <>
      <label htmlFor={htmlForValue} className="name">
        {inputLabel}
      </label>
      <textarea
        rows="4"
        name={inputName}
        group={inputGroup}
        type={inputType}
        className="form-control textarea_custom"
        id={htmlForValue}
      />
    </>
  );
};

export default Comment;
