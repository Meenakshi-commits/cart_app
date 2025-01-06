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

  const removeFromCart = (item, index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const toggleCartModal = () => {
    setIsCartModalOpen(!isCartModalOpen);
  };

  return (
    <div className="App">
      <head>
        <title>Fake Store</title>
        <meta name="description" content="A fake store application built with React and Tailwind CSS." />
      </head>
      <Navbar cartCount={cart.length} toggleCartModal={toggleCartModal} />
      <div className="flex">
        <div className="w-4/5">
          <ProductList products={products} addToCart={addToCart} />
        </div>
        {isCartModalOpen && (
          <div className="w-1/5">
            <CartModal
              cart={cart}
              removeFromCart={removeFromCart}
              toggleCartModal={toggleCartModal}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default App;