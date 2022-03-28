import React, { useState } from "react";
import { AddRounded, Favorite, StarRounded } from "@mui/icons-material";

const ItemCard = ({ imgSrc, name, ratings, price }) => {
  const [isFavourite, setFavourite] = useState(false);
  const [currentValue, setCurrentValue] = useState(Math.floor(ratings));
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  return (
    <div className="itemCard">
      <div
        className={`isFavourite ${isFavourite ? "active" : ""}`}
        onClick={() => setFavourite(!isFavourite)}
      >
        <Favorite />
      </div>
      <div className="imgBox">
        <img src={imgSrc} />
      </div>
      <div className="itemContent">
        <h3>{name}</h3>
        <div className="bottom">
          <div className="ratings">
            <div className="rating">
              {Array.apply(null, { length: 5 }).map((el, i) => (
                <StarRounded
                  key={i}
                  className={`star-rating ${
                    currentValue > i ? "orange" : "gray"
                  }`}
                  onClick={() => handleClick(i + 1)}
                  style={{ fontSize: "1rem" }}
                />
              ))}
            </div>
            <h3 className="price">
              <span>$</span>
              {price}
            </h3>
          </div>
          <div
            className="addtoCart"
            style={{
              background: "#f8901c",
              width: "20px",
              height: "20px",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddRounded
              className="add-icon"
              style={{ color: "white", fontSize: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
