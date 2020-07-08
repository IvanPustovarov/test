import React from "react";

const About = (props) => {
  const data = props.data.metadata.components[0];
  const textWithHtml = () => {
    return { __html: `${data.metadata.text}` };
  };
  return (
    <>
      <h2>{data.metadata.title}</h2>
      <p dangerouslySetInnerHTML={textWithHtml()} />
    </>
  );
};

export default About;
