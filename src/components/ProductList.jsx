import React, { useState } from "react";
import MOCK from "../assets/data/products.json";
import Product from "./Product";
import "./Product.css";

const ProductList = () => {
  const [list, setList] = useState(MOCK);

  const filterProducts = (selectedCategory) => {
    const sortedArray = MOCK.filter(
      (product) => product.category == selectedCategory
    );
    setList(sortedArray);
  };

  return (
    <>
      <div className="product-container">
        <h4>Filter By </h4>
        <div className="product-container">
          <button onClick={() => filterProducts("perfumes")}>Perfumes</button>
          <button onClick={() => filterProducts("chocolates")}>
            Chocolates
          </button>
          <button onClick={() => filterProducts("watches")}>Watches</button>
          <button onClick={() => setList(MOCK)}>View all</button>
        </div>
      </div>
      <div className="product-container">
        {list.map((product) => (
          <Product productData={product} id={21} name={"dsds"} />
        ))}
      </div>
    </>
  );
};

export default ProductList;

//Render Products
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
