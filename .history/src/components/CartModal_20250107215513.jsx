// src/components/CartModal.js
import React from 'react';
import Modal from './Modal';

const CartModal = ({ isOpen, onClose, cartItems, onRemoveFromCart }) => {
  // Calculate total value
  const totalValue = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
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

      {cartItems.length > 0 && (
        <div className="mt-4 text-lg font-semibold text-gray-800">
          <p>Total: ${totalValue}</p>
        </div>
      )}

      <div className="flex justify-end space-x-4 mt-4">
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
        >
          Close
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
        >
          Confirm
        </button>
      </div>
    </Modal>
  );
};

export default CartModal;
