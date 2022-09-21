import React, { useState, useEffect } from "react";

export default function FormFill() {
  const [inputs, setInputs] = useState({
    email: undefined,
    password: undefined,
    address: undefined,
    address2: undefined,
    check: true,
  });
  const [provinces, setProvinces] = useState([]);
  const onSubmitAsync = async () => {
    try {
      const url = "https://6329a2fbd2c97d8c526c3e6c.mockapi.io/api/v1/users";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
        setProvinces(json)
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onSubmitAsync();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

  };
  const handleChange = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container" style={{ textAlign: "center" }}>
      <form onSubmit={handleSubmit}>
        <div className="row pb-3">
          <div className="col-6">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            
              
            
          </div>
          <div className="col-6">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="p3">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="1234 Main Street"
            onChange={handleChange}
          />
        </div>
        <div className="p3">
          <label>Address2</label>
          <input
            type="text"
            className="form-control"
            name="address2"
            placeholder="Apartment, studio, or floor"
            onChange={handleChange}
          />
        </div>

        <div className="row p3">
          <div className="col-4">
            <label>City</label>
            <select
              className="form-control"
              name="city"
              value=""
              onChange={handleChange}
            >
              {provinces.map((city, i) => {
                return (
                  <option key={i} value={city.id}>
                    {city.provinces}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-4">
            <label>District</label>
            <select
              className="form-control"
              name="district"
              value=""
              onChange={handleChange}
            >
              {provinces.map((name, i) => {
                return (
                  <option key={i} value={name.id}>
                    {name.provinces}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="col-4">
            <label>Commune</label>
            <select
              className="form-control"
              name="commune"
              value=""
              onChange={handleChange}
            >
              {provinces.map((name, i) => {
                return (
                  <option key={i} value={name.id}>
                    {name.id}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <br />

        <input
          type="checkbox"
          name="check-me"
          value=""
          onChange={handleChange}
        />
        <label htmlFor="children">check me out</label>
        <br />
        <button className="btn btn-primary" type={"submit"}>
          Sign in
        </button>
      </form>
    </div>
  );
}
