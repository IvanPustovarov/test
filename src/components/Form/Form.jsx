import React from "react";
import "./Form.scss";
//components
import Name from "../InputComponents/Name";
import Phone from "../InputComponents/Phone";
import Email from "../InputComponents/Email";
import Data from "../InputComponents/Data";
import Comment from "../InputComponents/Comment";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import Agreement from "../InputComponents/Agreement";
const Form = (props) => {
  //const project
  const data = props.data;
  const formTitle = data.title;
  const classCol = "d-inline col";

  return (
    <>
      <h2 className="form__title">{formTitle}</h2>
      <form>
        <div className="row">
          <div className={classCol}>
            <Name data={data} />
            <Email data={data} />
          </div>
          <div className={classCol}>
            <Phone data={data} />
            <Data data={data} />
          </div>
          <div className={classCol}>
            <Comment data={data} />
          </div>
        </div>
        <div className="row">
          <div className={classCol}>
            <Agreement data={data} />
          </div>
        </div>
        <div>
          <ButtonSubmit data={data} />
        </div>
      </form>
    </>
  );
};

export default Form;
