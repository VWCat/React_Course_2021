import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProductCounter from "./ProductCounter";

const App = () => {
  return (
    <div className="App">
      <ProductCounter product={{ productName: "Orange", count: 5 }} />
      <ProductCounter product={{ productName: "Apple", count: 7 }} />
      <ProductCounter product={{ productName: "Pineapple" }} />
    </div>
  );
};

export default App;
