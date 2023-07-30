import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import CartItemCard from "./CartItemCard";

export default function CartItems() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const { isCartOpen, setIsCartOpen, items, totalCartPrice } = useCartContext();
  useEffect(() => {
    if (totalCartPrice === 0) {
      setIsBtnDisabled(true);
      setIsCartOpen(false);
    } else {
      setIsBtnDisabled(false);
    }
  }, [setIsBtnDisabled, setIsCartOpen, totalCartPrice]);
  if (isCartOpen) {
    return (
      <div className="cart-list">
        <div className="cart-list-header">
          <span>Cart Items</span>
          <button onClick={() => setIsCartOpen(false)}>x</button>
        </div>
        {Object.keys(items).length ? (
          <div>
            <div className="cart-list-items">
              {Object.keys(items).map((key, i) => {
                return <CartItemCard cartItem={items[key]} key={i} />;
              })}
            </div>
            <div className="cart-list-footer">
              <span>Total Price: ${totalCartPrice.toFixed(2)}</span>
              <button className="checkout-btn" disabled={isBtnDisabled}>
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="no-item-in-cart">No Item Found in Your Cart.</div>
        )}
      </div>
    );
  } else {
    return <h3>No Item found in cart</h3>;
  }
  // } else {
  //   return null;
  // }
}
