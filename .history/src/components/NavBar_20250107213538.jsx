// src/components/Navbar.js
import React from 'react';

const Navbar = ({ cartItemsCount, onOpenCart }) => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fake Store</h1>
        <button
          onClick={onOpenCart}
          className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Cart ({cartItemsCount})
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
