import React from "react";
import "./rating.css";
import { ReactComponent as StarFilled } from "../img/StarFilled.svg";
import { ReactComponent as StarBlank } from "../img/StarBlank.svg";

type RatingPropsType = {
  rating: number;
};

const Rating: React.FC<RatingPropsType> = (props) => {
  const { rating } = props;

  return (
    <div className="rating">
      <div className="rating_stars">
        {
          [...Array(5)].map((_, idx) =>
            idx <= rating - 1 ? (
              <StarFilled className="rating_star" />
            ) : (
              <StarBlank className="rating_star" />
            )
          )
          /* {{for (let i:number =1; i <= 5;i++) {
            if (i<rating) {
                return <StarFilled className="rating_star" />}
                else {
                    return <StarBlank className="rating_star" />
                }
        }}} */
        }
        {/* <StarFilled className="rating_star" />
        <StarFilled className="rating_star" />
        <StarFilled className="rating_star" />
        <StarFilled className="rating_star" />
        <StarFilled className="rating_star" /> */}
      </div>
      <p>{rating}</p>
    </div>
  );
};

export default Rating;
