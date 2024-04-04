import React from "react";
import cart from "./assets/cart.png";
import heart from "./assets/heart.png";
import search from "./assets/search.png";

const Card = (props) => {
  return (
    <div className="flower_card hover_card">
      <div className="flower_wrapper1">
        <img className="flowerImg" src={props.img} />
      </div>
      <div className="detail-wrapper">
        <div className="iconImg">
          <img src={cart} alt="" />
          <img src={heart} alt="" />
          <img src={search} alt="" />
        </div>
        <h1 className="flowerName">{props.title}</h1>
        <p className="flowerPrice">{props.price}</p>
      </div>
    </div>
  );
};

export default Card;
