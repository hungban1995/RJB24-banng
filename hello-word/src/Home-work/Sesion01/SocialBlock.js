import React from "react";

export default function SocialBlock(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: "200px",
        height: "250px",
        float: "left",
        display: "flex",
        padding: "10px",
        margin: "20px"
      }}
    >
      <i
        className={props.iconName}
        style={{ fontSize: "40px", color: "white" }}
      ></i>

      <div style={{ alignSelf: "flex-end", float: "end" }}>
        <h5>{props.text}</h5>
        <span>{props.total}</span>
        <span> {props.unit}</span>
      </div>
    </div>
  );
}
