import React, { useEffect, useState } from "react";

export default function Form(props) {

  const [customer, setCustomer] = useState([
    {
      name: "",
      postCode: "",
      address: "",
      dob: "",
      email: "",
      gender: "",
      phone: "",
    },
  ]);
  const [customers, setCustomers] = useState([]);
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
  useEffect(() => {
    console.log(customers);
  }, [customers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCustomers((prev) => [...prev, customer]);
    
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
          type="date"
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
