import React from "react";

const Navbar = ({cartCount,toggleCartModal}) => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
    </nav>
  );
};