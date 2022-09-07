import React from "react";
import RenderPerson from "./RenderPerson.js";

const arrayIcon = [
  { icon: "fa-solid fa-calendar-days" },
  { icon: "fa-solid fa-heart" },
  { icon: "fa-solid fa-graduation-cap" },
  { icon: "fa-solid fa-location-dot" },
];
const arrayTitle = ["DOB", "BG", "EDU", "RES"];
const arrayAtb = ["23/05/2014", "B+", "MCA", "Bangalore"];

export default function Person(props) {
  return (
    <div className="card">
      <div className="card-body">
        <img src={props.images} alt="person" />
        <h4>{props.name}</h4>
        <p>{props.job}</p>
        <div>
          {arrayIcon.map((inf, index) => (
            <RenderPerson
              key={index}
              icon={inf.icon}
              title={arrayTitle[index]}
              description={arrayAtb[index]}
            />
          ))}
        </div>
        <div style={{backgroundColor: props.color1, padding:'10px',margin: "20px 0" }}>
          <h5>EMAIL ID</h5>
          <p><i className="fa-solid fa-envelope"></i> <span>{props.email}</span></p>

        </div>
        <div style={{backgroundColor: props.colors,  padding:'10px', margin: "20px 0" }}>
        <h5>PHONE NO</h5>
          <p><i className="fa-solid fa-phone"></i> <span>{props.phone}</span></p>
        </div>
      </div>
    </div>
    );
    }
