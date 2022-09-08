import React, { Component } from "react";
import image from "./Images/ex1.PNG";
export default class Ex1 extends Component {
  constructor(props) {
    super(props);
    this.state={
      likeButton: "Like this?",

    };
    this.likeClick=this.likeClick.bind(this);
  }

  likeClick() {
    this.setState({
      likeButton:"You like this!",

    });
  }
  render() {
    return (
      <div className="container">
        <h1>Like Button</h1>
        <img src={image} alt="dog"style={{width:'100px', height:'100px'}}/>
        <p>{this.state.likeButton}</p>
        <button className="btn btn-primary" onClick={this.likeClick}>   <i class="fa-solid fa-thumbs-up"></i></button>
      

      </div>
    );
  }
}
