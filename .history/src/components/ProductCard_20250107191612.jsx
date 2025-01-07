import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-contain mb-2"
      />
      <h2 className="text-md font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-4">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
