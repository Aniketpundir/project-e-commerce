import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className="card-container" key={props.id} data-aos="fade-up">
        <div className="card" key={props.id}>
          <div className="card-img" key={props.id}>
            <img src={props.imgsrc} alt="" />
          </div>
          <div className="card-text" key={props.id}>
            <span>Sponsored</span>
            <h2>{props.title}</h2>
            <span className="quantity">{props.quantity}</span>
            <div className="priceSection">
              <h1>&#8377; {props.mainPrice}</h1>
              <h2 className="cros">&#8377; {props.discountPrice}</h2>
              <h3>{props.offer}</h3>
            </div>
            <div className="cart-s">
              <p>Free delivery</p>
              <NavLink to="">Cart</NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
