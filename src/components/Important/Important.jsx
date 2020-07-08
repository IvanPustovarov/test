import React from "react";

const Important = (props) => {
  const data = props.data.metadata.components[1];
  return (
    <>
      <h2>{data.metadata.title}</h2>
      <p>{data.metadata.text}</p>
    </>
  );
};

export default Important;
