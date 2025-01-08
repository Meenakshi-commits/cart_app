import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal"; // Fixed import path for CartModal

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Fetch products from the API on component mount
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Toggle cart modal visibility
  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div className="App">
      {/* Navbar with cart count */}
      <Navbar cartCount={cart.length} toggleCartModal={toggleCartModal} />
      
      {/* List of products */}
      <ProductList products={products} addToCart={addToCart} />
      
      {/* Cart Modal */}
      {isCartModalOpen && (
        <CartModal
          cart={cart}
          removeFromCart={removeFromCart}
          toggleCartModal={toggleCartModal}
        />
      )}
    </div>
  );
};

export default App;

