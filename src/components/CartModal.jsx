import React from 'react';

const CartModal = ({ cart, removeFromCart, toggleCartModal }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md h-full">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p>${item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={toggleCartModal}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Close
      </button>
    </div>
  );
};

export default CartModal;
