import React from "react";
import "./index.css";
import ProdustCount from "./ProductCount";

type ProductCounterPropsType = {
  productName: string;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  productImage?: string;
};

const ProductCounter: React.FC<ProductCounterPropsType> = (props) => {
  const { productName, count, setCount, productImage } = props;

  const decreaseHandler = () => {
    if (count > 0) setCount((prev) => prev - 1);
  };

  const increaseHandler = () => {
    setCount(count + 1);
  };

  return (
    <div
      className="product_counter"
      style={{
        backgroundImage: `url(${productImage})`,
        backgroundSize: "100%",
      }}>
      <h1
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: 0,
          marginBottom: "80%",
        }}>
        {productName}
      </h1>
      <button onClick={decreaseHandler} type="button">
        -
      </button>
      {/* <span style={{ width: "30%", textAlign: "center" }}>{count}</span> */}
      <ProdustCount count={count} />
      <button onClick={increaseHandler} type="button">
        +
      </button>
    </div>
  );
};

export default ProductCounter;
