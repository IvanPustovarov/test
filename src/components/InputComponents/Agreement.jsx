import React from "react";
import "./scss/Agreement.scss";

const Agreement = (props) => {
  const data = props.data.fields[5];
  const inputName = data.name;
  const inputType = data.type;
  const textWithHtml = () => {
    return { __html: `${data.label}` };
  };
  const htmlForValue = "inlineFormInput";
  return (
    <>
      <label className="label__checkbox">
        <input
          name={inputName}
          type={inputType}
          className="input__checkbox checkbox"
        />
        <span className="span__checkbox"></span>
      </label>
      <label
        name={inputName}
        dangerouslySetInnerHTML={textWithHtml()}
        htmlFor={htmlForValue}
        className="label__agreement"
      />
    </>
  );
};

export default Agreement;
