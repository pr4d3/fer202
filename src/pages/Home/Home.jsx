import React from "react";
import { Link } from "react-router";

export default function Home() {
  return (
    <>
      <div>Home</div>
      <Link to="/product">Go to Product</Link>
    </>
  );
}
