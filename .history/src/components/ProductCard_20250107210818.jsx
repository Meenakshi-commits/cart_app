import React from "react";

const ProductCard = ({ product, addToCart, cartItems }) => {
  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-c mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <button
        onClick={() => addToCart(product)}
        className={`mt-4 px-4 py-2 ${
          isInCart ? "bg-gray-400" : "bg-blue-500"
        } text-white rounded`}
        disabled={isInCart}
      >
        {isInCart ? "Item already added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
