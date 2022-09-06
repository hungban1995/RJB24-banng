import React from "react";
import RenderChartColumn from "./RenderChartColumn.js";
const arrayDays = [
  { unit: "MON" },
  { unit: "TUE" },
  { unit: "WED" },
  { unit: "THU" },
  { unit: "FRI" },
];
const bgColor = ["red", "green", "blue", "yellow", "cyan"];

const percenTages = [20, 45, 30, 80, 75];

export default function ChartColumn(props) {
  return (
    <div className="card">
      <div style={{ textAlign: "center" }}>
        <p>{props.text}</p>
        <h4>{props.total}</h4>
        <hr />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {arrayDays.map((c, index) => (
          <RenderChartColumn
            key={index}
            unit={c.unit}
            color={bgColor[index]}
            percentages={percenTages[index]}
          />
        ))}
      </div>
    </div>
  );
}
