import React from 'react';

const CartModal = ({ cart, removeFromCart, toggleCartModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start">
      <div className="w-1/5 p-6 bg-white shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Shopping Cart</h2>
        <div className="space-y-4">
          {cart.map((item, index) => {
            return (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-600">Rs.{item.price}</p>
                </div>
                <button
                  onClick={() => {
                    removeFromCart(item, index);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            );
          })}
        </div>
        <button
          onClick={toggleCartModal}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;