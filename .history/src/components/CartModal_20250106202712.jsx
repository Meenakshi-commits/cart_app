import React from 'react';

const CartModal = ({ cart, removeFromCart, toggleCartModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-row-reverse items-start">
      <div className="bg-white p-6 shadow-md h-screen w-4/12 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover"
                />
                <div className="flex-1">
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
    </div>
  );
};

export default CartModal;
