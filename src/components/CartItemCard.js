import React from "react";
import "./CartItemCard.css";
import IncrementDecrementBtn from "./IncrementDecrementBtn";

export default function CartItemCard({ cartItem }) {
  return (
    <div className="cartItemList">
      <p>{cartItem.title}</p>
      <div className="cartItemCard">
        <img className="cartItemImg" src={cartItem.image} alt="cartItemImg" />
        <div className="inc-dec-block">
          <IncrementDecrementBtn cartItem={cartItem} />
        </div>
        <span className="cart-item-price">
          Price: ${(cartItem.quantity * cartItem.price).toFixed(2)}
        </span>
      </div>
    </div>
  );
}
