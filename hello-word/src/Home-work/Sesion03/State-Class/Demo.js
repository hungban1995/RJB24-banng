import React from "react";
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  changeNumber = (x, number) => {
    if (x === 1 && number < 10) {
      number++;
    } else if (x === 2 && number > 0) {
      number--;
    }
    this.setState({
      number: number,
    });
  };
  disableBtn = (x, number) => {
    let status;
    if (x === 1 && number === 10) {
      status = "disabled";
    } else if (x === 2 && number === 0) {
      status = "disabled";
    }
    return status;
  };
  render() {
    return (
      <div className="container-md">
        <div className="row">
          <div className="col-md-12 mt-2">
            <button
              type="buttton"
              className={
                "btn btn-primary bg-primary me-2 " +
                this.disableBtn(1, this.state.number)
              }
              onClick={() => this.changeNumber(1, this.state.number)}
            >
              Tăng
            </button>
            <span>{this.state.number}</span>
            <button
              type="button"
              className={
                "btn btn-danger bg-danger ms-2 " +
                this.disableBtn(2, this.state.number)
              }
              onClick={() => this.changeNumber(2, this.state.number)}
            >
              Giảm
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Demo;