import React from 'react'

export default function Profile(props) {
  return (
    <div className="col-6 m-3">
    <div
      className="title"
      style={{
        float: "left",
        width: "30%",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <i
        className={props.iconName}
        style={{ color: props.color, fontSize: "30px" }}
      >    </i>{" "}
      <b>{props.text}</b>
    </div>
    <div className="progress rounded-0 " style={{ height: "30px" }}>
      <div
        className="progress-bar"
        style={{
          backgroundColor: props.color,
          width: props.percentage + "%",
        }}
      ></div>
    </div>
  </div>
  )
}
