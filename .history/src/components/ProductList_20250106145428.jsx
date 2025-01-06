import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
}
export default ProductList;