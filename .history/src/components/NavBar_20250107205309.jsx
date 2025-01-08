import React from "react";

const Navbar = ({ cartCount, onCartClick }) => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Fake Store</h1>
      <button
        onClick={onCartClick}
        className="flex items-center bg-blue-700 px-4 py-2 rounded"
      >
        <span>Cart</span>
        <span className="ml-2 bg-white text-blue-700 font-bold px-2 py-1 rounded">
          {cartCount}
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
