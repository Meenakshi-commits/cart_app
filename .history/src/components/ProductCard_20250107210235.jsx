import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded p-4 flex flex-col h-[400px]">
      {/* Image container with fixed aspect ratio */}
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
      {/* Product details */}
      <h3 className="text-lg font-bold truncate">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;