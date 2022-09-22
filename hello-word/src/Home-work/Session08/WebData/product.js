import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Customer() {
  const navigate= useNavigate()
  const [products, setProducts] = useState([]);
  const onSubmitAsync = async () => {
    try {
      const url = "https://6329f4ec713d41bc8e67cc92.mockapi.io/api/v1/product";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      setProducts(json);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    onSubmitAsync();
  }, []);
  const handleClick = (e) => {
    e.preventDefault();
   
  };
  return (
    <div className="container">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>createdAt</th>
            <th>color</th>
            <th>price</th>
            <th>description</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product.id}>
                <th>{product.id}</th>
                <th onClick={() => navigate(`/product/${product.id}`)}>
                  {product.name}
                </th>
                <th>{product.createdAt}</th>
                <th>{product.color}</th>
                <th>{product.price}</th>
                <th>{product.description}</th>
                <th>
                  <button className="btn btn-danger" onClick={handleClick}>
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
