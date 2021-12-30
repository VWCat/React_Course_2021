import React from "react";

type FruitCardPropsType = {
  name: string;
  cost: string;
};

const FruitCard: React.FC<FruitCardPropsType> = (props) => {
  const { name, cost } = props;

  return (
    <div>
      <h1>{name}</h1>
      <span>{cost}</span>
    </div>
  );
};
export default FruitCard;
