// src/components/ProductItem.js
import React, { useState } from 'react';

const ProductItem = ({ product, onAddToCart, cartItems }) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const handleAddToCart = () => {
    if (cartItems.some(item => item.id === product.id)) {
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 2000); // Hide alert after 2 seconds
    } else {
      onAddToCart(product);
    }
  };

  return (
    <div className="max-w-sm rounded-lg shadow-lg overflow-hidden bg-white transition-transform transform hover:scale-105">
      <img src={product.image} alt={product.title} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        <div className="mt-4 text-lg font-bold text-gray-800">Price: ${product.price}</div>
        <button
          onClick={handleAddToCart}
          className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
        >
          Add to Cart
        </button>
        {alertVisible && (
          <div className="text-red-500 text-sm mt-2">Item already added to the cart</div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
