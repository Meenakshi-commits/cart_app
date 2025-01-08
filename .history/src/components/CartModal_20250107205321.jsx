import React from "react";

const CartModal = ({ isOpen, cartItems, onClose, onRemoveFromCart }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white w-3/4 max-w-lg rounded shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">Cart Items</h2>
          <button onClick={onClose} className="text-red-500 font-bold">
            X
          </button>
        </div>
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div>
                  <p>{item.title}</p>
                  <p className="text-sm text-gray-500">${item.price}</p>
                </div>
                <button
                  onClick={() => onRemoveFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items in cart.</p>
        )}
      </div>
    </div>
  );
};

export default CartModal;
