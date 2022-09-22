import React, { useState } from "react";

import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Customer from "./customer";
import Detail from "./Detail";
import DetailProduct from "./DetailProduct";
import Form from "./form";
import FormUpdate from "./FormUpdate";

import Home from "./home";
import Product from "./product";
export default function Index() {
 
  const { user, setUser } = useState([]);
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/customer">
                Customer
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/form">
                RegisterForm
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/:id" element={<Detail/>}></Route>
          <Route path="/product/:id" element={<DetailProduct/>}></Route>

          <Route path="/update/:id" element={<FormUpdate  />}></Route>
          <Route path="/form" element={<Form  />}></Route>
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
