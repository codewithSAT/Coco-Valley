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

const Product = ({ productData }) => {
  //Object destructuring
  const { name, price, brand, stock } = productData;
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);
  const [currentStock, setCurrentStock] = useState(0);

  return (
    <div className="products">
      <div className="product-name">{name}</div>
      <div className="product-price">{"$" + price}</div>
      <div className="product-brand">{brand}</div>

      {showCounter ? (
        <>{counterChip(count, setCount, setShowCounter, stock)}</>
      ) : (
        <button
          className="addButton"
          onClick={() => {
            setShowCounter(true);
            setCount(count + 1);
          }}
        >
          Add
        </button>
      )}
    </div>
  );
};

const counterChip = (count, setCount, setShowCounter, stock) => (
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
        onClick={() => setCount(count + 1)}
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
