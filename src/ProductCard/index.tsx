/* eslint-disable no-unused-vars */
import React from "react";
import Rating from "./rating";
import "./index.css";

type ProductCardPropsType = {
  product: {
    productName: string;
    productPrice?: number | "Нет в наличии.";
    productRating?: number;
    productImg?: string;
  };
};

const ProductCard: React.FC<ProductCardPropsType> = (props) => {
  const {
    product: {
      productName: name,
      productPrice: price = "Нет в наличии.",
      productRating: rating = 0,
      productImg,
    },
  } = props;
  const headerStyle = {
    backgroundImage: `url(${productImg})`,
  };
  const priceStr = typeof price === "number" ? `${price} Руб.` : price;

  return (
    <div className="product_card">
      <header className="product_card-header" style={headerStyle}>
        <button type="button" className="product_card-button">
          Быстрый просмотр
        </button>
        <button type="button" className="product_card-button">
          В корзину
        </button>
      </header>
      <div className="product_card-rating">
        <Rating rating={rating} />
      </div>
      <p className="product_card-name">{name}</p>
      <p className="product_card-price">{priceStr}</p>
    </div>
  );
};

export default ProductCard;
