import React, { useEffect } from "react";
import { useCartContext } from "../context/CartContext";

export default function Header({ cartCount }) {
  const { setIsCartOpen, items } = useCartContext();

  return (
    <div>
      <span className="header">GW TRENDS</span>
      <div className="cart" onClick={() => setIsCartOpen(true)}>
        <img
          src="https://www.pinpng.com/pngs/m/215-2157533_free-png-download-shopping-cart-clipart-png-photo.png"
          height="30"
          alt="cart-img"
        />
        <span className="badge badge-warning" id="lblCartCount">
          {" "}
          {Object.keys(items).length}{" "}
        </span>
      </div>
    </div>
  );
}
