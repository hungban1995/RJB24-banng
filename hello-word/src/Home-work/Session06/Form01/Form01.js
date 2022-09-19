import React from "react";
import './style.css';
import avatar from "./Images/avatar.jpg";
export default function Form01() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container ">
      <div className="card-columns bg-info">
        <div className="card">
          <div className="cctitle">
            <button className="btn"><i class="fa-solid fa-chevron-left"></i></button>
          </div>
          <h3>Hi!</h3>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Enter email"
                name={"inputEmail"}
                onChange={handleChange}
              ></input>
              <button className="btn btn-block btn-success" type={"submit"}>
                Continue
              </button>
              <p style={{ textAlign: "center" }}>or</p>
              <button className="btn btn-block btn-light" type={"submit"}>
              <i class="fa-brands fa-facebook"></i> <b>Continue width Facebook</b>
              </button>{" "}
              <button className="btn btn-block btn-light" type={"submit"}>
              <i class="fa-brands fa-google"></i> <b>Continue width Google</b>              </button>{" "}
              <button className="btn btn-block btn-light" type={"submit"}>
              <i class="fa-brands fa-apple"></i><b> Continue width Apple</b>
              </button>
              <p>
                Don't have an account? <span>Sign up</span>
              </p>
              <p>
                <span>Forgot your password?</span>
              </p>
            </form>
          </div>
        </div>
        <div className="card">
          <div className="cctitle">  <button className="btn"><i class="fa-solid fa-chevron-left"></i></button></div>
         
          <h3>Sign up</h3>
          <div className="card-body">
            <p>
              Look's like you don't have an account. let's create a new account
              for <b>jane.doe@gmail.com</b>
            </p>
            <form onSubmit={handleSubmit}>
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name={"inputName"}
                onChange={handleChange}
              ></input>
              <input
                className="form-control"
                type="password"
                name="inputPassword"
                onChange={handleChange}
                placeholder="Password"
              ></input>

              <p>By selecting Agree and continue bellow,</p>
              <p>
                I agree to <span>Teams of Service and primary Policy</span>
              </p>
              <button className="btn btn-block btn-success" type={"submit"}>
                Agree and continue
              </button>
            </form>
          </div>
        </div>{" "}
        <div className="card">
          <div className="cctitle">
          <button className="btn"><i class="fa-solid fa-chevron-left"></i></button>
          </div>
          
          <h3>Login</h3>
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <img
                src={avatar}
                alt="avatar"
                style={{ borderRadius: "50%", float: "left" }}
              ></img>
              <h5>Jane Dow</h5>
              <p>jane.doe@gmail.com</p>
              <input
                className="form-control"
                type="password"
                name="inputPassword"
                onChange={handleChange}
                placeholder="Password"
              ></input>
              <button className="btn btn-block btn-success" type={"submit"}>
                Continue
              </button>
             
              <p>
                <span>Forgot your password?</span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
