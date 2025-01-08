// src/components/Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don't render modal if it's not open

  return (
    <div
      className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-96 p-6 rounded-lg shadow-lg relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>

        {children}
      </div>
    </div>
  );
};

export default Modal;
