import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="popUpButton">
      <div title={product.title} className="product">
        <p className="productDescription">{product.title}</p>
        <img
          className="prodImg"
          src={product.image}
          alt={`${"image" + product.id}`}
        />
        <p>
          Ratings: {product.rating.rate} Count: {product.rating.count}
        </p>
        <div className="product-footer">
          <div className="product-price">
            Price: ${product.price.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}
