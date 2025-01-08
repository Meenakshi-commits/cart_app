import React from "react";

const CartModal = ({ cart, removeFromCart, toggleCartModal }) => {
  // Calculate the total cart value
  const totalValue = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        
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

        {/* Display total cart value */}
        {cart.length > 0 && (
          <div className="mt-4 flex justify-between items-center font-bold">
            <p>Total:</p>
            <p>${totalValue}</p>
          </div>
        )}

        {/* Close button */}
        <div className="mt-4 flex justify-end">
          <button
            onClick={toggleCartModal}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
