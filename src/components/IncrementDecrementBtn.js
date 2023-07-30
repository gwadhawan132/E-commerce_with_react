import React from "react";
import { useCartContext } from "../context/CartContext";

export default function IncrementDecrementBtn({ cartItem }) {
  const { addItem, removeItem } = useCartContext();
  return (
    <div>
      <span className="inc-dec-btn">
        <button className="decrementItem" onClick={() => removeItem(cartItem)}>
          -{" "}
        </button>
       <span className="item-count">{cartItem.quantity}</span> 

        <button className="incrementItem" onClick={() => addItem(cartItem)}>
          +
        </button>
      </span>
    </div>
  );
}
