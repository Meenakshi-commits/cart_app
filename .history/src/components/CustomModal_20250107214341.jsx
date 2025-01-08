// src/components/CustomModal.js
import React from 'react';

const CustomModal = ({ isOpen, onRequestClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-50"
      onClick={onRequestClose}
    >
      <div
        className="bg-white p-6 rounded-lg w-96 shadow-lg"
        onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside
      >
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default CustomModal;
