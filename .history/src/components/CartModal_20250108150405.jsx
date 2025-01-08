import React from "react";

const CartModal = ({ cart, removeFromCart, toggleCartModal }) => {
  // Calculate total cart value
  const totalValue = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div
      className="bg-white w-11/12 md:w-1/2 p-6 rounded-lg shadow-lg"
      onClick={(e) => e.stopPropagation()} 
    >
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="font-bold">{item.title}</h3>
                  <p>Rs.{item.price}</p>
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
          <div className="mt-4 flex justify-between items-center">
            <p className="font-bold">Total:</p>
            <p className="font-bold">{totalValue}</p>
          </div>
        </>
      )}

      <div className="mt-4 flex justify-end">
        <button
          onClick={toggleCartModal}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
