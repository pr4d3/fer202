import Home from "./pages/Home/Home.jsx";
import Product from "./pages/Product/Product.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import React, { Component } from "react";
import { Route, Routes } from "react-router";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar.jsx";

export default function App() {
  return (
    <>
      {/* <MyNavbar /> */}
          
      <Routes>
        <Route element={<MyNavbar/>}
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
}
