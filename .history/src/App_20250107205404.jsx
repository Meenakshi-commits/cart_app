import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddToCart = (product) => {
    if (cart.some((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setIsModalOpen(true)}
      />
      <ProductList onAddToCart={handleAddToCart} />
      <CartModal
        isOpen={isModalOpen}
        cartItems={cart}
        onClose={() => setIsModalOpen(false)}
        onRemoveFromCart={handleRemoveFromCart}
      />
    </div>
  );
};

export default App;
