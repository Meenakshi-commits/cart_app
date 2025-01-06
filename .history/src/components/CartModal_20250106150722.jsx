import React from "react";

const CartModal = ({ cart, removeFromCart,toggleCartModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/2">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">Cart</h2>
                    <button onClick={toggleCartModal} className="text-xl font-bold">&times;</button>
               
                {cart.map((product) => (
                    <div key={product.id} className="flex justify-between items-center border-b py-2">
                        <div>
                            <h3 className="text-lg font-bold">{product.title}</h3>
                            <p className="text-sm text-gray-700">{product.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(product)} className="text-xl font-bold">&times;</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default CartModal;