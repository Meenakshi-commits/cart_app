// src/App.js
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter(item => item.id !== productId)
    );
  };

  const handleOpenCart = () => {
    setIsModalOpen(true);
  };

  const handleCloseCart = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App min-h-screen bg-gray-100">
      <Navbar cartItemsCount={cartItems.length} onOpenCart={handleOpenCart} />
      <ProductList onAddToCart={handleAddToCart} cartItems={cartItems} />
      <CartModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseCart}
        cartItems={cartItems}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
