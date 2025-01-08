import React from "react";

const ProductList = ({ products, addToCart }) => {
  const ProductCard = ({ product }) => (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <img
        className="object-cover w-full h-48 rounded-md"
        src={product.image}
        alt={product.title}
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold line-clamp-2">{product.title}</h3>
        <p className="text-gray-500 mt-2">Rs.{product.price}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3">
          {product.description}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      {products.length > 0 ? (
        products.map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <p className="col-span-full text-center text-gray-500">No products available.</p>
      )}
    </div>
  );
};

export default ProductList;
