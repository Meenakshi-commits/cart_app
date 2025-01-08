// src/components/ProductList.js
import React from 'react';

const ProductList = ({ onAddToCart }) => {
  const products = [
    { id: 1, title: 'Product 1', description: 'This is product 1', price: 10 },
    { id: 2, title: 'Product 2', description: 'This is product 2', price: 20 },
    { id: 3, title: 'Product 3', description: 'This is product 3', price: 30 },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-gray-800">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-lg font-semibold text-gray-800">${product.price}</p>
          <button
            onClick={() => onAddToCart(product)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
