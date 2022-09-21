import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "./Images/logo.svg";
import images from "./Images/display_shape.svg";
export default function Form02() {
  const [inputs, setInputs] = useState({
    fistName: "",
    lastName: "",
    phoneNum: "",
    email: "",
    password: "",
    rePassword: "",
    accept: false,
  });
  const [list, setList] = useState([]);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    setList((prev) => [...prev, inputs]);
    e.preventDefault();
  };
  const handleChange = (e) => {
    e.preventDefault();

    switch (true) {
      case e.target.name === "fistName":
        setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));

        break;
      case e.target.name === "lastName":
        setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));

        break;
      case e.target.name === "phoneNum":
        setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));

        break;
      case e.target.name === "email":
        setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));

        break;
      case e.target.name === "password":
        
        setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));

        break;
      case e.target.name === "rePassword":
        setInputs((values) => ({ ...values, [e.target.name]: e.target.value }));
        break;
      default:
    }

    if (e.target.type === "checkbox") {
      setInputs((values) => ({ ...values, [e.target.name]: e.target.checked }));
    }
  };
  useEffect(() => {
    if (inputs.password !== inputs.rePassword) {
      setError("password must like");
    } else setError("");
  }, [inputs]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 bg-primary">
          <img className="logo" src={logo} alt="logo" />
          <h4 style={{ color: "white" }}>
            {" "}
            A few clicks away form creating your Lottery Display
          </h4>
          <img className="display-img" src={images} alt="images" />
        </div>
        <div className="col-8 p-5">
          <form onSubmit={handleSubmit}>
            <h5>Register</h5>
            <b>Manage all your lottery efficiently</b>
            <p>
              Let't get you all set up so you can verify your personal account
              and begin setting up your profile
            </p>
            <div className="row">
              <div className="col">
                <label>Fist Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="fistName"
                  value={inputs.fistName}
                  onChange={handleChange}
                ></input>
                <label>Phone Number</label>
                <input
                  className="form-control"
                  type="text"
                  name="phoneNum"
                  value={inputs.phoneNum}
                  onChange={handleChange}
                ></input>
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={inputs.password}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <label>Last Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="lastName"
                  value={inputs.lastName}
                  onChange={handleChange}
                ></input>
                <label>Email</label>
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  value={inputs.inputEmail}
                  onChange={handleChange}
                ></input>
                <label>Confirm Password</label>
                <span>{error}</span>
                <input
                  type={"password"}
                  className="form-control"
                  name="rePassword"
                  value={inputs.rePassword}
                  onChange={handleChange}
                />
              </div>
            </div>
            <input
              type="checkbox"
              name="accept"
              value={inputs.accept}
              checked={inputs.accept}
              onChange={handleChange}
            />
            <label> Yes, I want to receive Lottery Display email</label>
            <br />

            <input
              type="checkbox"
              name="accept"
              value={inputs.accept}
              checked={inputs.accept}
              onChange={handleChange}
            />
            <label>
              {" "}
              I agree to all the <span> Term, Primacy Policy</span> and{" "}
              <span>Fees</span>
            </label>
            <br />
            <button className="btn btn-primary" type={"submit"}>
              Create Account
            </button>
            <p>
              Already have an account? <span>Login</span>
            </p>
          </form>
        </div>
      </div>
      {/* {list.map()} */}
    </div>
  );
}
