import React from "react";
//components
import "./Contact.scss";

const Contact = (props) => {
  const data = props.data;
  return (
    <>
      <h2>{data.title}</h2>
    </>
  );
};

export default Contact;
