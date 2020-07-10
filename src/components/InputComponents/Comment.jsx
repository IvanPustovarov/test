import React from "react";
import "./scss/Comment.scss";

const Comment = (props) => {
  const data = props.data;
  return (
    <>
      <label htmlFor="exampleFormControlTextarea1" className="name">
        Name
      </label>
      <textarea
        cols="50"
        rows="3"
        className="form-control textarea_custom"
        id="exampleFormControlTextarea1"
        placeholder="Jane Doe"
      />
    </>
  );
};

export default Comment;
