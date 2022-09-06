import React from "react";

export default function ChartBar1(props) {
  return (
    <div className="col-6 mb-3">
      <div
        className="title"
        style={{
          float: "left",
          backgroundColor: props.color1,
          width: "30%",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span>{props.text}</span>
      </div>
      <div className="progress rounded-0" style={{ height: "50px" }}>
        <div
          className="progress-bar"
          style={{
            backgroundColor: props.colors,
            width: props.percentage + "%",
          }}
        >
          <span>{props.percentage}%</span>
        </div>
      </div>
    </div>
  );
}
