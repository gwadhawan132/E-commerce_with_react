import React, { useCallback } from "react";
import { useCartContext } from "../context/CartContext";
import IncrementDecrementBtn from "./IncrementDecrementBtn";

export default function AddToCart({ product }) {
  const { items, addItem } = useCartContext();

  const incrementQuantity = useCallback(() => {
    addItem(product);
  }, [addItem, product]);

  if (items[product.id]) {
    return <IncrementDecrementBtn cartItem={items[product.id]} />;
  } else {
    return (
      <button className="product-add-button" onClick={incrementQuantity}>
        Add to cart
      </button>
    );
  }
}
