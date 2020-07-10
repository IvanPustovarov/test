import React from "react";
//components
import Name from "../InputComponents/Name";
import Phone from "../InputComponents/Phone";
import Email from "../InputComponents/Email";
import Data from "../InputComponents/Data";
import Comment from "../InputComponents/Comment";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
const Form = (props) => {
  const data = props.data;
  return (
    <>
      <h2>{data.title}</h2>
      <form>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <Name data={data} />
          </div>
          <div className="col-md-4 mb-3">
            <Phone data={data} />
          </div>
          <div className="col-md-4 mb-3">
            <Comment data={data} />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-4 mb-3">
            <Email data={data} />
          </div>
          <div className="col-md-4 mb-3">
            <Data data={data} />
          </div>
        </div>

        <ButtonSubmit data={data} />
      </form>
    </>
  );
};

export default Form;
