import React from "react";

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-sm text-gray-700">{product.price}</p>
            </div>
    )

}

export default ProductCard;