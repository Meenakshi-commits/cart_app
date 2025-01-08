// src/components/CartModal.js
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

const CartModal = ({ isOpen, onRequestClose, cartItems, onRemoveFromCart }) => {
  // Calculate total value of the cart
  const totalValue = cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <Dialog open={isOpen} handler={onRequestClose}>
      <DialogHeader>Your Cart</DialogHeader>
      <DialogBody>
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">No items in your cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="border-b pb-4">
                <h4 className="text-xl font-semibold text-gray-800">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
                <Button
                  color="red"
                  size="sm"
                  onClick={() => onRemoveFromCart(item.id)}
                  className="mt-2"
                >
                  Remove from Cart
                </Button>
              </div>
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="mt-4 text-lg font-semibold text-gray-800">
            <p>Total: ${totalValue}</p>
          </div>
        )}
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={onRequestClose}
          className="mr-1"
        >
          <span>Close</span>
        </Button>
        <Button color="green" onClick={onRequestClose}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default CartModal;
