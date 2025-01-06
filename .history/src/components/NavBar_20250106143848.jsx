import React from "react";

const Navbar = ({cartCount,toggleCartModal}) => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Fake Store</h1>
        <button onClick={toggleCartModal} className="bg-white text-blue-500 px-4 py-2 rounded> Cart ({cartCount})
        </button>
          </nav>
  )
  };
  } 