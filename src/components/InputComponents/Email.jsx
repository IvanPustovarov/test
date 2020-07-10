import React from "react";

import "./scss/Email.scss";

const Email = (props) => {
  const data = props.data.fields[2];
  //const input
  const emailId = "exampleFormControlInput1";
  const placeholderExample = "name@example.com";
  const emailGroup = data.group;
  const emailName = data.name;
  const emailType = data.type;
  const emailLabel = data.label;
  const emailRequired = data.required;

  return (
    <>
      <label htmlFor={`${emailId}`} className="e-mail">
        {emailLabel}
      </label>
      <input
        type={`${emailType}`}
        className="form-control"
        id={`${emailId}`}
        placeholder={`${placeholderExample}`}
        name={`${emailName}`}
        group={`${emailGroup}`}
        required={`${emailRequired}`}
      />
    </>
  );
};

export default Email;
