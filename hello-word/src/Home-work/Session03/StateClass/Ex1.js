import React, { Component } from "react";
import image from "./Images/ex1.PNG";

export default class Ex1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeS: true,
      rateS: 0,
    };
    this.likeClick = this.likeClick.bind(this);
    this.renderStar = this.renderStar.bind(this);
  }

  likeClick() {
    this.setState((prevStave) => ({
      likeS: !prevStave.likeS,
    }));
  }
  renderStar = (id) => {
    return (
      <div onClick={() => this.setState({ rateS: id })}>
        {id <= this.state.rateS ? (
          <span className="fa fa-star  checked" />
        ) : (
          <span className="fa fa-star" />
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="container">
        <h1>Like Button</h1>

        <i
          className={
            "fa-solid fa-thumbs-up" + (this.state.likeS ? "" : " checked")
          }
          onClick={this.likeClick}
        ></i>

        <h1>rate</h1>

        <div style={{ display: "flex" }}>
          {this.renderStar(1)}
          {this.renderStar(2)}
          {this.renderStar(3)}
          {this.renderStar(4)}
          {this.renderStar(5)}
        </div>

        {/* <img
          src={image}
          alt="dog"
          style={{ width: "400px", height: "400px" }}
        /> */}
      </div>
    );
  }
}
