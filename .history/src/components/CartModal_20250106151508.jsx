import React from "react";

const CartModal = ({ cart, removeFromCart,toggleCartModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-md w-11/12 md:w-1/2">
                
                    <h2 className="text-xl font-bold mb-4">Cart</h2>
                    {cart.length === 0 ? ( <p>Your cart is empty</p>) :(
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="flex justify-between items-center mb-4">
                                    <div>
                                        <h3 className="font-bold">{item.title}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Remove</button>
                            ))}

                        </ul>
                    ) }
                    <button onClick={toggleCartModal} className="text-xl font-bold">&times;</button>
               
           
            </div>
        </div>
    );
}
export default CartModal;