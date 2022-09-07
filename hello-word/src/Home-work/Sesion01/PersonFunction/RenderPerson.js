import React from "react";

export default function RenderPerson(props) {
  return (
    <div style={{ borderBottom: "1px dotted black", margin: "20px 0" }}>
      <div style={{ float: "left" }}>
        {" "}
        <i className={props.icon}></i>
        <span>{props.title}</span>
      </div>{" "}
      <div style={{textAlign:'end'}}>
        <span>{props.description}</span>
      </div>
    </div>
  );
}
