import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProductCard from "./ProductCard";
// import Rating from "./ProductCard/rating";
// import ProductCounter from "./ProductCounter";
// import Logo from "./img/logo192.png";
import Apple from "./img/Apple-256x256.png";
import Orange from "./img/Orange-256x256.png";
import Pear from "./img/Pear-256x256.png";

const App = () => {
  return (
    <div className="App">
      <ProductCard
        product={{
          productName: "Яблоко",
          productPrice: 99.9,
          productRating: 2.8,
          productImg: Apple,
        }}
      />
      <ProductCard
        product={{
          productName: "Апельсин",
          productPrice: 109.9,
          productRating: 5,
          productImg: Orange,
        }}
      />
      <ProductCard
        product={{
          productName: "Груша",
          productPrice: "Нет в наличии.",
          productRating: 4.5,
          productImg: Pear,
        }}
      />
    </div>
  );
};

export default App;
