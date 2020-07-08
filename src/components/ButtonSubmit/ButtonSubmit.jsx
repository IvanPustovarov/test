import React from "react";
const ButtonSubmit = (props) => {
  const buttonText = props.data.submit_button.text;
  return (
    <>
      <button>{buttonText}</button>
    </>
  );
};

export default ButtonSubmit;
