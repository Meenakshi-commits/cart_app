import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="border rounded-lg p-4 flex flex-col shadow-md bg-white">
      {/* Image Section */}
      <div className="w-full flex justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-[200px] h-[200px] object-contain"
        />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold line-clamp-2">{product.title}</h3>

      {/* Price */}
      <p className="text-gray-500 mt-2">${product.price}</p>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-2 line-clamp-3">{product.description}</p>

      {/* Add to Cart Button */}
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
