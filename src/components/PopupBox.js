import React from "react";
import AddToCart from "./AddToCart";
import "./PopupBox.css";

export default function PopupBox({ selectedProduct }) {
  const removeItem = () => {
    selectedProduct = {};
  };
  return (
    <div>
      <div id="popup1" className="overlay">
        <div className="popup">
          <a className="close" href="#" onClick={removeItem}>
            &times;
          </a>
          <div className="content">
            <div className="selectedProduct">
              {!selectedProduct.id && "No Product Selected"}
              {
                <div>
                  {selectedProduct.id ? (
                    <div>
                      <p className="productDescription">
                        {selectedProduct.title}
                      </p>
                      <img
                        className="popUp-prod-Img"
                        src={selectedProduct.image}
                        alt={`${"image" + selectedProduct.id}`}
                      />
                      <div className="ratings">
                        <span>Ratings: {selectedProduct.rating.rate}</span>{" "}
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <span>
                          {" "}
                          Total Ratings: {selectedProduct.rating.count}{" "}
                        </span>
                      </div>
                      <hr />
                      <span className="product-card-footer">
                        <p>Price: {selectedProduct.price.toFixed(2)}</p>
                        <AddToCart product={selectedProduct} />
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
