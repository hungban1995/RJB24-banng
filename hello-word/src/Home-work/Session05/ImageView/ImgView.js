import React, { useState } from "react";
import img1 from "./Images/1.jpg";
import img2 from "./Images/2.jpg";
import img3 from "./Images/3.jpg";
import img4 from "./Images/4.jpg";
import img5 from "./Images/5.jpg";

export default function ImgView() {
  const images = [img1, img2, img3, img4, img5];
  const index = 1;
  const [view, setView] = useState(images[index]);
  const nextImg = () => {
    setView(images[index + 1]);
  };

  const prevImg = () => {
    setView(images[index - 1]);
  };

  return (
    <div className="container">
      <img
        src={view}
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
      <div style={{display:'flex'}}>
        {images.map((i) =><img key={i} src={i} alt="abc"style={{width:"100px", height:"100px"}}></img>)}
      </div>
    </div>
  );
}   
