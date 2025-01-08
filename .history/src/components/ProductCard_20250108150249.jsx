import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="flex h-screen bg-gray-100">
    <div className="grid grid-cols-6 gap-6">
      {/* Image Section */}
      <div className="p-4 bg-white rounded-lg shadow-md">
        <img
          className="object-cover w-full h-48 rounded-md"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-bold line-clamp-2">{product.title}</h3>

        <p className="text-gray-500 mt-2">Rs.{product.price}</p>

        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {product.description}
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product)}
          className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
};

export default ProductCard;
