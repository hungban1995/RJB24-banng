import React, { useState } from "react";
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";
import img5 from "./Images/5.jpg";

export default function ImgView() {
  const images = [img1, img2, img3, img4, img5];

  const [view, setView] = useState(0);

  const nextImg = () => {
    console.log(view);
    if (view < images.length - 1) {
      setView(view + 1);
    }
  };
  const prevImg = () => {
    if (view > 0 && view <= images.length) {
      setView(view - 1);
    }
  };

  return (
    <div className="container">
      <img
        src={images[view]}
        alt="images"
        style={{ width: "600px", height: "400px" }}
      ></img>
      <br />
      <button className="btn btn-primary" onClick={nextImg}>
        Next
      </button>
      <button className="btn btn-primary" onClick={prevImg}>
        Prev
      </button>

      <div style={{ display: "flex" }}>
        {images.map((i) => (
          <div key={i} >
            <img
              src={i}
              alt="abc"
              style={{ width: "100px ", height: "100px" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
