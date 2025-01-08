// src/components/CartModal.js
import React from 'react';
import Modal from 'react-modal';

const CartModal = ({ isOpen, onRequestClose, cartItems, onRemoveFromCart }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cart"
      className="bg-white w-full sm:w-96 p-6 rounded-lg shadow-lg overflow-y-auto"
      overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-50"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h2>
      <button
        onClick={onRequestClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        X
      </button>
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
    </Modal>
  );
};

export default CartModal;
