import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert('Item already added to the cart');
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div className="App">
      <Navbar cartCount={cart.length} toggleCartModal={toggleCartModal} />
      <div className="flex">
        {/* Left Section - Product List */}
        <div className="w-3/4 p-4">
          <ProductList products={products} addToCart={addToCart} />
        </div>
        {/* Right Section - Cart Modal */}
        <div className="w-1/4 p-4 bg-gray-100">
          {isCartModalOpen ? (
            <CartModal
              cart={cart}
              removeFromCart={removeFromCart}
              toggleCartModal={toggleCartModal}
            />
          ) : (
            <div className="flex justify-center items-center h-full">
              <p className="text-gray-500">Cart is closed. Click "Cart" to toggle.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
