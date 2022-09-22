import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Customer() {
  const navigate= useNavigate()
  const [customer, setCustomer] = useState([]);
  const onSubmitAsync = async () => {
    try {
      const url = "https://6329f4ec713d41bc8e67cc92.mockapi.io/api/v1/customer";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setCustomer(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onSubmitAsync();
  }, []);

  const handleDelete = (id) => {
    fetch(`https://6329f4ec713d41bc8e67cc92.mockapi.io/api/v1/customer/${id}` ,{
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        let listUserNew = customer.filter((item)=>item.id !== id)
        customer(listUserNew)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>createdAt</th>
            <th>postCode</th>
            <th>address</th>
            <th>dob</th>
            <th>email</th>
            <th>gender</th>
            <th>phone</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {customer.map((user) => {
            return (
              <tr key={user.id}>
                <th>{user.id}</th>
                <th onClick={()=> navigate(`/${user.id}`)}>{user.name}</th>
                <th>{user.createdAt}</th>
                <th>{user.postCode}</th>
                <th>{user.address}</th>
                <th>{user.dob}</th>
                <th>{user.email}</th>
                <th>{user.gender}</th>
                <th>{user.phone}</th>
                <th>
                  <button className="btn btn-primary" onClick={()=> navigate(`/update/${user.id}`)}> Update</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(user.id)}>
                    Delete
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
