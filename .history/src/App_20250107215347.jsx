// src/App.js
import React, { useState } from "react";
import CartModal from "./components/CartModal";
import ProductList from "./components/ProductList";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <header className="flex justify-between p-4 bg-gray-800 text-white">
        <h1 className="text-xl">Shopping Cart</h1>
        <button
          onClick={() => setIsCartOpen(true)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Cart ({cartItems.length})
        </button>
      </header>

      <ProductList onAddToCart={addToCart} />

      <CartModal
        isOpen={isCartOpen}
        onRequestClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
