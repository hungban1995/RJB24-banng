import React from "react";

export default function RenderChartColumn(props) {
  return (
    <div>
      <div
        style={{
          alignItems: "center",
          width: "50px",
          height: "50px",
          display: "flex",
        }}
      >
        <div
          className="progress rounded-0"
          style={{ width: "100%", transform: "rotate(-90deg)" }}
        >
          <div
            className="progress-bar"
            style={{
              backgroundColor: props.color,
              width: props.percentages + "%",
            }}
          ></div>
        </div>
      </div>
      <div
        style={{
          width: "50px",
          height: "30px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {props.unit}
      </div>
    </div>
  );
}
