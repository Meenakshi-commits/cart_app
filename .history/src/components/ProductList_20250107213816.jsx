// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductList = ({ onAddToCart, cartItems }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching products", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {products.map(product => (
        <ProductItem key={product.id} product={product} onAddToCart={onAddToCart} cartItems={cartItems} />
      ))}
    </div>
  );
};

export default ProductList;
