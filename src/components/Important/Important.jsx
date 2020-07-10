import React from "react";

const Important = (props) => {
  const data = props.data.metadata.components[1];
  const importantText = data.metadata.text;
  const importantTitle = data.metadata.title;
  return (
    <>
      <h2 className="important_title">{importantTitle}</h2>
      <p className="important_text">{importantText}</p>
    </>
  );
};

export default Important;
