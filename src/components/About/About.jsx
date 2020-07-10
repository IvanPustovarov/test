import React from "react";

const About = (props) => {
  const data = props.data.metadata.components[0];
  const textWithHtml = () => {
    return { __html: `${data.metadata.text}` };
  };
  return (
    <>
      <h2 className="about__title">{data.metadata.title}</h2>
      <p dangerouslySetInnerHTML={textWithHtml()} className="about__text" />
    </>
  );
};

export default About;
