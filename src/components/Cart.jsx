import React from "react";
import "./Cart.css";

const Cart = ({ cartList }) => {
  const calculateTotal = () => {
    return cartList.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartList.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartList.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <h4>{item.name}</h4>
                  <p className="item-brand">{item.brand}</p>
                </div>
                <div className="item-price">${item.price}</div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${calculateTotal()}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;


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