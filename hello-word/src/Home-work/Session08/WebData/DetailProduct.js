import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function DetailProduct() {
  const { id } = useParams()
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`https://6329f4ec713d41bc8e67cc92.mockapi.io/api/v1/product/${id}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>{product.name}</div>;
}
