import React from "react";

export const Layout = (props) => (
  <div className="container">
    <div className="col">{props.children}</div>
  </div>
);
