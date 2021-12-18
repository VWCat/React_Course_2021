import React, { useState } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import ProductCard from "./ProductCard";
// import Rating from "./ProductCard/rating";
// import ProductCounter from "./ProductCounter";
// import Logo from "./img/logo192.png";
import AppleImg from "./img/Apple-256x256.png";
import OrangeImg from "./img/Orange-256x256.png";
import PearImg from "./img/Pear-256x256.png";
import ProductCounter from "./ProductCounter";

const App = () => {
  const [appleCount, setAppleCount] = useState(0);
  const [orangeCount, setOrangeCount] = useState(0);
  const [pearCount, setPearCount] = useState(0);

  return (
    <div className="App">
      <ProductCounter
        productName="Apple"
        count={appleCount}
        setCount={setAppleCount}
        productImage={AppleImg}
      />
      <ProductCounter
        productName="Orange"
        count={orangeCount}
        setCount={setOrangeCount}
        productImage={OrangeImg}
      />
      <ProductCounter
        productName="Pear"
        count={pearCount}
        setCount={setPearCount}
        productImage={PearImg}
      />
      {/* <ProductCard
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
      <div style={{ width: "500px" }} /> */}
    </div>
  );
};

export default App;
