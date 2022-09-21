import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function Detail() {
  const { id } = useParams
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`https://6329f4ec713d41bc8e67cc92.mockapi.io/api/v1/customer/1`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        // console.log(data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <div>{user.name}</div>;
}
