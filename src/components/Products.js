import React, { useState, useRef } from "react";
import Loader from "../common/Loader";
import Header from "./Header";
import NavItems from "./NavItems";
import ProductCard from "./ProductCard";
import PopupBox from "./PopupBox";
import { useProductContext } from "../context/ProductContext";
import CartItems from "./CartItems";
import { useCartContext } from "../context/CartContext";

export default function Products() {
  const { isLoadingData, data, loadError } = useProductContext();
  const { setIsCartOpen } = useCartContext();
  const [selectedProduct, setSelectedProduct] = useState({});

  const cartCount = useRef(0);
  const onSelectItem = (product) => {
    setSelectedProduct(product);
    setIsCartOpen(false);
  };

  return (
    <div className="my-products">
      <Header cartCount={cartCount} />
      <NavItems />
      <hr />
      <div className="container">
        <div className="productList">
          {isLoadingData ? (
            <Loader />
          ) : (
            <div className="products">
              {data.map((product, i) => (
                <div className="product-container" key={`${product.id}_${i}`}>
                  <a href="#popup1" onClick={() => onSelectItem(product)}>
                    <ProductCard href="#popup1" product={product} />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <PopupBox selectedProduct={selectedProduct} />
      <CartItems />
    </div>
  );
}
