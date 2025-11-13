import { Routes, Route } from "react-router-dom";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
  const [cartList, setcartList] = useState([]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList updateCart={setcartList} />} />
        <Route path="cart" element={<Cart cartList={cartList} />} />
      </Routes>
    </>
  );
}

export default App;
