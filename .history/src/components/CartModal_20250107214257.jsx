// src/components/CartModal.js
import React from 'react';
import CustomModal from './CustomModal';

const CartModal = ({ isOpen, onRequestClose, cartItems, onRemoveFromCart }) => {
  return (
    <CustomModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-500">No items in your cart</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
              <button
                onClick={() => onRemoveFromCart(item.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove from Cart
              </button>
            </div>
          ))
        )}
      </div>
    </CustomModal>
  );
};

export default CartModal;
