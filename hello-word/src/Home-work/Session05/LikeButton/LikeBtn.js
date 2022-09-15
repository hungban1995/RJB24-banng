import React, { useState } from 'react'

export default function LikeBtn() {
    const [like, setLike]=useState(false);
    
  return (
    <div className='container'>  <i
    className={"fa-solid fa-thumbs-up" + (like ? " active" : "")}
    style={{ fontSize: "40px" }}
    onClick={() => setLike(!like)}
  ></i></div>
  )
}
