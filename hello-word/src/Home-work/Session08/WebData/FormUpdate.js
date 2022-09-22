import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export default function FormUpdate() {
  const { id } = useParams();
  // const [user, setUser] = useState({});

  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    fetch(`https://6329f4ec713d41bc8e67cc92.mockapi.io/api/v1/customer/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomer(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (e) => {
    e.preventDefault();
    switch (true) {
      case e.target.name === "name":
        setCustomer((values) => ({
          ...values,
          [e.target.name]: e.target.value,
        }));

        break;
      case e.target.name === "email":
        setCustomer((values) => ({
          ...values,
          [e.target.name]: e.target.value,
        }));

        break;
      case e.target.name === "postCode":
        setCustomer((values) => ({
          ...values,
          [e.target.name]: e.target.value,
        }));

        break;
      case e.target.name === "dob":
        setCustomer((values) => ({
          ...values,
          [e.target.name]: e.target.value,
        }));

        break;
      case e.target.name === "phone":
        setCustomer((values) => ({
          ...values,
          [e.target.name]: e.target.value,
        }));

        break;
      case e.target.name === "address":
        setCustomer((values) => ({
          ...values,
          [e.target.name]: e.target.value,
        }));
        break;
      case e.target.type === "radio":
        if (e.target.id === "1")
          setCustomer((values) => ({
            ...values,
            [e.target.name]: e.target.value,
          }));
        else if (e.target.id === "2")
          setCustomer((values) => ({
            ...values,
            [e.target.name]: e.target.value,
          }));
        break;
      default:
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = customer;

    fetch(`https://6329f4ec713d41bc8e67cc92.mockapi.io/api/v1/customer/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log("success", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="col-3">
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={customer.name}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          className="form-control"
          type="email"
          name="email"
          value={customer.email}
          onChange={handleChange}
        />
        <label>address</label>
        <input
          className="form-control"
          type="text"
          name="address"
          value={customer.address}
          onChange={handleChange}
        />
        <label>postCode</label>
        <input
          className="form-control"
          type="text"
          name="postCode"
          value={customer.postCode}
          onChange={handleChange}
        />
        <label>Day of birth</label>
        <input
          className="form-control"
          type="text"
          name="dob"
          value={customer.dob}
          onChange={handleChange}
        />
        <label>phone </label>

        <input
          className="form-control"
          type="text"
          name="phone"
          value={customer.phone}
          onChange={handleChange}
        />
        <label htmlFor="gender">Man</label>
        <input
          type="radio"
          name="gender"
          value="man"
          id="1"
          onChange={handleChange}
        />
        <label htmlFor="gender">Woman</label>
        <input
          type="radio"
          id="2"
          name="gender"
          value="woman"
          onChange={handleChange}
        />

        <button type={"submit"} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
