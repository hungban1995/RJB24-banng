import React, { useState } from "react";

export default function RateBtn() {
  const [rate, setRate] = useState(0);
  const star = [1, 2, 3, 4, 5];
  const RenderStar = () => {
  
    return star.map((index) => (
        
      <div key={index} onClick={() => setRate(index)}>
        {index <= rate ? (
          <span className="fa fa-star  active" />
        ) : (
          <span className="fa fa-star" />
        )}
      </div>
    ));
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <RenderStar />
    </div>
  );
}
