import React, { Component } from 'react'

export default class ClassColor extends Component {
    constructor(props) {
        super(props);
    }
    setColor=()=>{
        return {
            color: this.props.color,
        }
    }
  render() {
    return (
      <div>
        <p style={this.setColor()} >
            {this.props.name}
        </p>
      </div>
    )
  }
}
