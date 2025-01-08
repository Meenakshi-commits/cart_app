import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // Fetch products from the Fake Store API
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

  // Toggle Cart Modal visibility
  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar cartCount={cart.length} toggleCartModal={toggleCartModal} />

      {/* Product List */}
      <div className="max-w-screen-xl mx-auto"></div>
      <ProductList products={products} addToCart={addToCart} />

      {/* Cart Modal as a Dialog */}
      {isCartModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CartModal
            cart={cart}
            removeFromCart={removeFromCart}
            toggleCartModal={toggleCartModal}
          />
        </div>
      )}
    </div>
  );
};

export default App;
