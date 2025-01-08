import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-bold">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-auto bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
