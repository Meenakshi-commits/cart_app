import React from "react";

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="border p-4 rounded shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
            </div>
    )

}

export default ProductCard;