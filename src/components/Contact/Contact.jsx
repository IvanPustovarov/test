import React from "react";
import "./Contact.scss";

const Contact = (props) => {
  const data = props.data;
  return (
    <>
      <h2>{data.title}</h2>
      {data.fields.map((elem, index) => {
        if (elem.type === "textarea") {
          return (
            <form key={index}>
              <span className="label">{elem.label}</span>
              <textarea></textarea>
            </form>
          );
        }
        if (elem.type === "checkbox") {
          const checkboxWithHtml = () => {
            return { __html: `${elem.label}` };
          };
          return (
            <form key={index}>
              <p dangerouslySetInnerHTML={checkboxWithHtml()} />
              <input type={elem.type} />
            </form>
          );
        }
        return (
          <form key={index}>
            <span className="label">{elem.label}</span>
            <input
              type={`${elem.type}`}
              name={`${elem.name}`}
              group={`${elem.group}`}
              required={`${elem.required}`}
            />
          </form>
        );
      })}
    </>
  );
};

export default Contact;
