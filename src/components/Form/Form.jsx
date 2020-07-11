import React from "react";
import "./Form.scss";
//components
import Name from "../InputComponents/Name";
import Phone from "../InputComponents/Phone";
import Email from "../InputComponents/Email";
import Data from "../InputComponents/Data";
import Comment from "../InputComponents/Comment";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
const Form = (props) => {
  const data = props.data;
  const formTitle = data.title;
  return (
    <>
      <h2 className="form__title">{formTitle}</h2>
      <form>
        <div className="row">
          <div className="d-inline col">
            <Name data={data} />
            <Phone data={data} />
          </div>
          <div className="d-inline col">
            <Email data={data} />
            <Data data={data} />
          </div>
          <div className="d-inline col">
            <Comment data={data} />
          </div>
        </div>
        <ButtonSubmit data={data} />
      </form>
    </>
  );
};

export default Form;
