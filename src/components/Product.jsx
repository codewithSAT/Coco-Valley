import React, { useState } from "react";
import "./Product.css";

//  {
//   "id": "perfume-001",
//   "category": "perfumes",
//   "name": "Élégance Noire Eau de Parfum",
//   "brand": "Maison Luxure",
//   "price": 249.00,
//   "currency": "USD",
//   "imageUrl": "https://images.pexels.com/photos/735756/pexels-photo-735756.jpeg",
//   "description": "A rich blend of dark woods, black orchid and a hint of vanilla. Limited edition.",
//   "stock": 15,
//   "tags": ["luxury","limited edition","unisex"]
// }

//  props destructuring : props{content,id,name}

const Product = ({ productData, addToCart }) => {
  //Object destructuring
  const { name, price, brand, stock, bought } = productData;
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(bought);

  return (
    <div className="products">
      <div className="product-name">{name}</div>
      <div className="product-price">{"$" + price}</div>
      <div className="product-brand">{brand}</div>

      {!showCounter ? (
        <button
          className="addButton"
          onClick={() => {
            setShowCounter(true);
            setCount(count + 1);
            addToCart(productData);
          }}
        >
          Add
        </button>
      ) : (
        <>
          {counterChip(
            count,
            setCount,
            setShowCounter,
            stock,
            addToCart,
            productData
          )}
        </>
      )}
    </div>
  );
};

const counterChip = (
  count,
  setCount,
  setShowCounter,
  stock,
  addToCart,
  productData
) => (
  <>
    <div className="counter">
      <button
        className="yukiButton"
        onClick={() => {
          count === 0 ? setShowCounter(false) : setCount(count - 1);
        }}
      >
        -
      </button>
      <button className="yukiButton">{count}</button>
      <button
        className="yukiButton"
        disabled={count == stock}
        onClick={() => {
          setCount(count + 1);
          addToCart(productData);
        }}
      >
        +
      </button>
    </div>
    {count == stock && (
      <div className="stock-error">
        We have only {stock} items left in stock
      </div>
    )}
  </>
);

export default Product;
