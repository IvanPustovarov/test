import React from "react";
import "./ButtonSubmit.scss";
const ButtonSubmit = (props) => {
  const buttonText = props.data.submit_button.text;
  return (
    <>
      <button className="button__submit" type="submit">
        {buttonText}
      </button>
    </>
  );
};

export default ButtonSubmit;
