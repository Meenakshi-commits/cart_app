import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

<div className="flex h-screen bg-gray-100">
        <div className="w-4/5 p-6 overflow-y-auto">
          <div className="grid grid-cols-6 gap-6">
            {products.map((product, index) => {
              return (
                <div key={index} className="p-4 bg-white rounded-lg shadow-md">
                  <img
                    className="object-cover w-full h-48 rounded-md"
                    src={`https://picsum.photos/seed/${product.avatar}/200/300`}
                    alt=""
                  />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-600">Rs.{product.price}</p>
                    <button
                      onClick={() => {
                        addToCart(product);
                      }}
                      className="w-full px-4 py-2 mt-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                    <span></span>